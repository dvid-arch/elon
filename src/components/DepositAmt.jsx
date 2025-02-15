import { useEffect, useState } from "react";

// Add this new component above the BuyMemeCoinFlow component
const DepositInput = () => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('idle');
    const MIN_DEPOSIT = 100;
  
    useEffect(() => {
      if (!amount) {
        setStatus('idle');
        return;
      }
  
      const numericValue = parseFloat(amount);
      
      if (isNaN(numericValue)) {
        setStatus('invalid');
      } else if (numericValue < MIN_DEPOSIT) {
        setStatus('too-low');
      } else {
        setStatus('valid');
      }
    }, [amount]);
  
    const handleInput = (e) => {
      const value = e.target.value;
      // Allow only numbers and decimal point
      if (/^\d*\.?\d*$/.test(value)) {
        setAmount(value);
      }
    };
  
    const renderStatusMessage = () => {
      switch (status) {
        case 'too-low':
          return <span className="text-red-600">Minimum deposit is ${MIN_DEPOSIT}</span>;
        case 'invalid':
          return <span className="text-red-600">Please enter a valid positive number</span>;
        default:
          return null;
      }
    };
  
    return (
      <div className=" w-full flex flex-col items-start">
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Enter deposit amount (USD)"
          value={amount}
          onChange={handleInput}
          className={`w-full px-4 py-3 rounded-md border bg-white text-gray-800
                     focus:outline-none self-start focus:ring-2 transition duration-300
                     max-w-[400px]  ${
                       status === 'valid' ? 'border-green-500 focus:ring-green-300' :
                       (status === 'too-low' || status === 'invalid') ? 'border-red-500 focus:ring-red-300' :
                       'border-gray-300 focus:ring-blue-300'
                     }`}
        />
        <div className="mt-2 text-sm">
          {renderStatusMessage()}
          <div className="text-gray-500 mt-1">
            Minimum deposit: ${MIN_DEPOSIT}
          </div>
        </div>
      </div>
    );
  };
  
  export default DepositInput