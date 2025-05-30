
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Smile, Paperclip } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: () => void;
}

const ChatInput = ({ message, setMessage, onSendMessage }: ChatInputProps) => {
  return (
    <div className="border-t border-orange-100 p-4">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-gray-400">
          <Paperclip className="w-4 h-4" />
        </Button>
        <Input
          placeholder="Nhập tin nhắn..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          className="flex-1 border-orange-200 focus:border-orange-400"
        />
        <Button variant="ghost" size="sm" className="text-gray-400">
          <Smile className="w-4 h-4" />
        </Button>
        <Button
          onClick={onSendMessage}
          className="bg-gradient-food text-white hover:opacity-90"
          size="sm"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
