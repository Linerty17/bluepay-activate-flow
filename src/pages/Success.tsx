
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-slate-50">
      <div className="mb-6">
        <Logo />
      </div>
      
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Activation Successful</h2>
        <p className="text-gray-600 mb-6">
          Your Blue Pay account has been successfully activated. You can now start using all the features of Blue Pay.
        </p>
        
        <p className="text-sm text-gray-500 mb-6">
          A confirmation email has been sent to your registered email address with your account details.
        </p>
        
        <Button 
          onClick={() => window.location.href = 'https://bluepay.com/dashboard'}
          className="w-full bg-bluepay hover:bg-bluepay-600"
        >
          Go to Dashboard
        </Button>
        
        <button 
          onClick={() => navigate('/')}
          className="mt-4 text-bluepay hover:underline"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
