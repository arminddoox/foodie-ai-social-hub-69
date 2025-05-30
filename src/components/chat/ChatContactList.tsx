
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChatContact } from './types';

interface ChatContactListProps {
  contacts: ChatContact[];
  activeChat: string;
  onContactSelect: (contactId: string) => void;
}

const ChatContactList = ({ contacts, activeChat, onContactSelect }: ChatContactListProps) => {
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

  return (
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
                  onClick={() => onContactSelect(contact.id)}
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
                      onClick={() => onContactSelect(contact.id)}
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
                  onClick={() => onContactSelect(contact.id)}
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
  );
};

export default ChatContactList;
