
import React from 'react';
import Logo from '@/components/Logo';
import PaymentDetails from '@/components/PaymentDetails';

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-slate-50">
      <div className="mb-8">
        <Logo />
      </div>
      
      <PaymentDetails />
    </div>
  );
};

export default Payment;
