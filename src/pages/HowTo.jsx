import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// BuyMemeCoinGuide.jsx




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
      <div className="bg-white shadow-md border rounded-2xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          New to Our Platform?
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-lg">Register</h3>
            <p className="text-gray-600">
              Create an account to start purchasing our Meme Coin using Bitcoin.
            </p>
            <a
              href="/register"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Click here to register.
            </a>
          </div>
        </div>
      </div>

      {/* Returning Users Flow */}
      <div className="bg-white shadow-md border rounded-2xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Already Registered?
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-lg">Login</h3>
            <p className="text-gray-600">
              If you already have an account and want to purchase additional Meme Coin using Bitcoin, please log in.
            </p>
            <a
              href="/login"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Click here to login.
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
};




const BuyMemeCoinGuide = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    How to Buy Elon Coin Using Bitcoin
                </h1>
                <p className="text-gray-600">
                    Follow the steps below based on whether you already have Bitcoin.
                </p>
            </div>

            {/* Section 1: Already have Bitcoin */}
            <BuyMemeCoinFlow />

            {/* Divider */}
            <hr className="my-10 border-gray-300" />

            {/* Section 2: Need to Acquire Bitcoin */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Don't Have Bitcoin Yet?
                </h2>
                <p className="text-gray-600 mb-4">
                    If you need to acquire Bitcoin before swapping for [Meme Coin Name], check out these tutorials:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Buying Bitcoin with Venmo
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Buying Bitcoin with PayPal
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
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

            {/* Final Security Tip */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Secure Your Assets
                </h2>
                <p className="text-gray-600">
                    After purchasing or swapping for [Meme Coin Name], store your coins securely in a wallet you control. Always verify contract addresses and keep your private keys or seed phrases safe.
                </p>
            </section>
        </div>
    );
};





function HowTo() {
    return (
        <div>
            <Header />
            <BuyMemeCoinGuide />
            <Footer />
        </div>
    )
}

export default HowTo