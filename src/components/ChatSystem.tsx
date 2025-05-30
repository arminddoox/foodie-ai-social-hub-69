
import { useState } from 'react';
import { ChatMessage, ChatContact } from './chat/types';
import ChatContactList from './chat/ChatContactList';
import ChatWindow from './chat/ChatWindow';

const ChatSystem = () => {
  const [activeChat, setActiveChat] = useState<string>('ai-bot');
  const [message, setMessage] = useState('');

  const contacts: ChatContact[] = [
    {
      id: 'ai-bot',
      name: 'FoodieAI Assistant',
      avatar: '/placeholder.svg',
      lastMessage: 'Tôi có thể gợi ý món ăn phù hợp với bạn!',
      timestamp: '5 phút',
      unread: 0,
      type: 'ai'
    },
    {
      id: 'store-1',
      name: 'Quán Phở Hà Nội',
      avatar: '/placeholder.svg',
      lastMessage: 'Đơn hàng của bạn đang được chuẩn bị',
      timestamp: '15 phút',
      unread: 2,
      type: 'store'
    },
    {
      id: 'friend-1',
      name: 'Minh Thư',
      avatar: '/placeholder.svg',
      lastMessage: 'Quán bánh mì mới này ngon lắm!',
      timestamp: '1 giờ',
      unread: 1,
      type: 'friend'
    },
    {
      id: 'store-2',
      name: 'Bún Bò Huế Cô Ba',
      avatar: '/placeholder.svg',
      lastMessage: 'Cảm ơn bạn đã đặt hàng!',
      timestamp: '2 giờ',
      unread: 0,
      type: 'store'
    }
  ];

  const chatMessages: Record<string, ChatMessage[]> = {
    'ai-bot': [
      {
        id: '1',
        sender: 'FoodieAI',
        message: 'Xin chào! Tôi là FoodieAI, trợ lý ẩm thực của bạn. Hôm nay bạn muốn ăn gì?',
        timestamp: '10:30',
        isUser: false
      },
      {
        id: '2',
        sender: 'Bạn',
        message: 'Tôi muốn món gì đó cay cay, ấm bụng',
        timestamp: '10:32',
        isUser: true
      },
      {
        id: '3',
        sender: 'FoodieAI',
        message: 'Tuyệt! Dựa trên sở thích của bạn, tôi gợi ý:',
        timestamp: '10:32',
        isUser: false
      },
      {
        id: '4',
        sender: 'FoodieAI',
        message: '🌶️ Bún bò Huế - Cay nồng, đậm đà\n🍲 Lẩu Thái chua cay - Tôm cá tươi ngon\n🥘 Curry gà - Ấm bụng, thơm lừng',
        timestamp: '10:33',
        isUser: false,
        type: 'suggestion'
      }
    ],
    'store-1': [
      {
        id: '1',
        sender: 'Quán Phở Hà Nội',
        message: 'Chào bạn! Đơn hàng #PH001 của bạn đã được xác nhận.',
        timestamp: '09:45',
        isUser: false
      },
      {
        id: '2',
        sender: 'Quán Phở Hà Nội',
        message: '- 1x Phở bò tái\n- 1x Nước cam\nTổng: 85,000 VNĐ',
        timestamp: '09:46',
        isUser: false,
        type: 'order'
      },
      {
        id: '3',
        sender: 'Quán Phở Hà Nội',
        message: 'Đơn hàng đang được chuẩn bị. Thời gian giao hàng dự kiến: 25-30 phút.',
        timestamp: '10:15',
        isUser: false
      }
    ],
    'friend-1': [
      {
        id: '1',
        sender: 'Minh Thư',
        message: 'Hôm nay mình thử quán bánh mì mới ở đường Nguyễn Trãi!',
        timestamp: '09:20',
        isUser: false
      },
      {
        id: '2',
        sender: 'Bạn',
        message: 'Ngon không? Giá bao nhiêu vậy?',
        timestamp: '09:25',
        isUser: true
      },
      {
        id: '3',
        sender: 'Minh Thư',
        message: 'Ngon lắm! Chỉ 25k/ổ thôi. Thịt nướng thơm phức, rau tươi xanh.',
        timestamp: '09:30',
        isUser: false
      }
    ]
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    console.log('Sending message:', message);
    setMessage('');

    // Simulate AI response for AI bot
    if (activeChat === 'ai-bot') {
      setTimeout(() => {
        console.log('AI would respond here');
      }, 1000);
    }
  };

  const currentMessages = chatMessages[activeChat] || [];

  return (
    <div className="max-w-6xl mx-auto h-[600px] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        <ChatContactList 
          contacts={contacts}
          activeChat={activeChat}
          onContactSelect={setActiveChat}
        />
        <ChatWindow 
          activeChat={activeChat}
          contacts={contacts}
          messages={currentMessages}
          message={message}
          setMessage={setMessage}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatSystem;
