

function Header() {
    return (
        <header className="px-[28px] md:px-[50px] py-10">

            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-between items-center md:max-w-[90%]  py-4 px-8 bg-[#070735] rounded-[24px] mx-auto text-white w-full lg:w-fit">
                <div className="logo text-4xl uppercase font-bold">Elon Coin</div>
                <div className="text-[18px] flex gap-8  items-center flex-1 w-full justify-between sm:justify-end">
                    <nav className="hidden lg:flex justify-between  capitalize flex-1 gap-4">
                        <a href="#">home</a>
                        <a href="#">contact address</a>
                        <a href="#">how to buy</a>
                        <a href="#">more</a>
                    </nav>
                    <div className="mobilenav lg:hidden">
                        mob
                    </div>

                    <a href="#" className="capitalize font-semibold py-2 px-8 bg-red-600 text-white inline-block rounded-[24px]">buy now</a>
                </div>
            </div>
        </header>
    )
}

export default Header