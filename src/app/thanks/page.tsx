import Link from "next/link"
export default function thanks() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-blue-500 py-10 px-10  ">Thank you for your order!</h1>
            <p className="text-xl ">Your order has been received and is being processed.</p><br />
            <button className="bg-blue-600 rounded-2xl text-black py-4 px-4">
                <Link href="/">
                    Countinue Shopping
                </Link>
            </button>
        </div>
    )
}