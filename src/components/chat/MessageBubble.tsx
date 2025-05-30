
import { ChatMessage } from './types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-xs lg:max-w-md ${message.isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-lg px-4 py-2 ${
            message.isUser
              ? 'bg-gradient-food text-white'
              : message.type === 'suggestion'
              ? 'bg-orange-50 border border-orange-200 text-gray-800'
              : message.type === 'order'
              ? 'bg-green-50 border border-green-200 text-gray-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <p className="text-sm whitespace-pre-line">{message.message}</p>
          <p className={`text-xs mt-1 ${message.isUser ? 'text-white/80' : 'text-gray-500'}`}>
            {message.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
