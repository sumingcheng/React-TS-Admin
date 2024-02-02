import React, { FC, useState, useCallback, useRef, useEffect } from 'react'
import './chat.less'
import { Button, Input, List, Avatar, notification } from 'antd'
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { getAnswer } from '@/api'
import { Message } from '@/views/Chat/type'
import { RootState } from '@/store/rootReducer'

const { TextArea } = Input

interface ChatHistoryEntry {
  sender: string
  content: string
}

const Chat: FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const cid = useSelector((state: RootState) => state.urlParams.cid) // 获取cid
  const name = useSelector((state: RootState) => state.urlParams.name) // 获取name
  const [history, setHistory] = useState<ChatHistoryEntry[]>([]) // 维护对话历史
  const messagesContainerRef = useRef<null | HTMLDivElement>(null) // 新增：用于消息列表的容器滚动

  console.log('cid', cid)

  const initializeChat = useCallback(() => {
    const welcomeMessage: Message = {
      sender: 'bot',
      content: `你好👋！我是人工智能助手 ${name}，可以帮助你解答问题。`
    }
    setMessages([welcomeMessage])
    setHistory([{ sender: 'bot', content: welcomeMessage.content }])
  }, [name])

  useEffect(() => {
    initializeChat()
  }, [initializeChat])

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [])

  // 修改消息时调用scrollToBottom以滚动到最新的消息
  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }, [])

  const updateChatHistory = (sender: string, message: string) => {
    return [...history, { sender, content: message }]
  }

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim()) {
      return
    }

    const newMessage: Message = { sender: 'user', content: inputValue }
    setMessages(prevMessages => [...prevMessages, newMessage])
    setInputValue('')
    setLoading(true)

    try {
      const updatedHistory = updateChatHistory('user', inputValue)
      const res = await getAnswer({ cid, question: inputValue, history: updatedHistory })

      const botReply: Message = {
        sender: 'bot',
        content: res?.data?.answer || '抱歉，我无法处理你的请求。'
      }
      setMessages(prevMessages => [...prevMessages, botReply])
      setHistory(prevHistory => updateChatHistory('bot', botReply.content))
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
  }, [inputValue, history, cid, updateChatHistory])

  return (
    <div className="chat-container">
      <div className="message-list-container" ref={messagesContainerRef}>
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
      </div>
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
