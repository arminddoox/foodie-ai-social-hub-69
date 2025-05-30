
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Send, Smile, Paperclip } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isUser: boolean;
  type?: 'text' | 'suggestion' | 'order';
}

interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  type: 'ai' | 'store' | 'friend';
}

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

  const getContactIcon = (type: ChatContact['type']) => {
    switch (type) {
      case 'ai':
        return '🤖';
      case 'store':
        return '🏪';
      case 'friend':
        return '👤';
    }
  };

  const currentMessages = chatMessages[activeChat] || [];

  return (
    <div className="max-w-6xl mx-auto h-[600px] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        {/* Chat List */}
        <Card className="border-orange-100 shadow-sm">
          <CardHeader className="pb-3">
            <h2 className="text-lg font-semibold gradient-text">Tin nhắn</h2>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mx-1 mb-4 bg-orange-50 h-8">
                <TabsTrigger value="all" className="text-xs px-2 py-1">Tất cả</TabsTrigger>
                <TabsTrigger value="ai" className="text-xs px-2 py-1">AI Bot</TabsTrigger>
                <TabsTrigger value="stores" className="text-xs px-2 py-1">Quán ăn</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="space-y-1">
                  {contacts.map(contact => (
                    <div
                      key={contact.id}
                      onClick={() => setActiveChat(contact.id)}
                      className={`flex items-center space-x-3 p-3 mx-2 rounded-lg cursor-pointer transition-colors ${
                        activeChat === contact.id ? 'bg-orange-50 border-l-4 border-orange-500' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={contact.avatar} />
                          <AvatarFallback className="text-xs">
                            {getContactIcon(contact.type)}
                          </AvatarFallback>
                        </Avatar>
                        {contact.type === 'ai' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-food rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">🤖</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {contact.name}
                          </h3>
                          <span className="text-xs text-gray-500">{contact.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs px-2">
                          {contact.unread}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-0">
                <div className="space-y-1">
                  {contacts.filter(c => c.type === 'ai').map(contact => (
                    <div key={contact.id} className="p-3 mx-2">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-food rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-2xl">🤖</span>
                        </div>
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">Gợi ý thực đơn cá nhân hóa</p>
                        <Button 
                          className="mt-3 bg-gradient-food text-white"
                          onClick={() => setActiveChat(contact.id)}
                        >
                          Bắt đầu chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stores" className="mt-0">
                <div className="space-y-1">
                  {contacts.filter(c => c.type === 'store').map(contact => (
                    <div
                      key={contact.id}
                      onClick={() => setActiveChat(contact.id)}
                      className="flex items-center space-x-3 p-3 mx-2 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback>🏪</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 border-orange-100 shadow-sm flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-orange-100 pb-3">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  {contacts.find(c => c.id === activeChat)?.type === 'ai' ? '🤖' : '👤'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {contacts.find(c => c.id === activeChat)?.name || 'Chọn cuộc hội thoại'}
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
              {currentMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${msg.isUser ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        msg.isUser
                          ? 'bg-gradient-food text-white'
                          : msg.type === 'suggestion'
                          ? 'bg-orange-50 border border-orange-200 text-gray-800'
                          : msg.type === 'order'
                          ? 'bg-green-50 border border-green-200 text-gray-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.isUser ? 'text-white/80' : 'text-gray-500'}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t border-orange-100 p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Nhập tin nhắn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-orange-200 focus:border-orange-400"
              />
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Smile className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-food text-white hover:opacity-90"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatSystem;
