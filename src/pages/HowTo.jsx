
import { useState, useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import BuyFlow from '../components/BuyFlow';
import WithdrawalSlider from '../components/Social';
import BitcoinAddressGenerator from '../components/Bit';
// BuyMemeCoinGuide.jsx



const UsernameChecker = () => {
  // username: stores the current input value
  // status: one of 'idle', 'too-short', 'checking', 'available', or 'unavailable'
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    // When the input is empty, reset to idle.
    if (!username) {
      setStatus('idle');
      return;
    }

    // Enforce the minimum length constraint.
    if (username.length < 5) {
      setStatus('too-short');
      return;
    }

    // Begin the simulated availability check.
    setStatus('checking');

    // Simulate an API call delay (e.g., 1 second).
    const timer = setTimeout(() => {
      // For demonstration purposes, we consider "takenusername" as already taken.
      if (username.trim().toLowerCase() === 'takenusername') {
        setStatus('unavailable');
      } else {
        setStatus('available');
      }
    }, 1000);

    // Cleanup the timer if the username changes quickly.
    return () => clearTimeout(timer);
  }, [username]);

  // Render the appropriate status message.
  const renderStatusMessage = () => {
    switch (status) {
      case 'checking':
        return <span className="text-black/70">Checking availability...</span>;
      case 'available':
        return <span className="text-green-600">Username is available!</span>;
      case 'unavailable':
        return <span className="text-red-600">Username is already taken.</span>;
      case 'too-short':
        return (
          <span className="text-orange-600">
            Username must be at least 5 characters long.
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-4">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-3 rounded-md border bg-white text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300
                   max-w-[400px]"
      />
      <div className="mt-2">
        {renderStatusMessage()}
      </div>
    </div>
  );
};



const BuyMemeCoinFlow = () => {
  // The unique Bitcoin address used to purchase the meme coin
  const bitcoinAddress = '6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN';

  // Function to copy the Bitcoin address to the clipboard
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(bitcoinAddress).then(
      () => {
        // Optionally show a success message or toast notification here.
        console.log('Address copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy!', err);
      }
    );
  };

  return (
    <section className="mb-10 space-y-12">
      {/* New Users Flow */}
      <div className="bg-white  rounded-2xl  max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          New to Our Platform?
        </h2>
        <div className="flex flex-col gap-4  ">
          <div>
            <h3 className="font-bold text-lg">Provide a Unique Username</h3>
            <UsernameChecker />
            <BitcoinAddressGenerator />

          </div>
        </div>
      </div>


    </section>
  );
};




const BuyMemeCoinGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-gray-800 mb-4">
          How to Buy Elon Coin Using Bitcoin
        </h1>
        <p className="text-gray-600">
          Follow the steps below based on whether you already have Bitcoin.
        </p>
      </div>

      {/* Section 1: Already have Bitcoin */}
      <BuyMemeCoinFlow />

      {/* Divider */}
      <WithdrawalSlider />
      <hr className="my-10 border-gray-300" />

      {/* Section 2: Need to Acquire Bitcoin */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Don't Have Bitcoin Yet?
        </h2>
        <p className="text-gray-600 mb-4">
          Purchase Bitcoin using your Cash app, your venmo or your PayPal apps.
          <br />
          Here's are short videos to help you
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <a
              href="https://youtu.be/CxTATIzii7I?si=Eal483CemVjzXWD1  "
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Buying Bitcoin with Venmo
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/Cp_fGaPOOA8?si=Zgdj51Npz5rABAaD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Buying Bitcoin with PayPal
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/7gHtUDQnILM?si=RSnmld4t7CPkccvp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Other Methods (e.g., Cash App)
            </a>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
          <p className="text-yellow-800 text-sm">
            Tip: Ensure the platform you choose supports withdrawals to an external crypto wallet.
          </p>
        </div>
      </section>


    </div>
  );
};





function HowTo() {
  return (
    <div>
      <Header showMod={false} />
      <BuyMemeCoinGuide />
      <Footer />
    </div>
  )
}

export default HowTo