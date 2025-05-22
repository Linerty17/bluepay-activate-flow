
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import Loader from '@/components/Loader';

const loadingStates = [
  { message: "Processing your information", duration: 3000 },
  { message: "Verifying account details", duration: 3000 },
  { message: "Setting up your Blue Pay account", duration: 3000 },
  { message: "Almost done", duration: 2000 }
];

const Loading = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState(0);
  
  useEffect(() => {
    // Get the form data from session storage
    const formData = sessionStorage.getItem('activationFormData');
    
    if (!formData) {
      // If no form data, redirect back to the activation form
      navigate('/activate');
      return;
    }
    
    // Progress through the loading states
    const timer = setTimeout(() => {
      if (currentState < loadingStates.length - 1) {
        setCurrentState(currentState + 1);
      } else {
        // When all loading states are done, navigate to the payment page
        navigate('/payment');
      }
    }, loadingStates[currentState].duration);
    
    return () => clearTimeout(timer);
  }, [currentState, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-bluepay">
      <div className="mb-8">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <Loader message={loadingStates[currentState].message} />
      </div>
    </div>
  );
};

export default Loading;
