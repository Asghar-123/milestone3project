//home page
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Product2 from "@/components/product2";
export default function Home() {
  return (
    <div>
       <Navbar3/>
    <div className="flex flex-col items-center">
     

      {/* Hero Image */}
      <div className="w-full max-w-screen-lg px-4">
        <Image
          src="/Group 115.png"
          alt="Hero Image"
          width={1183}
          height={685}
          className="w-full h-auto mx-auto"
          priority
        />
      </div>

      {/* Product Section */}
      <Product2 />

      {/* Inspirations Section */}
      <div className="w-full max-w-screen-lg px-4 my-8">
        <Image
          src="/Inspirations.png"
          alt="Inspirations"
          width={1760}
          height={670}
          className="w-full h-auto mx-auto"
        />
      </div>

      {/* Share Section */}
      <div className="w-full max-w-screen-lg px-4 my-8">
        <Image
          src="/Share.png"
          alt="Share"
          width={1799}
          height={780}
          className="w-full h-auto mx-auto"
        />
      </div>

      <Footer />
    </div>
    
    </div>
  );
}

