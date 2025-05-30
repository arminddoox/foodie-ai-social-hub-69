
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SocialFeed from '@/components/SocialFeed';
import UserProfile from '@/components/UserProfile';
import ChatSystem from '@/components/ChatSystem';

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>('feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <SocialFeed />;
      case 'profile':
        return <UserProfile />;
      case 'chat':
        return <ChatSystem />;
      default:
        return <SocialFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pt-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
