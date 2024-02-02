// Chat.tsx
import React, { FC, useState, useEffect } from 'react'
import './chat.less'
import { Button, Input, List, Avatar } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { getAnswer } from '@/api'
import { Message } from '@/views/Chat/type'

const { TextArea } = Input

const Chat: FC = () => {
  const [messages, setMessages] = useState<Array<Message>>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 初始化对话，可以添加欢迎语等
    const welcomeMessage: Message = {
      sender: 'bot',
      content: '你好👋！我是人工智能助手 ChatGLM2-6B，可以帮助你解答问题。'
    }
    setMessages([welcomeMessage])
  }, [])

  const sendMessage = async () => {
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
        cid: 'chatglm2-6b',
        question: inputValue
        // 根据需要添加更多历史记录等
      })

      if (res && res.data) {
        const botReply: {
          sender: 'bot'
          content: string
        } = {
          sender: 'bot',
          content: res.data.answer || '抱歉，我无法处理你的请求。'
        }
        setMessages(prevMessages => [...prevMessages, botReply])
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', content: '发送消息时出错。' }])
    } finally {
      setLoading(false)
    }
  }

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
                  src={
                    item.sender === 'user' ? '/path/to/user-avatar-url' : '/path/to/bot-avatar-url'
                  }
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
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={sendMessage}
        />
        <Button
          type="primary"
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
