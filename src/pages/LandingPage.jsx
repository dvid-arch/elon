import Header from "../components/Header"
import elon from "../assets/elon.png"
import Footer from "../components/Footer"


const SolanaAddress = ({ lg }) => {
    return (
        <div className="px-8 flex flex-col gap-4">
            <h2 className={`${lg ? "text-[48px]" : "text-[24px]"} capitalize font-bold text-center text-white`}>solana contact address</h2>
            <div className="bg-white flex flex-col lg:flex-row gap-2 w-full p-4 items-center justify-between rounded-[24px]">
                <span className="inline-block p-4 rounded-lg bg-black text-white">CA:</span>
                <p>6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN</p>
                <button className="capitalize font-semibold py-[10px] px-8 bg-red-600 text-white inline-block rounded-[24px]">copy address</button>
            </div>

        </div>
    )
}
const Hero = () => {
    return (
        <div className="px-[28px] md:px-[50px]">

            <div className="py-11 px-8 bg-[#070735] rounded-[24px] flex flex-col  gap-8">
                <div className=" text-white flex flex-col lg:flex-row gap-20 py-10">
                    <div className="textpart flex-1  flex flex-col justify-between gap-20">
                        <h1 className="text-[92px] font-extrabold leading-none tracking-tighter uppercase text-nowrap ">
                            THE ONLY
                            <br />
                            <span className="text-red-600">OFFICIAL</span>
                            <br />
                            elon
                            <br />
                            MEME
                        </h1>
                        <p className="text-[40px] leading-none">Join the Trump Community. This is History in the Making!</p>
                    </div>
                    <div className="imagepart">
                        <img src={elon} alt="elon musk pic" className="w-[80%] mx-auto lg:w-full" />
                    </div>
                </div>
                <div className="max-w-[900px] w-full mx-auto flex flex-col gap-8">

                    <div className="flex flex-col gap-4 lg:flex-row justify-center lg:gap-8 text-white  mx-auto w-full">
                        <a href="#" className="flex-1 uppercase justify-center py-[24px] px-[40px] rounded-[24px] font-bold text-[24px] lg:flex-col gap-1 leading-none text-center flex items-center bg-red-700 p-4 ">
                            buy now with

                            <span>debit card</span>
                        </a>
                        <a href="#" className="py-[24px] px-[40px] flex-1 uppercase justify-center rounded-[24px] font-bold text-[24px] leading-none gap-1 text-center flex lg:flex-col items-center bg-red-700 p-4">
                            buy now with

                            <span>crypto</span>
                        </a>

                    </div>
                    <SolanaAddress />

                </div>
                <p className="text-white/70">Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. See Terms & Conditions Here, See Card Allocation Here</p>
            </div>
        </div>
    )
}

const Alocation = () => {
    return (
        <div className="px-[28px] md:px-[50px] py-20 flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-[48px] font-bold capitalize">Allocation</h2>
                <p className="text-[28px] font-semibold leading-normal text-center">There are 200 million $TRUMP available on day one and will grow to a total of 1 billion $TRUMP over three years. Each group's allocation are released on their own schedule over 3 years.</p>
            </div>
            <p className="text-black/70 text-[15px]">
                Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Trump Organization, and Fight Fight Fight LLC collectively own 80% of the Trump Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Trump Meme Cards. See Terms & Conditions Here, See Card Allocation Here
            </p>
        </div>
    )
}
const CryptoPresident = () => {
    return (
        <div className="px-[28px] md:px-[50px] py-40 bg-[#070735] text-white">
            <div className="flex flex-col md:flex-row items-start gap-20 p-8 border rounded-[24px] relative bg-[#0A0A47]">
                <div className="leading-none flex-1 flex-col md:sticky top-0 bottom-0">
                    <h2 className="uppercase text-[48px] font-bold">trump: <br />the crypto president</h2>
                    <p className="text-[48px] capitalize">A Community Celebrating Courage & Strength</p>
                </div>
                <div className="flex-1 text-[28px] flex flex-col gap-8">
                    <h2 className="text-[48px] leading-none">$TRUMP are now freely tradeable on the blockchain.</h2>
                    <p>On July 13, 2024, President Trump faced death and came up fighting! With his fist in the air and the iconic battle cry FIGHT FIGHT FIGHT, President Trump showed the world what a LEADER is made of. His strength and courage ignited a movement becoming the most memorable meme of the century.</p>

                    <p>Now, you can get your piece of history. This Trump Meme celebrates a leader who doesn’t back down, no matter the odds. Join the Trump Community - we’re all about fighting for what matters.
                        Allocation</p>
                </div>
            </div>
        </div>
    )
}

