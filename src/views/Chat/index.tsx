import React, { FC, useState, useEffect, useCallback } from 'react'
import './chat.less'
import { Button, Input, List, Avatar, notification } from 'antd'
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { getAnswer } from '@/api'
import { Message } from '@/views/Chat/type'
import { RootState } from '@/store/rootReducer'

const { TextArea } = Input

const Chat: FC = () => {
  const [messages, setMessages] = useState<Array<Message>>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const cid = useSelector((state: RootState) => state.cid.value) // 确保state路径和变量名正确

  // 使用cid
  console.log('cid', cid)

  useEffect(() => {
    const welcomeMessage: Message = {
      sender: 'bot',
      content: '你好👋！我是人工智能助手 ChatGLM2-6B，可以帮助你解答问题。'
    }
    setMessages([welcomeMessage])
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }, [])

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      sender: 'user',
      content: inputValue
    }

    setMessages(prevMessages => [...prevMessages, newMessage])
    setInputValue('')
    setLoading(true)

    try {
      const res = await getAnswer({
        cid: cid,
        question: inputValue
        // 根据需要添加更多历史记录等
      })

      const botReply: Message = {
        sender: 'bot',
        content: res?.data?.answer || '抱歉，我无法处理你的请求。'
      }
      setMessages(prevMessages => [...prevMessages, botReply])
    } catch (error) {
      console.error('Error sending message:', error)
      notification.error({
        message: '发送消息失败',
        description: '网络错误或服务器问题，请稍后再试。'
      })
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', content: '发送消息时出错。' }])
    } finally {
      setLoading(false)
    }
  }, [inputValue])

  return (
    <div className="chat-container">
      <List
        className="message-list"
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  className={'avatar'}
                  icon={item.sender === 'user' ? <UserOutlined /> : <RobotOutlined />}
                />
              }
              title={item.sender === 'user' ? '你' : 'ChatBot'}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <div className="message-input">
        <TextArea
          rows={3}
          value={inputValue}
          onChange={handleInputChange}
          onPressEnter={sendMessage}
        />
        <Button
          type="primary"
          className="sendButton"
          onClick={sendMessage}
          loading={loading}
          icon={<SendOutlined />}
          disabled={!inputValue.trim()}>
          发送
        </Button>
      </div>
    </div>
  )
}

export default Chat
