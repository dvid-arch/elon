import { Link } from "react-router-dom"
import { XIcon } from "lucide-react"


function BuyCoinModal({open, setOpen}) {
    
    return (
        <div className="relative z-30">

            {open && <>
                <div className=" flex gap-3 flex-col justify-center items-center z-20 w-full p-12 shadow-lg bg-white max-w-[340px] fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white aspect-square rounded-[24px]">
                    <XIcon color="red" className="text-black absolute top-4 right-4" onClick={()=>setOpen(false)}></XIcon>
                    <button className="text-xl block hover:scale-90 rounded-[12px] py-3 px-6 border bg-[#0C0C1E]" onClick={()=>setOpen(false)}><Link to={'/howtobuy'}>Buy Meme Coin Now to Continue</Link></button>
                    <button className="text-xl block hover:scale-90 rounded-[12px] py-3 px-6 border text-black border-[#0C0C1E]"><Link to={'/dashboard'}>I Have Meme Coin Already</Link></button>
                </div>
                <div className="fixed h-[100%] w-screen top-0 left-0 bg-blue-200/30" onClick={()=>setOpen(false)}></div>
            </>
            }
        </div>
    )
}

export default BuyCoinModal