import { useState, useEffect } from "react";

import MemeCoinChart from "../components/Visualization";
import BitcoinAddressGenerator from "../components/Bit";
import { Lock } from 'lucide-react';
import { XIcon } from "lucide-react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard = () => {
    const [memeCoinBalance, setMemeCoinBalance] = useState(1000); // Dummy balance
    const [open, setOpen] = useState(false)
    const [needPublicKey, setNeedPublicKey] = useState(localStorage.getItem('publicKey'))
    const [user, setUser] = useState('')

    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (username.length >= 26) {
                setIsAuthenticated(true);
                localStorage.setItem('publicKey', username)
                setNeedPublicKey(!needPublicKey)
            } else {
                setError('publicAddress must be at least 26 characters long');
            }
            setIsLoading(false);
        }, 1000);
    };

    const dummyTransactions = [
        // { id: 1, type: "Buy", amount: 5000, date: "2025-02-01", status: "Confirmed" },
        // { id: 2, type: "Sell", amount: 2000, date: "2025-02-02", status: "Pending" },
        // { id: 3, type: "Buy", amount: 3000, date: "2025-02-03", status: "Confirmed" },
    ];

    useEffect(() => {
        if (!localStorage.getItem('publicKey')) {
            setNeedPublicKey(true)
        }
        setOpen(false)
    }, [])


    useEffect(() => {
        if (localStorage.getItem('publicKey')) {
            console.log(localStorage.getItem('publicKey'))
            setUser(localStorage.getItem('publicKey'))
        }
    }, [])

    if (!needPublicKey || user) {
        return (
            <div className="">
                <ToastContainer />

                <div className="border-b-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-between   pt-6 px-8 max-w-[1200px] mx-auto">
                        <h2 className="leading-none font-bold text-[32px]">Dashboard</h2>
                        <div className="flex items-end">
                            <p className="text-sm sm:text-xl"> &lt; user: {user.substring(0, 6)}... &gt;</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-10 max-w-[1200px] mx-auto">

                    <div className="">
                        {/* Meme Coin Balance */}

                        <p className=" font-bold text-sm text-black/70 uppercase">Your Wallet / Balance</p>
                        <p className="text-[32px] font-bold mb-4 text-black/70">{memeCoinBalance} <span className="text-[24px] text-[#77307D]">ElON</span></p>
                    </div>
                    <div className="flex flex-col md:flex-row  max-w-2xl md:max-w-full mx-auto gap-20">
                        <div className="flex-1">
                            <MemeCoinChart />
                        </div>

                        {/* Transaction History */}
                        <div className="mt-6 flex-1 flex flex-col gap-4">
                            <h3 className="text-lg font-semibold uppercase mb-2">Transaction History</h3>
                            <div className="bg-white min-h-40 rounded-md shadow-md p-4">
                                {dummyTransactions.length > 0 ? (
                                    dummyTransactions.map((tx) => (
                                        <div key={tx.id} className="flex justify-between border-b py-2">
                                            <span>{tx.type} {tx.amount} MEME</span>
                                            <span className={tx.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}>
                                                {tx.status}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600">No transactions yet.</p>
                                )}
                            </div>
                            <div className="flex gap-4 w-fit text-white">
                                {/* Buy More Button */}
                                <button
                                    onClick={() => setOpen(true)}
                                    className="py-[16px] px-[20px] flex-1 uppercase justify-center rounded-[24px] font-bold  leading-none gap-1 text-center flex lg:flex-col items-center bg-blue-700 p-4"
                                >
                                    Buy More Meme Coins
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {open && (
                    <div className="">

                        <div className="fixed z-10 w-full max-w-[600px]  pb-10   p-6  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <div className="bg-white max-h-[80dvh] overflow-auto h-fit  p-4 pb-10 rounded-lg">

                                <BitcoinAddressGenerator storedAddress={user} asModal={true} />
                                <XIcon className="absolute top-4 md:top-0 bg-white right-4 hover:text-red-500  w-10 h-10 rounded-[100%]" onClick={() => setOpen(false)}></XIcon>
                            </div>
                        </div>
                        <div className="fixed h-[100%] w-screen bg-blue-800/20 top-0 left-0" onClick={() => setOpen(false)}>
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                    <div className="text-center p-8">
                        <Lock className="mx-auto h-12 w-12 text-blue-500" />
                        <h2 className="mt-4 text-2xl font-bold text-gray-900">Login</h2>
                        <p className="mt-2 text-gray-600">Please enter your publicAddress to continue</p>
                    </div>

                    <div className="px-8 pb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    PublicAddress
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your username"
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading || username.length === 0}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;
