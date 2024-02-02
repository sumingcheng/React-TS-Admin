export type Message = {
  sender: 'user' | 'bot'
  content: string
}

export interface MessageItemProps {
  item: Message
}

export interface ChatHistoryEntry {
  sender: string
  content: string
}
