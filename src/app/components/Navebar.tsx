export default function Navebar(){
    return(
        <header className="bg-white rounded-full w-full  ">
            <nav className="bg-black text-white ">
                <div className="py-4 px-2 text-xl  ">
                    <div className="flex justify-start items-center ">

                        <div className="bg-blue-600  rounded-lg text-5xl">LOGO</div>
                    </div>
                    <div className="flex justify-evenly items-start bg- ">
                        <div className="">New Car</div>
                        <div className="">Used Car</div>
                        <div className="">Service</div>
                        <div className="">About us</div>

                    </div>

                </div>
            </nav>
        </header>
    )
}