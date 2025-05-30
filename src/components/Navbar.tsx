
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MessageCircle, Settings } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-food rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍜</span>
            </div>
            <h1 className="text-xl font-bold gradient-text">FoodieAI</h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm kiếm món ăn, người dùng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 focus:border-orange-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* Navigation Tabs */}
            <div className="flex space-x-1">
              <Button
                variant={activeTab === 'feed' ? 'default' : 'ghost'}
                onClick={() => onTabChange('feed')}
                className={activeTab === 'feed' ? 'bg-gradient-food text-white' : 'text-gray-600 hover:text-orange-600'}
              >
                Feed
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => onTabChange('profile')}
                className={activeTab === 'profile' ? 'bg-gradient-food text-white' : 'text-gray-600 hover:text-orange-600'}
              >
                Profile
              </Button>
              <Button
                variant={activeTab === 'chat' ? 'default' : 'ghost'}
                onClick={() => onTabChange('chat')}
                className={`relative ${activeTab === 'chat' ? 'bg-gradient-food text-white' : 'text-gray-600 hover:text-orange-600'}`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5">
                  3
                </Badge>
              </Button>
            </div>

            {/* Settings */}
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-600">
              <Settings className="w-4 h-4" />
            </Button>

            {/* User Avatar */}
            <Avatar className="w-8 h-8 border-2 border-orange-200">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-food text-white text-sm">
                U
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