const BuyNow = () => {
    return (
        <div>

            <div className="bg-[#070733] text-white py-20 px-[50px] flex flex-col gap-8 border-t-[8px] border-b-[8px] border-red-800">
                <h2 className="text-[64px] font-extrabold capitalize leading-none text-center max-w-[800px] mx-auto">Buy now with a debit card or crypto!</h2>
                <div className="flex gap-4 mx-auto">
                    <span className="w-[100px] rounded-lg inline-block  aspect-square border"></span>
                    <span className="w-[100px] rounded-lg inline-block  aspect-square border"></span>
                    <span className="w-[100px] rounded-lg inline-block  aspect-square border"></span>
                    <span className="w-[100px] rounded-lg inline-block  aspect-square border"></span>
                    <span className="w-[100px] rounded-lg inline-block  aspect-square border"></span>
                </div>
                <a href="#" className="text-[32px] py-6 px-20  bg-red-600 w-fit mx-auto rounded-lg font-extrabold uppercase">Buy now</a>
                <p className="text-center text-[15px] text-white/70">Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. See Terms & Conditions Here, See Card Allocation Here
                </p>
            </div>
            <div className="bg-[#131385] px-[28px] md:px-[50px] py-20   relative">
                <div className="flex-col flex gap-8">

                    <SolanaAddress lg={true} />
                    <p className="text-white/70 text-[15px]">
                        Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Trump Organization, and Fight Fight Fight LLC collectively own 80% of the Trump Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Trump Meme Cards. See Terms & Conditions Here, See Card Allocation Here
                    </p>
                </div>

            </div>
        </div>
    )
}

const JoinNow = () => {
    return (
        <section className="px-[28px] md:px-[50px] ">

            <div className="flex flex-col md:gap-20 md:flex-row">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-[64px] font-bold leading-none max-w-[600px] text-red-600">Join the Elon Meme Community!</h2>
                    <div className="p-4 bg-[#070733] flex flex-col gap-2 text-white rounded-[24px]">
                        <h3 className="text-[40px] font-bold text-purple-900">Mission</h3>
                        <p className="text-white text-[21px]">
                            This is YOUR chance to join a community that’s all about fighting for what matters. The TRUMP Meme encourages a culture of success & optimism to make the world a better place. Go TRUMP! 👊</p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={elon} alt="" />
                </div>
            </div>
        </section>
    )
}

const FAQ = () => {
    return (
        <section className="py-16">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h2 className="text-[44px] font-bold">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-[24px]  w-full items-center">
                    <div className="flex gap-6 justify-between w-full max-w-[700px]">
                        <h3 className="capitalize text-[28px]">Is this an official Elon Product</h3>
                        <div className="max-w-[32px]"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                        </svg></div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

const JoinElon = () => {
    return (
        <section className="py-20 bg-[#0C0C1E] ">

            <div className="bg-[#0C0C1E] ">

                <h2 className="text-center text-[52px] font-bold leading-none text-white">JOIN TRUMP'S SPECIAL COMMUNITY.
                    <span className="block text-red-600 text-[96px]">$TRUMP</span>
                    OWN A PIECE OF HISTORY.</h2>
            </div>
        </section>
    )
}
function LandingPage() {
    return (
        <div className=" flex flex-col gap-14">
            <Header />
            <Hero />
            <CryptoPresident />
            <Alocation />
            <BuyNow />
            <JoinNow />
            <JoinElon />
            <FAQ />
            <Footer />
        </div>
    )
}

export default LandingPage