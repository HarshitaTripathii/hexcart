"use client";
import { products } from "@/lib/dummyData";
import { notFound } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ImageGalleryProp {
  prodId: number;
}
export function ImageGallery({ prodId }: ImageGalleryProp) {
  // const { id } = await params;
  const product = products.find((p) => p.id === Number(prodId));
  if (!product) {
    notFound();
  }

  const imgs = product.images?.length ? product.images : [product.image];
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((curr) => {
      return curr === 0 ? imgs.length - 1 : curr - 1;
    });
  };

  const nextImage = () => {
    setActiveIndex((curr) => {
      return curr === imgs.length - 1 ? 0 : curr + 1;
    });
  };
  return (
    <div className=" grid h-125  grid-flow-col grid-cols-12 grid-rows-4 gap-4">
      {/* thumbnail images */}
      <div className="col-span-2 row-span-4 grid min-h-0 grid-rows-4 gap-2">
        {product.images?.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 ${
              activeIndex === index ? "border-emerald-600" : "border-gray-200"
            }`}
          >
            <Image
              src={src}
              alt={`${product.title} view ${index + 1}`}
              fill
              sizes="(max-width: 1023px) 20vw, 8vw"
              className="object-cover p-1"
            />
          </button>
        ))}
      </div>

      {/* main image */}
      <div className="relative row-span-4 col-span-10 min-h-105 overflow-hidden rounded-lg bg-gray-50 ">
        <Image
          src={imgs[activeIndex]}
          alt={product.title}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 768px) , 50vw"
          className="hover:scale-110 transition-all duration-300 "
        />
        <button
          type="button"
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-sm hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 shadow-sm hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
