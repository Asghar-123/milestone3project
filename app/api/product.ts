export default function handler(req:any, res:any) {
    const products = [
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        discount: "Rp 3.500.000",
        image: "/Images.png",
        discountPercent: "-30%",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        discount: null,
        image: "https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        discount: "Rp 14.000.000",
        image: "/sofa.png",
        discountPercent: "-50%",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        discount: null,
        image: "/newsofa.png",
        isNew: true,
      },
    ];
  
    res.status(200).json(products);
  }