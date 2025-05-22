
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const banks = [
  "Access Bank", "Citibank", "Ecobank", "Fidelity Bank", "First Bank",
  "First City Monument Bank", "Guaranty Trust Bank", "Heritage Bank",
  "Keystone Bank", "Polaris Bank", "Stanbic IBTC Bank", "Standard Chartered Bank",
  "Sterling Bank", "Union Bank", "United Bank for Africa", "Unity Bank",
  "Wema Bank", "Zenith Bank", "Opay", "Palmpay", "Kuda Microfinance Bank",
  "Moniepoint Microfinance Bank", "VFD Microfinance Bank", "Sparkle Microfinance Bank",
  "Taj Bank", "Tangerine Bank"
];

const ActivationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: '',
    fullName: '',
    bank: '',
    email: '',
    bpcCode: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBankChange = (value: string) => {
    setFormData({ ...formData, bank: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.accountNumber || !formData.fullName || !formData.bank || !formData.email || !formData.bpcCode) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Store form data in session storage for later use
    sessionStorage.setItem('activationFormData', JSON.stringify(formData));
    
    // Redirect to the loading page
    navigate('/loading');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Activate Your Blue Pay Account</h2>
      <p className="text-gray-500 mb-6">Please provide your details to activate your account</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="accountNumber" className="text-sm font-medium">Account Number</label>
          <Input
            id="accountNumber"
            name="accountNumber"
            type="text"
            placeholder="Enter your account number"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">Account Name</label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your account name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="bank" className="text-sm font-medium">Select Bank</label>
          <Select
            value={formData.bank}
            onValueChange={handleBankChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank}>{bank}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="bpcCode" className="text-sm font-medium">BPC Code</label>
          <Input
            id="bpcCode"
            name="bpcCode"
            type="text"
            placeholder="Enter your BPC code"
            value={formData.bpcCode}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <Button type="submit" className="w-full bg-bluepay hover:bg-bluepay-600">
          Proceed to Payment
        </Button>
      </form>
    </div>
  );
};

export default ActivationForm;
