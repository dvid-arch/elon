import Header from "../components/Header"
import elon from "../assets/elon.png"
import Footer from "../components/Footer"
import { useState } from "react"
import vid from '../assets/vid.mp4'
import screen from '../assets/screen.png'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import WithdrawalSlider from "../components/Social"
import BuyCoinModal from "../components/BuyCoinModal"




const Hero = () => {
    return (
        <div className="px-[16px] md:px-[50px] mb-20 max-w-[1200px] mx-auto">

            <div className="py-11 px-8 bg-[#070735] rounded-[24px] flex flex-col  gap-8">
                <div className=" text-white flex flex-col lg:flex-row gap-20 py-10">
                    <div className="textpart flex-1  flex flex-col justify-between gap-20">
                        <h1 className="text-[48px] sm:text-[60px] md:text-[92px] font-extrabold leading-none uppercase text-nowrap ">
                            THE ONLY
                            <br />
                            <span className="text-red-600">OFFICIAL</span>
                            <br />
                            elon
                            <br />
                            MEME
                        </h1>
                        <p className="text-[40px] leading-none">Join the Elon Community. This is History in the Making!</p>
                    </div>
                    <div className="imagepart">
                        <img src={elon} alt="elon musk pic" className="w-[80%] mx-auto lg:w-full" />
                    </div>
                </div>
                <div className="max-w-[900px] w-full mx-auto flex flex-col gap-8">

                    <div className="flex flex-col gap-4 lg:flex-row justify-center lg:gap-8 text-white  mx-auto w-full">

                        <Link to={'/howtobuy'} className="py-[24px] px-[40px] flex-1 uppercase justify-center rounded-[24px] font-bold text-[24px] leading-none gap-1 text-center flex lg:flex-col items-center bg-red-700 p-4">
                            buy now with
                            crypto
                        </Link>

                    </div>

                </div>
                <p className="text-white/70">Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. See <a href="#">Terms & Conditions</a> Here</p>
            </div>
        </div>
    )
}

const Alocation = () => {
    return (
        <div className="px-[16px] md:px-[50px] py-20 flex flex-col gap-8 items-center text-center max-w-[1200px] mx-auto" >
            <div className="flex flex-col gap-8">
                <h2 className="text-[32px] md:text-[64px] font-bold capitalize">Allocation</h2>
                <p className="text-[28px] font-semibold leading-normal text-center">There are 200 million $Elon available on day one and will grow to a total of 1 billion $Elon over three years. Each group's allocation are released on their own schedule over 3 years.</p>
            </div>
            <div className="max-w-[600px]">
                <img src={screen} alt="analytics" className="w-[100%]" />
            </div>
            <p className="text-black/70 text-[15px]">
                Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Elon Organization, and Fight Fight Fight LLC collectively own 80% of the Elon Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Elon Meme Cards. See Terms & Conditions Here, See Card Allocation Here
            </p>
        </div>
    )
}
const CryptoPresident = () => {
    return (
        <div className="px-[16px] md:px-[50px] py-40 bg-[#070735] text-white">
            <div className="flex flex-col md:flex-row items-start gap-20 p-2 py-8 max-w-[1200px] mx-auto sm:p-8 border rounded-[24px] relative bg-[#0A0A47]">
                <div className="leading-none flex-1 flex-col md:sticky top-0 bottom-0">
                    <h2 className="uppercase text-[36px] sm:text-[48px] font-bold mb-2 ">Elon: <br />the crypto president</h2>
                    <p className="text-[48px] capitalize bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">A Community Celebrating Courage & Strength</p>
                </div>
                <div className="flex-1 text-[28px] flex flex-col gap-8">
                    <h2 className="text-[48px] leading-none">$Elon are now freely tradeable on the bitcoin blockchain.</h2>
                    <p>On July 13, 2024, President Trump faced death and came up fighting! With his fist in the air and the iconic battle cry FIGHT FIGHT FIGHT, President Trump showed the world what a LEADER is made of and Elon was there as his support. His strength and courage ignited a movement becoming the most memorable meme of the century.</p>

                    <p>Now, you can get your piece of history. This Elon Meme celebrates a leader who doesn’t back down, no matter the odds. Join the Elon Community - we’re all about fighting for Freedom and Efficiency.
                        We're all about making America great again!</p>
                </div>
            </div>
        </div>
    )
}

const BuyNow = () => {
    return (
        <div className="bg-[#070733] border-t-[8px] border-b-[8px] border-red-800">

            <div className=" py-20 px-[50px] max-w-[1200px] mx-auto flex flex-col gap-8 ">
                <h2 className="text-[32px] text-white md:text-[64px] font-extrabold capitalize leading-none text-center max-w-[800px] mx-auto">Buy Now with  Crypto!</h2>

                <div className="flex-col flex gap-8">


                    <div>
                        <h3 className="text-2xl font-bold text-white text-center">Don't Know how to buy with Crypto Click <a href="#" className="text-blue-400 underline">here</a></h3>
                    </div>
                    <p className="text-white/70 text-[15px]">
                        Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Elon Organization, and Fight Fight Fight LLC collectively own 80% of the Elon Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Elon Meme Cards.
                    </p>
                </div>

            </div>

        </div>
    )
}

