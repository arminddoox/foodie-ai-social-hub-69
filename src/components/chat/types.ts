
export interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isUser: boolean;
  type?: 'text' | 'suggestion' | 'order';
}

export interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  type: 'ai' | 'store' | 'friend';
}
