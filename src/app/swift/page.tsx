import Link from "next/link"
export default function swift(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold  py-2">Suzuki swift 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-4.jpeg" alt="Suzuki swift" width="500"  className="border-black " />
                </div>
                <div>

                    <span className="py-5 px-5">The price of Suzuki Swift 2024 in Pakistan ranges from PKR 4,336,000 for the base variant GL Manual to PKR 4,719,000 for the top of the line GLX CVT variant. These prices of Suzuki Swift in Pakistan are ex-factory.</span>
                </div>

                <div className=" text-3xl text-green-400 font-semibold py-2 px-2 ">
                    <span>
                        PKR 4,719,000
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