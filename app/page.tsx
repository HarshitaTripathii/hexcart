import { Hero } from "@/components/Hero";
import { ProductCard1 } from "@/components/product-card1";
import { ProductShowcase } from "@/components/ProductShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
    </div>
  );
}
