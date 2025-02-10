import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <Navbar3 />
      <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 md:h-80 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-2xl md:text-4xl font-bold">Cart</h1>
            <p className="text-sm md:text-lg">Home &gt; Cart</p>
          </div>
        </section>
      </main>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cart Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div className="container mx-auto p-4 sm:text-black">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Product</th>
                    <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Price</th>
                    <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Quantity</th>
                    <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-2 md:px-4 flex items-center">
                      <img
                        src="/Group 146.png"
                        alt="Image of Asgaard sofa"
                        className="w-12 h-12 md:w-20 md:h-20 rounded-lg mr-2 md:mr-4"
                      />
                      <span className="text-sm md:text-base">Asgaard sofa</span>
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base">Rs. 250,000.00</td>
                    <td className="py-4 px-2 md:px-4">
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-10 md:w-12 border rounded text-center text-sm md:text-base"
                      />
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base">Rs. 250,000.00</td>
                    <td className="py-4 px-2 md:px-4">
                      <i className="fas fa-trash-alt text-yellow-500 cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4 text-sm sm:text-black md:text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-yellow-500">Rs. 250,000.00</span>
            </div>
            <Link href="/Checkout">
              <button className="w-full bg-white text-black border border-black py-2 rounded-lg hover:bg-gray-100 text-sm md:text-base">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </>
      <Image
        src={"/Frame 161.png"}
        alt=""
        width={1440}
        height={270}
        className="w-full h-auto"
      />
      <Footer />
    </div>
  );
}
