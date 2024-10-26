import Link from "next/link"
export default function home (){
    return (
        <main>
            <div>
                    <h1 className="text-5xl text-center font-bold py-16 px-16">
                    SELL YOUR CAR AND GETS THE BEST PRICE
                    </h1>

                 <div className="flex justify-center items-center">
                    
                    <div className="py-10 px-10">
                        <h1 className="text-3xl text-blue-500">Post your Ad</h1>
                        <p>Post your Ad for Free in 3 Easy Steps</p>
                        <p>Get Genuine offers from Verified Buyers</p>
                        <p>Sell your car Fast at the Best Price</p>
                        <button className="bg-red-600 rounded-xl py-2 px-2">POST YOUR ADD</button>
                        
                    </div>
                    <div className="font-semibold text-5xl text-gray-500">
                        <h1>OR</h1>
                    </div>
                    <div className="py-10 px-10">
                        <h1 className="text-3xl text-blue-500">Try Sell It For Me</h1>
                        <p>Dedicated Sales Expert to Sell your Car</p>
                        <p>We Bargain for you and share the Best Offer</p>
                        <p>We ensure Safe & Secure Transaction</p>
                        <button className="bg-blue-600 rounded-xl py-2 px-2">REGISTER YOUR CAR</button>
                    </div>
                </div> 
                <div>
                    <nav>
                        <div>
                            <div className="text-xl font-bold text-center">Featured New Cars</div>
                            <div className="flex justify-start  items-start bg-slate-300 border-black">
                                <div className="py-2 px-10">Popular</div>
                                <div className="py-2 px-10">Upcoming</div>
                                <div className="py-2 px-10">Newly Launched</div>
                            </div>

                        </div>
                    </nav>
                </div>




                <div>
                
                    <div className="bg-white py-4 px-4 h-96 flex justify-between  ">
                        <div className="border-black bg-slate-50 w-40 h-64 py-2 px-2 rounded-xl ">
                            <Link href="/alto">
                                <img src=".\download-1.jpeg" width="220" />
                                <div className="text-semibold text-blue-400 text-xl">
                                    Suzuki Alto
                                </div>
                                <div className="text-xl text-green-400 ">
                                    PKR 3,000,000
                                </div>
                            
                            </Link>
                        </div>
                        <div className="border-black bg-slate-50 w-40 h-64 py-2 px-2 rounded-xl">
                            <Link href="/corolla">
                                <img src=".\download-2.jpeg" width="220" />
                                <div className="text-semibold text-blue-400 text-xl">
                                    COROLLA X
                                </div>
                                <div className="text-xl text-green-400 ">
                                    PKR 7,522,000
                                </div>
                            
                            </Link>

                        </div>
                        <div className="border-black bg-slate-50 w-40 h-64 py-2 px-2 rounded-xl">
                            <Link href="/civic">
                                <img src=".\download-3.jpeg" width="220" />
                                <div className="text-semibold text-blue-400 text-xl">
                                    Honda Civic 
                                </div>
                                <div className="text-xl text-green-400 ">
                                    PKR 9,890,000
                                </div>
                            
                            </Link>
                        </div>
                        <div className="border-black bg-slate-50 w-40 h-64 py-2 px-2 rounded-xl">
                        <Link href="/swift">
                                <img src=".\download-4.jpeg" width="220" />
                                <div className="text-semibold text-blue-400 text-xl">
                                    Suzuki swift 
                                </div>
                                <div className="text-xl text-green-400 ">
                                    PKR 4,719,000
                                </div>
                            
                            </Link>
                        </div>
                        <div className="border-black bg-slate-50 w-40 h-64 py-2 px-2 rounded-xl">
                        <Link href="/urus">
                                <img src=".\download-5.jpeg" width="220" />
                                <div className="text-semibold text-blue-400 text-xl">
                                    Lamborghini Urus
                                </div>
                                <div className="text-xl text-green-400 ">
                                    PKR 70,900,000
                                </div>
                            
                            </Link>
                        </div>
                        
                    </div>
                </div> 

            </div>
        </main>
    )
}