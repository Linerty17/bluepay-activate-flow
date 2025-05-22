
import React from 'react';

const Logo: React.FC = () => {
  const handleLogoClick = () => {
    window.open('https://t.me/bluepayuser_telegram_channel', '_blank');
  };

  return (
    <div className="flex items-center gap-2">
      <div 
        className="flex items-center justify-center overflow-hidden cursor-pointer" 
        onClick={handleLogoClick}
        title="Join our Telegram channel"
      >
        <img 
          src="/lovable-uploads/df1ca2a3-f6e3-4c55-97a6-f299a157c343.png" 
          alt="BluePay Logo" 
          className="w-12 h-12 object-contain"
        />
      </div>
      <h1 className="text-xl md:text-2xl font-bold">Blue Pay Activation</h1>
    </div>
  );
};

export default Logo;
