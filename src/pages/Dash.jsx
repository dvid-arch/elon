import { useState, useEffect } from "react";

import MemeCoinChart from "../components/Visualization";
import { CreditCard, XIcon } from 'lucide-react'
import BitcoinAddressGenerator from "../components/Bit";



const NeedKey = () => {
    return (
        <div className="bg-white h-screen w-screen">

        </div>
    )
}

const Dashboard = () => {
    const [memeCoinBalance, setMemeCoinBalance] = useState(1000); // Dummy balance
    const [open, setOpen] = useState(true)
    const [needPublicKey, setNeedPublicKey] = useState(localStorage.getItem('publicKey'))
    const [user, setUser] = useState()
    
    const dummyTransactions = [
        // { id: 1, type: "Buy", amount: 5000, date: "2025-02-01", status: "Confirmed" },
        // { id: 2, type: "Sell", amount: 2000, date: "2025-02-02", status: "Pending" },
        // { id: 3, type: "Buy", amount: 3000, date: "2025-02-03", status: "Confirmed" },
    ];

    useEffect(() => {
        if (!localStorage.getItem('publicKey')){
            setNeedPublicKey(true)
        }
            setOpen(false)
    }, [])


    useEffect(()=>{
        if(localStorage.getItem('publicKey')){
            console.log(localStorage.getItem('publicKey'))
            setUser(localStorage.getItem('publicKey'))
        }
    }, [])

    return (
        <div className="">

            <div className="flex flex-col sm:flex-row gap-2 justify-between  border-b-2 pt-6 px-8">
                <h2 className="leading-none font-bold text-[32px]">Dashboard</h2>
                <div className="flex items-end">
                    <p className="text-sm sm:text-xl"> &lt; user: {user} &gt;</p>
                </div>
            </div>
            <div className="px-8 py-10">

                <div className="">
                    {/* Meme Coin Balance */}

                    <p className=" font-bold text-sm text-black/70 uppercase">Your Wallet / Balance</p>
                    <p className="text-[32px] font-bold mb-4 text-black/70">{memeCoinBalance} <span className="text-[24px] text-[#77307D]">ElON</span> <span className="text-purple-500">/ $200</span></p>
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

                    <div className="fixed z-10 w-full max-w-[400px] rounded-lg p-6 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <BitcoinAddressGenerator storedAddress={true} />
                        <XIcon className="absolute top-4 right-4" onClick={() => setOpen(false)}></XIcon>
                    </div>
                    <div className="fixed h-[100%] w-screen bg-blue-800/20 top-0 left-0" onClick={() => setOpen(false)}>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
