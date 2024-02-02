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
  const cid = useSelector((state: RootState) => state.urlParams.cid) // 获取cid
  const name = useSelector((state: RootState) => state.urlParams.name) // 获取cid
  const [history, setHistory] = useState<Array<[string, string]>>([]) // 维护对话历史

  // 使用cid
  console.log('cid', cid)

  useEffect(() => {
    const welcomeMessage: Message = {
      sender: 'bot',
      content: `你好👋！我是人工智能助手 ${name}，可以帮助你解答问题。`
    }

    setMessages([welcomeMessage])
    setHistory([
      // 初始对话历史
      ['bot', welcomeMessage.content]
    ])
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

    // 更新history数组
    const updatedHistory = [...history, ['user', inputValue]]

    try {
      const res = await getAnswer({
        cid: cid,
        question: inputValue,
        history: updatedHistory // 发送当前对话历史
      })

      const botReply: Message = {
        sender: 'bot',
        content: res?.data?.answer || '抱歉，我无法处理你的请求。'
      }
      setMessages(prevMessages => [...prevMessages, botReply])

      // 更新history数组以包含bot的回复
      setHistory(prevHistory => [...prevHistory, ['bot', botReply.content]])
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
  }, [inputValue, history])

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
