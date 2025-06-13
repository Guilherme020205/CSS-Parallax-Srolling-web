export default function Header(){
    return(
        <header className="absolute top-0 left-0 w-full px-24 py-8 flex justify-start items-center z-[100]">
            <h2 className="font-bold text-2xl size-8 text-[#359381] pointer-events-none mr-96">logo</h2>
            <nav>
                <a className="py-[6px] px-[15px] rounded-3xl mx-4 my-0 font-semibold bg-[#359381] text-white" href="">Home</a>
                <a className="text-[#359381] py-[6px] px-[15px] rounded-3xl mx-4 my-0 font-semibold hover:bg-[#359381] hover:text-white" href="">About</a>
                <a className="text-[#359381] py-[6px] px-[15px] rounded-3xl mx-4 my-0 font-semibold hover:bg-[#359381] hover:text-white" href="">Service</a>
                <a className="text-[#359381] py-[6px] px-[15px] rounded-3xl mx-4 my-0 font-semibold hover:bg-[#359381] hover:text-white" href="">Contact</a>
            </nav>
        </header>
    )
}