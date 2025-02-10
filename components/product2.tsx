//component product2
import Head from 'next/head';


import Link from 'next/link';

export default function Product2() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Our Products</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
         <Link href="/ProductDetail"> <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Images.png"
              alt="Stylish cafe chair in a bright room"
              className="w-full h-[301px] object-cover"
              
              
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Syltherine</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -30%
            </div>
          </div></Link>
          {/* Product 2 */}
           <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
              alt="Stylish cafe chair in a dark room"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Leviosa</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
             <Link href="/Cart"> <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add to cart
              </button></Link>
              <div className="absolute bottom-4 left-4 text-white space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-share"></i> Share
                </Link>
                <Link href="/Compare" className="hover:text-gray-300">
                  <i className="fas fa-exchange-alt"></i> Compare
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-heart"></i> Like
                </Link>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <Link href="/ProductDetail"> <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/sofa.png"
              alt="Luxury big sofa in Link living room"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Lolito</h2>
              <p className="text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div></Link>
          {/* Product 4 */}
          <Link href="/ProductDetail"><div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/newsofa.png"
              alt="Outdoor bar table and stool in Link garden"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Respira</h2>
              <p className="text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div></Link>
          {/* Product 5 */}
          <Link href="/ProductDetail"> <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/lamp.png"
              alt="Night lamp on Link wall"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Grifo</h2>
              <p className="text-gray-600">Night lamp</p>
              <p className="text-lg font-bold text-gray-800">Rp 1.500.000</p>
            </div>
          </div></Link>
          {/* Product 6 */}
          <Link href="/ProductDetail"><div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Lsofa.png"
              alt="Small mug on Link table"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Muggo</h2>
              <p className="text-gray-600">Small mug</p>
              <p className="text-lg font-bold text-gray-800">Rp 150.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div></Link>
          {/* Product 7 */}
          <Link href="/ProductDetail"><div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/bed.png"
              alt="Cute bed set in Link bedroom"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Pingky</h2>
              <p className="text-gray-600">Cute bed set</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div></Link>
          {/* Product 8 */}
         <Link href="/ProductDetail"> <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/potty.png"
              alt="Minimalist flower pot on Link table"
              className="w-full h-[301px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Potty</h2>
              <p className="text-gray-600">Minimalist flower pot</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div></Link>
        </div>
        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}