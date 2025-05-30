
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatMessage, ChatContact } from './types';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  activeChat: string;
  contacts: ChatContact[];
  messages: ChatMessage[];
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
}

const ChatWindow = ({ 
  activeChat, 
  contacts, 
  messages, 
  message, 
  setMessage, 
  onSendMessage 
}: ChatWindowProps) => {
  const currentContact = contacts.find(c => c.id === activeChat);

  return (
    <Card className="lg:col-span-2 border-orange-100 shadow-sm flex flex-col">
      {/* Chat Header */}
      <CardHeader className="border-b border-orange-100 pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              {currentContact?.type === 'ai' ? '🤖' : '👤'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">
              {currentContact?.name || 'Chọn cuộc hội thoại'}
            </h3>
            {activeChat === 'ai-bot' && (
              <p className="text-sm text-green-600">● Đang hoạt động</p>
            )}
          </div>
        </div>
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>
      </CardContent>

      {/* Message Input */}
      <ChatInput 
        message={message}
        setMessage={setMessage}
        onSendMessage={onSendMessage}
      />
    </Card>
  );
};

export default ChatWindow;
