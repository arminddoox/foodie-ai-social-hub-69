
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share, Camera, Settings } from 'lucide-react';

interface UserStats {
  posts: number;
  followers: number;
  following: number;
  likes: number;
}

const UserProfile = () => {
  const [stats] = useState<UserStats>({
    posts: 127,
    followers: 2543,
    following: 342,
    likes: 12680
  });

  const userPosts = [
    {
      id: 1,
      image: '/placeholder.svg',
      likes: 89,
      comments: 12,
      caption: 'Bánh mì thịt nướng giòn rụm 🥖'
    },
    {
      id: 2,
      image: '/placeholder.svg',
      likes: 156,
      comments: 23,
      caption: 'Phở bò Hà Nội truyền thống 🍲'
    },
    {
      id: 3,
      image: '/placeholder.svg',
      likes: 234,
      comments: 45,
      caption: 'Bún bò Huế cay nồng 🌶️'
    },
    {
      id: 4,
      image: '/placeholder.svg',
      likes: 67,
      comments: 8,
      caption: 'Chè đậu xanh mát lạnh 🍧'
    },
    {
      id: 5,
      image: '/placeholder.svg',
      likes: 198,
      comments: 31,
      caption: 'Gỏi cuốn tôm thịt tươi ngon 🦐'
    },
    {
      id: 6,
      image: '/placeholder.svg',
      likes: 145,
      comments: 19,
      caption: 'Cà phê sữa đá đậm đà ☕'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Profile Header */}
      <Card className="border-orange-100 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-orange-200">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-food text-white text-3xl">
                  U
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-gradient-food"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    Nguyễn Văn An
                    <Badge className="bg-blue-100 text-blue-800">✓</Badge>
                  </h1>
                  <p className="text-gray-600 mt-1">@nguyenvanan_foodie</p>
                  <p className="text-gray-700 mt-2">
                    🍜 Food Enthusiast | 📍 Hà Nội | 🥘 Sharing delicious Vietnamese cuisine
                  </p>
                </div>
                <div className="flex space-x-2 mt-4 md:mt-0">
                  <Button variant="outline" className="border-orange-200 text-orange-600">
                    Chỉnh sửa
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center md:justify-start space-x-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.posts}</p>
                  <p className="text-sm text-gray-600">Bài viết</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.followers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Người theo dõi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.following}</p>
                  <p className="text-sm text-gray-600">Đang theo dõi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.likes.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Lượt thích</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-orange-50 border border-orange-200">
          <TabsTrigger value="posts" className="data-[state=active]:bg-gradient-food data-[state=active]:text-white">
            Bài viết
          </TabsTrigger>
          <TabsTrigger value="saved" className="data-[state=active]:bg-gradient-food data-[state=active]:text-white">
            Đã lưu
          </TabsTrigger>
          <TabsTrigger value="tagged" className="data-[state=active]:bg-gradient-food data-[state=active]:text-white">
            Được tag
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userPosts.map(post => (
              <Card key={post.id} className="border-orange-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 fill-current" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm text-gray-700 line-clamp-2">{post.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create Post Button */}
          <div className="mt-8 text-center">
            <Button className="bg-gradient-food text-white hover:opacity-90">
              <Camera className="w-4 h-4 mr-2" />
              Tạo bài viết mới
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa có bài viết nào được lưu</p>
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="mt-6">
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa được tag trong bài viết nào</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
