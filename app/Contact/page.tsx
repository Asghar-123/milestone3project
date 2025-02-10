import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Image from "next/image";


export default function Contact(){
    return(
        <div>
            <Navbar3/>
            <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-lg">Home &gt; Contact</p>
          </div>
        </section>
        </main>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className=" justify-center">
            <div>
              <h2 className="text-2xl font-semibold">Get In Touch With Us</h2>
              <p className="text-gray-600 mt-2">
                For more information about our product & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-yellow-500 text-xl mr-4">📍</div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-500 text-xl mr-4">📞</div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">Mobile: +(+84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(+84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-yellow-500 text-xl mr-4">⏰</div>
                <div>
                  <h3 className="font-medium">Working Time</h3>
                  <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="This is optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Hi! I'd like to ask about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Image src={"/Frame 161.png"} alt="" width={1440} height={1144}/>
      <Footer/>
      </div>
    )
}