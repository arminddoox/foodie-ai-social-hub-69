
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags: string[];
  isLiked: boolean;
  isSaved: boolean;
}

const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      name: 'Chef Minh',
      avatar: '/placeholder.svg',
      verified: true
    },
    content: 'Phở bò Hà Nội truyền thống với nước dùng ninh 12 tiếng! Ai đã thử món này chưa? 🍲',
    image: '/placeholder.svg',
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: '2 giờ trước',
    tags: ['Phở', 'Hà Nội', 'Truyền thống'],
    isLiked: false,
    isSaved: false
  },
  {
    id: '2',
    user: {
      name: 'Food Blogger Lan',
      avatar: '/placeholder.svg',
      verified: true
    },
    content: 'Bún bò Huế cay nồng đậm đà! Recipe trong comment nhé mọi người 🌶️',
    image: '/placeholder.svg',
    likes: 156,
    comments: 67,
    shares: 23,
    timestamp: '4 giờ trước',
    tags: ['Bún bò Huế', 'Cay', 'Recipe'],
    isLiked: true,
    isSaved: true
  },
  {
    id: '3',
    user: {
      name: 'Quán Cô Ba',
      avatar: '/placeholder.svg',
      verified: false
    },
    content: 'Bánh mì thịt nướng giòn rụm, thơm ngon! Chỉ 25k/ổ. Đặt hàng ngay! 🥖',
    image: '/placeholder.svg',
    likes: 89,
    comments: 12,
    shares: 8,
    timestamp: '6 giờ trước',
    tags: ['Bánh mì', 'Đặt hàng', 'Giá rẻ'],
    isLiked: false,
    isSaved: false
  }
];

const SocialFeed = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleSave = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
      {/* Create Post */}
      <Card className="border-orange-100 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-food text-white">U</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
              <p className="text-gray-500">Chia sẻ món ăn ngon nào đó...</p>
            </div>
            <Button className="bg-gradient-food text-white hover:opacity-90">
              Đăng
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map(post => (
        <Card key={post.id} className="border-orange-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 border-2 border-orange-200">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback className="bg-gradient-food text-white">
                    {post.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                    {post.user.verified && (
                      <Badge className="bg-blue-100 text-blue-800 text-xs">✓</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSave(post.id)}
                className={post.isSaved ? 'text-orange-600' : 'text-gray-400'}
              >
                <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <p className="text-gray-800 mb-3">{post.content}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Post Image */}
            <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-video">
              <img 
                src={post.image} 
                alt="Food post"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Interaction Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 ${post.isLiked ? 'text-red-600' : 'text-gray-500'} hover:text-red-600`}
                >
                  <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-500 hover:text-green-600">
                  <Share className="w-4 h-4" />
                  <span>{post.shares}</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
          Xem thêm bài viết
        </Button>
      </div>
    </div>
  );
};

export default SocialFeed;
