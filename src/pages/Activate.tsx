
import React from 'react';
import Logo from '@/components/Logo';
import ActivationForm from '@/components/ActivationForm';

const Activate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-slate-50">
      <div className="mb-8">
        <Logo />
      </div>
      
      <ActivationForm />
    </div>
  );
};

export default Activate;
