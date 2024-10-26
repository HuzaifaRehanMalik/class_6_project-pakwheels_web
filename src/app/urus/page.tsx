import Link from "next/link"
export default function urus(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold  py-2">Lamborghini Urus</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-5.jpeg" alt="Lamborghini Urus" width="420"  className="border-black " />
                </div>
                <div>

                    <span className="py-5 px-5">Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV. Powered by Lamborghini’s 4.0-liter twin turbo V8 engine and, in the case of Urus SE, a powerful electric motor, the Urus embodies a performance mindset that combines Fun-to-Drive with astounding vehicle capabilities. The design, performance, driving dynamics, and unbridled emotion flow effortlessly into this visionary realization of authentic Lamborghini DNA, revolutionizing an entire segment</span>
                </div>

                <div className=" text-3xl text-green-400 font-semibold py-2 px-2 ">
                    <span>
                        PKR 70,900,000
                    </span>
                </div>

                <button className="bg-blue-600 text-black rounded-3xl py-2 px-2">
                    <Link href="/Payment">
                        MAKE PAYMENT
                    </Link>
                </button>
            </div>
        </div>
    )
}