import Link from "next/link"
export default function Payment(){
    return(
      <div>
        <h1 className="text-5xl font-bold text-center uppercase ">
          Enter your details
        </h1>
        <div>
          <form className=" mt-10 flex gap-5  justify-center items-center flex-col ">
            <input type="text" className="border-red-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter your Name" />
            <input type="email" className="border-red-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter your email" />
            <input type="Password" className="border-red-800 py-2 text-black w-2/6 rounded-2xl" placeholder="Enter your password" />
            <input type="Password" className="border-red-800 py-2 text-black w-2/6 rounded-2xl" placeholder="Enter your card number" />
            <input type="Password" className="border-red-800 py-2 text-black w-2/6 rounded-2xl" placeholder="Enter your pin" />
            <button className="bg-blue-900 text-white rounded-lg py-3 px-7 ">
              <Link href="/thanks">
                    PAY NOW
              </Link>
            </button>

          </form>

        </div>
      </div>
    )
  }