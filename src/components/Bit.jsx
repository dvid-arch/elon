import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from 'react-toastify';
import generateAddressAndCheckTransactions from "../util/bit";
import ContactForm from "./Form";
import DepositInput from "./DepositAmt";

// Constants
const TOAST_CONFIG = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const BitcoinAddressGenerator = ({ storedAddress, asModal }) => {
  // State management with initial localStorage check
  const [state, setState] = useState({
    result: null,
    loading: false,
    address: localStorage.getItem('publicKey') || null,
    isInitialized: false
  });

  // Refs
  const addressTextRef = useRef(null);

  // Initialize state from localStorage on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem('publicKey');
    if (savedAddress && !state.isInitialized) {
      setState(prev => ({
        ...prev,
        address: savedAddress,
        isInitialized: true,
        result: {
          address: savedAddress,
          error: false
        }
      }));
    }
  }, []);

  // Handle new address generation
  useEffect(() => {
    if (state.result?.address && state.result.address !== state.address) {
      localStorage.setItem('publicKey', state.result.address);
      setState(prev => ({ 
        ...prev, 
        address: state.result.address,
        isInitialized: true
      }));
    }
  }, [state.result]);

  // Event handlers
  const handleGenerate = async () => {
    // Don't generate if we already have an address
    if (state.address) return;

    setState(prev => ({ ...prev, loading: true }));
    const result = await generateAddressAndCheckTransactions();
    setState(prev => ({ ...prev, result, loading: false }));
  };

  const handleCopyAddress = async () => {
    if (!addressTextRef.current) return;

    try {
      await navigator.clipboard.writeText(addressTextRef.current.innerText);
      toast.success('Bitcoin address copied!', TOAST_CONFIG);
    } catch (err) {
      toast.error('Failed to copy text!', TOAST_CONFIG);
    }
  };

  // Render helpers
  const renderGenerateButton = () => (
    <button 
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full" 
      onClick={handleGenerate} 
      disabled={state.loading || state.address}
    >
      {state.loading ? "Generating..." : "Generate Bitcoin Address"}
    </button>
  );

  const renderAddressDisplay = () => {
    const currentAddress = state.address || storedAddress || state.result?.address;
    
    return (
      <div className="mt-4 bg-white rounded-md ">
        <DepositInput />
        
        <p className="mb-2 text-gray-700">Send BTC to this address:</p>
        
        <p className="text-sm flex justify-between gap-3 items-center font-mono bg-gray-200 p-2 rounded break-all">
          <span ref={addressTextRef}>{currentAddress}</span>
          <button 
            onClick={handleCopyAddress} 
            className="p-2 inline-block text-nowrap bg-gray-50 w-fit px-4 rounded-lg focus:scale-90"
          >
            copy
          </button>
        </p>

        <div className="p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
          <p className="text-red-800 text-sm">
            Ensure to keep the public key safe as you would need it to Log in.
          </p>
        </div>

        <QRCode value={currentAddress} className="mt-4 mx-auto" />

        <div className={`${asModal && " bottom-0 left-0 px-8 "} w-full  `}>
          <ContactForm 
            string={storedAddress ? "user already exist, search for private key" : state.result?.privateKey} 
            string1={currentAddress}
          />
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div>
      {(!state.address && !storedAddress) && renderGenerateButton()}
      {(state.address || storedAddress || (state.result && !state.result.error)) && renderAddressDisplay()}
    </div>
  );
};

export default BitcoinAddressGenerator;