import Link from "next/link"
export default function corolla(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold  py-2">Suzuki Alto 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-1.jpeg" alt="Suzuki Alto" width="420"  className="border-black " />
                </div>
                <div>

                    <span className="py-5 px-5">The 2024 Suzuki Alto is priced between PKR 2,331,000 and PKR 3,045,000, depending on the variant. The lowest variant, the Alto VX, starts at around PKR 2,331,000, while the highest variant, the Alto VXL AGS, goes up to PKR 3,000,000.</span>
                </div>

                <div className=" text-3xl text-green-400 font-semibold py-2 px-2 ">
                    <span>
                        PKR 3,000,000
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