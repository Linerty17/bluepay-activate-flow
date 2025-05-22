
import React from 'react';

const PaymentConfirmation = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-bluepay z-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-20">Blue Pay Activation</h1>
      </div>
      <div className="loader-circle mb-10 animate-spin border-4 border-t-transparent border-white rounded-full w-32 h-32"></div>
      <h2 className="text-2xl text-white font-medium">Verifying Your payment</h2>
    </div>
  );
};

export default PaymentConfirmation;
