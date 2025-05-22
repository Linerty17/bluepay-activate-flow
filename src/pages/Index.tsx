
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">
      <div className="mb-6">
        <Logo />
      </div>
      
      <div className="w-full max-w-lg text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-64 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a0054c35-edb6-47bb-a23c-5c9f365da8b7.png" 
              alt="BLUEPAY2025" 
              className="w-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-blue-600">Welcome to Blue Pay Payment System</h1>
        <p className="text-xl text-gray-600">Activate your account and start using Blue Pay today!</p>
        
        <Button 
          onClick={() => navigate('/activate')}
          className="px-8 py-6 text-lg bg-bluepay hover:bg-bluepay-600"
        >
          Activate
        </Button>
      </div>
    </div>
  );
};

export default Index;
