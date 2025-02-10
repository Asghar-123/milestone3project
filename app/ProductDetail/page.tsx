//productdetail page
import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Product3 from "@/components/product3";
import Link from "next/link";

export default function ProductDetail(){
    return(
        <div>
            <Navbar3/>
            <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Product Page</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   body {\n            font-family: 'Roboto', sans-serif;\n        }\n  "
    }}
  />
  {/* Main */}
  <div className="bg-gray-100 py-4 px-6">
    <div className="container mx-auto">
      <nav className="text-sm text-gray-600">
        <Link href="/">
          Home
        </Link>
        &gt;
        <Link href="/shop">
          Shop
        </Link>
        &gt;
        <span>Asgaard sofa</span>
      </nav>
    </div>
  </div>
  {/* Product Section */}
  <div className="container mx-auto py-10 px-6 lg:px-0">
    <div className="flex flex-col lg:flex-row">
      {/* Product Images */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <img
          alt="Main product image"
          className="w-full max-w-md mb-4"
          height={500}
          src="/g95.jpeg"
          width={500}
        />
        <div className="flex space-x-2">
          <img
            alt="Product thumbnail 1"
            className="w-20 h-20"
            height={100}
            src="/Group 94.png"
            width={100}
          />
          <img
            alt="Product thumbnail 2"
            className="w-20 h-20 bg-amber-50"
            height={100}
            src="/Mask group 2.png"
            width={100}
          />
          <img
            alt="Product thumbnail 3"
            className="w-20 h-20 bg-amber-50"
            height={100}
            src="/Mask group 3.png"
            width={100}
          />
          <img
            alt="Product thumbnail 4"
            className="w-20 h-20 bg-amber-50"
            height={100}
            src="/Mask group 4.png"
            width={100}
          />
        </div>
      </div>
      {/* Product Details */}
      <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
        <h1 className="text-3xl font-bold">Asgaard sofa</h1>
        <p className="text-2xl text-gray-700 mt-2">Rs. 250,000.00</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-sm text-gray-600 ml-2">5 Customer Review</p>
        </div>
        <p className="mt-4 text-gray-600">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className="mt-6">
          <h2 className="text-sm font-medium text-gray-700">Size</h2>
          <div className="flex space-x-2 mt-2">
            <button className="px-4 py-2 border rounded">L</button>
            <button className="px-4 py-2 border rounded">XL</button>
            <button className="px-4 py-2 border rounded">XS</button>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-sm font-medium text-gray-700">Color</h2>
          <div className="flex space-x-2 mt-2">
            <button className="w-8 h-8 rounded-full bg-black"></button>
            <button className="w-8 h-8 rounded-full bg-purple-500"></button>
            <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            className="w-16 border text-center py-2"
            type="number"
            defaultValue={1}
          />
          <Link href="/Cart"><button className="ml-4 px-6 py-2 bg-black text-white rounded">
            Add To Cart
          </button></Link>
          <Link href="/Compare"><button className="ml-4 px-6 py-2 border rounded">Compare</button></Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            <span className="font-medium">SKU:</span>
            SSD01
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Category:</span>
            Sofas
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Tags:</span>
            Sofa, Chair, Home, Shop
          </p>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Tabs Section */}
  <div className="container mx-auto px-6 lg:px-0">
    <div className="border-b border-gray-200">
      <nav className="flex space-x-6">
        <Link className="py-4 text-gray-700 border-b-2 border-black" href="#">
          Description
        </Link>
        <Link className="py-4 text-gray-600 hover:text-gray-800" href="#">
          Additional Information
        </Link>
        <Link className="py-4 text-gray-600 hover:text-gray-800" href="#">
          Reviews [5]
        </Link>
      </nav>
    </div>
    <div className="py-6">
      <p className="text-gray-600">
        Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </p>
      <p className="mt-4 text-gray-600">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img
        alt="Sofa image 1"
        className="w-full"
        height={400}
        src="/Group 107.png"
        width={600}
      />
      <img
        alt="Sofa image 2"
        className="w-full bg-amber-50"
        height={400}
        src="/Mask group 5.png"
        width={600}
      />
    </div>
  </div>
  {/* Related Products Section */}
  <div className="container mx-auto py-10 px-6 lg:px-0">
    <h2 className="text-2xl font-bold text-center">Related Products</h2>
  </div>
</>

<Product3/>
<div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
            Show More
          </button>
        </div>

        <Footer/>


        </div>
    )
}