const JoinNow = () => {
    return (
        <section className="px-[16px] md:px-[50px] py-20 max-w-[1200px] mx-auto">

            <div className="flex flex-col md:gap-20 md:flex-row">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-[32px] md:text-[64px] font-bold leading-none max-w-[600px] text-red-600">Join the Elon Meme Community!</h2>
                    <div className="p-4 bg-[#070733] flex flex-col gap-2 text-white rounded-[24px]">
                        <h3 className="text-[40px] font-bold text-purple-900">Mission</h3>
                        <p className="text-white text-[21px]">
                            This is YOUR chance to join a community that’s all about fighting for what matters. The Elon Meme encourages a culture of success & optimism to make the world a better place. Go Elon! 👊</p>
                    </div>
                </div>
                <div className="flex-1 hidden lg:block">
                    <img src={elon} alt="" />
                </div>
            </div>
        </section>
    )
}


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Is this an official Elon Product?", answer: "Yes, this is the only Official Elon Meme, by President Donald J. Elon." },
        { question: "What is the official contract address and symbol for the Elon Meme?", answer: "CA: 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN" },
        { question: "How can I get Elon Memes?", answer: "Moonshot is the easiest way. Users sign up with an email address, can deposit with bitcoin and receive your $Elon within minutes." },
        { question: "What is a meme?", answer: "Merriam-Webster's meme noun: 1: an idea, behavior, style, or usage that spreads from person to person within a culture." },
        { question: "Which blockchain network are the Elon Memes minted?", answer: "Bitcoin" },
        { question: "What are the Elon Memes?", answer: "Elon Memes are fungible crypto assets created and tracked on the bitcoin blockchain." },

    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:px-[50px] px-[16px] max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h2 className="text[36px] md:text-[64px] font-bold">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-[24px] w-full items-center">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full max-w-[700px]">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center w-full py-4 text-left"
                            >
                                <h3 className="capitalize text-[22px] font-medium">{faq.question}</h3>
                                <span className="text-[52px] leading-none transition-transform duration-300"
                                    style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"}`}
                            >
                                <p className="py-2 text-gray-700">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




const JoinElon = () => {
    return (
        <section className="py-20 bg-[#0C0C1E] uppercase">

            <div className="bg-[#0C0C1E] max-w-[1200px] mx-auto">

                <h2 className="text-center text-[32px] md:text-[64px] font-bold leading-none text-white">JOIN Elon'S SPECIAL COMMUNITY.
                    <span className="block text-red-600 text-[96px]">$Elon</span>
                    OWN A PIECE OF HISTORY.</h2>
            </div>
        </section>
    )
}



// Example usage component
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
//       >
//         Sign Up
//       </button>

//       
//   );
// };

// export default App;


function LandingPage() {
    // Controls when the popup modal is shown
    const [showPopup, setShowPopup] = useState(false);

    // Tracks if the video has loaded
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // Show the popup modal after 3 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);



    // Called when the video has loaded enough data to start playing
    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className=" flex flex-col " >
            <Header />
            <Hero />
            <WithdrawalSlider />
            <CryptoPresident />
            <Alocation />
            <BuyNow />
            <JoinNow />
            <JoinElon />
            <FAQ />
            <BuyCoinModal />
            <Footer />

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 animate-fadeIn">
                    <div className="bg-[#0C0C1E] bg-opacity-90 backdrop-blur-xl p-6 pt-12 rounded-2xl relative shadow-2xl border border-gray-700 flex flex-col gap-6 w-full max-w-lg">
                        {/* Close button */}
                        <button
                            className="absolute -top-4 -right-4 bg-white bg-opacity-20 hover:bg-opacity-40 text-white font-bold text-4xl w-12 h-12 flex items-center justify-center rounded-full transition"
                            onClick={() => setShowPopup(false)}
                        >
                            &times;
                        </button>

                        {/* Video Caption */}
                        <h2 className="text-lg sm:text-xl text-white font-extrabold text-center uppercase tracking-wider bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                            🚨 BREAKING! ELON LAUNCHES MEMECOIN TODAY – WATCH NOW!
                        </h2>

                        {/* Video container */}
                        <div className="relative rounded-xl overflow-hidden border border-gray-500 shadow-lg">
                            {!isVideoLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                                    <span className="text-gray-300 text-lg animate-pulse">Loading video...</span>
                                </div>
                            )}
                            <video
                                controls
                                autoPlay
                                className={`w-full transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
                                onLoadedData={handleVideoLoaded}
                            >
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}


        </div>

    )
}

export default LandingPage