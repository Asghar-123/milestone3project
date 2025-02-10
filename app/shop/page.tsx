"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar3 from "@/components/navbar3";
import Link from "next/link";
import Product3 from "@/components/product3";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount?: string;
  image: string;
  discountPercent?: string;
  isNew?: boolean;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Furniro Shop</title>
      </Head>
      <Navbar3 />

      <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of a cozy room"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">Shop</h1>
            <p className="text-lg">Home &gt; Shop</p>
          </div>
        </section>

        <section className="bg-gray-100 py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            <span className="text-gray-700">Showing {products.length} Products</span>
          </div>
        </section>
        <Product3/>
        <Product3/>
        <Product3/>
        <Product3/>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <Link key={product.id} href="/ProductDetail">
              <div className="relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-[301px] object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold text-gray-800">{product.price}</p>
                  {product.discount && (
                    <p className="text-sm text-gray-500 line-through">{product.discount}</p>
                  )}
                </div>
                {product.discountPercent && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.discountPercent}
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <Image src={"/Frame 72.png"} alt="" width={392} height={90} className="mt-10 mx-auto" />
        <Image src={"/Frame 161.png"} alt="" width={1440} height={270} className="w-full mt-10" />
        <Footer />
      </main>
    </div>
  );
}