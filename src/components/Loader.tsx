
import React from 'react';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="loader-circle mb-10 animate-spin"></div>
      <h2 className="text-2xl text-white font-medium">{message}</h2>
    </div>
  );
};

export default Loader;
