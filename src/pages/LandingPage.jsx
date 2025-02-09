import Header from "../components/Header"
import elon from "../assets/elon.png"
import Footer from "../components/Footer"
import { useState } from "react"
import vid from '../assets/vid.mp4'
import screen from '../assets/screen.png'
import { useEffect } from "react"
import { Link } from "react-router-dom"



const SolanaAddress = ({ lg }) => {
    return (
        <div className="px-8 flex flex-col gap-4">
            <h2 className={`${lg ? "text-[32px] md:text-[48px]" : "text-[24px]"} capitalize font-bold text-center text-white`}>solana contact address</h2>
            <div className="bg-white flex flex-col lg:flex-row gap-2 w-full p-4 items-center justify-between rounded-[24px] break-words">
                <span className="inline-block p-4 rounded-lg bg-black text-white">CA:</span>
                <p className="break-words break-all">6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN</p>
                <button className="capitalize font-semibold py-[10px] px-8 bg-red-600 text-white inline-block rounded-[24px]">copy address</button>
            </div>

        </div>
    )
}
const Hero = () => {
    return (
        <div className="px-[16px] md:px-[50px] mb-20">

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
                    <SolanaAddress />

                </div>
                <p className="text-white/70">Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. See Terms & Conditions Here, See Card Allocation Here</p>
            </div>
        </div>
    )
}

const Alocation = () => {
    return (
        <div className="px-[16px] md:px-[50px] py-20 flex flex-col gap-8 items-center text-center" >
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
            <div className="flex flex-col md:flex-row items-start gap-20 p-2 py-8 sm:p-8 border rounded-[24px] relative bg-[#0A0A47]">
                <div className="leading-none flex-1 flex-col md:sticky top-0 bottom-0">
                    <h2 className="uppercase text-[36px] sm:text-[48px] font-bold mb-2 ">Elon: <br />the crypto president</h2>
                    <p className="text-[48px] capitalize bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">A Community Celebrating Courage & Strength</p>
                </div>
                <div className="flex-1 text-[28px] flex flex-col gap-8">
                    <h2 className="text-[48px] leading-none">$Elon are now freely tradeable on the blockchain.</h2>
                    <p>On July 13, 2024, President Elon faced death and came up fighting! With his fist in the air and the iconic battle cry FIGHT FIGHT FIGHT, President Elon showed the world what a LEADER is made of. His strength and courage ignited a movement becoming the most memorable meme of the century.</p>

                    <p>Now, you can get your piece of history. This Elon Meme celebrates a leader who doesn’t back down, no matter the odds. Join the Elon Community - we’re all about fighting for what matters.
                        Allocation</p>
                </div>
            </div>
        </div>
    )
}

const BuyNow = () => {
    return (
        <div>

            <div className="bg-[#070733] py-20 px-[50px] flex flex-col gap-8 border-t-[8px] border-b-[8px] border-red-800">
                <h2 className="text-[32px] text-white md:text-[64px] font-extrabold capitalize leading-none text-center max-w-[800px] mx-auto">Buy Now with  Crypto!</h2>

                <div className="flex-col flex gap-8">

                    <SolanaAddress lg={true} />
                    <div>
                        <h3 className="text-2xl font-bold text-white text-center">Don't Know how to buy with Crypto Click <a href="#" className="text-blue-400 underline">here</a></h3>
                    </div>
                    <p className="text-white/70 text-[15px]">
                        Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Elon Organization, and Fight Fight Fight LLC collectively own 80% of the Elon Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Elon Meme Cards. See Terms & Conditions Here, See Card Allocation Here
                    </p>
                </div>

            </div>
            <div className="bg-[#131385] px-[16px] md:px-[50px] py-20   relative">


            </div>
        </div>
    )
}

const JoinNow = () => {
    return (
        <section className="px-[16px] md:px-[50px] py-20 ">

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
        { question: "Is this an official Elon Product?", answer: "No, this is not an official Elon Musk product." },
        { question: "How does this work?", answer: "This works by leveraging advanced AI algorithms to provide accurate responses." },
        { question: "Is this free to use?", answer: "Yes, this service is completely free to use." }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:px-[50px] px-[16px]">
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

            <div className="bg-[#0C0C1E] ">

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
        <div className=" flex flex-col " onClick={()=>setIsModalOpen(true)}>
            <Header />
            <Hero />
            <CryptoPresident />
            <Alocation />
            <BuyNow />
            <JoinNow />
            <JoinElon />
            <FAQ />
           
            <Footer />

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-8">
                    <div className="bg-[#0C0C1E] p-6 pt-10 rounded-lg relative shadow-lg flex flex-col gap-8">
                        {/* Close button */}
                        <button
                            className="absolute font-bold -top-3 right-3 mt-2 mr-2 text-4xl text-white  hover:text-red-900"
                            onClick={() => setShowPopup(false)}
                        >
                            &times;
                        </button>
                        {/* Video container with a loading overlay */}
                        <div className="relative rounded-xl overflow-hidden border border-gray-200 ">
                            {/* Loading overlay */}
                            {!isVideoLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
                                    <span className="text-gray-500 text-lg">Loading video...</span>
                                </div>
                            )}
                            <video
                                controls
                                autoPlay
                                className={`w-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
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