
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const PaymentFailed = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-slate-50">
      <div className="mb-8">
        <Logo />
      </div>
      
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Not Received</h2>
        <p className="text-gray-600 mb-6">
          We didn't receive any payment from you. Please retry the payment or contact support.
        </p>
        
        <Button 
          onClick={() => navigate('/payment')}
          className="w-full bg-[#1a2942] hover:bg-[#122033]"
        >
          Retry Payment
        </Button>
      </div>
    </div>
  );
};

export default PaymentFailed;
