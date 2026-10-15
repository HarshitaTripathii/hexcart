import { ProductCard1 } from "@/components/product-card1";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Shoes '08 LX",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
        alt: "",
      },
      link: "#",
      description:
        "Everyday comfort meets bold tri-color style in this performance-driven design.",
      price: {
        regular: 499.0,
        sale: 399.0,
        currency: "USD",
      },
      badge: {
        text: "Selling fast!",
        backgroundColor: "oklch(50.5% 0.213 27.518)",
      },
    },
    {
      name: "Shoes '08 LX",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
        alt: "",
      },
      link: "#",
      description:
        "Everyday comfort meets bold tri-color style in this performance-driven design.",
      price: {
        regular: 499.0,
        sale: 399.0,
        currency: "USD",
      },
      badge: {
        text: "Selling fast!",
        backgroundColor: "oklch(50.5% 0.213 27.518)",
      },
    },
  ];
  return (
    <div className=" flex justify-center items-center h-full flex-1 gap-12">
      {products.map((p) => {
        return (
          <ProductCard1
            product={{
              name: "Shoes '08 LX",
              image: {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
                alt: "",
              },
              link: "#",
              description:
                "Everyday comfort meets bold tri-color style in this performance-driven design.",
              price: {
                regular: 499.0,
                sale: 399.0,
                currency: "USD",
              },
              badge: {
                text: "Selling fast!",
                backgroundColor: "oklch(50.5% 0.213 27.518)",
              },
            }}
          />
        );
      })}
    </div>
  );
}
