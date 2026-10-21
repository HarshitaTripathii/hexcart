"use client";

import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Suspense } from "react";
import ProductCardSkeleton from "./CardSkekeleton";
import { useSuspenseQuery } from "@tanstack/react-query";

async function getAllProducts() {
  const response = await fetch(`https://dummyjson.com/products?limit=8`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

export function ProductShowcaseGridLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index}>
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
}

export function ProductShowcaseGrid() {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
  const products = data.products;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(
        (product: {
          title: string;
          price: number;
          rating: number;
          id: string;
          images: string[];
        }) => {
          return (
            <Link prefetch href={`/shop/${product.id}`} key={product.id}>
              <ProductCard
                name={product.title}
                price={product.price}
                rating={product.rating}
                image={product.images[0]}
                key={product.id}
              />
            </Link>
          );
        },
      )}
    </div>
  );
}

export function ProductShowcase() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-3 my-5">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">Products</p>
          <div>
            <Link href={"/products"}>
              <Button variant={"ghost"}>See All</Button>
            </Link>
          </div>
        </div>

        <Suspense fallback={<ProductShowcaseGridLoading />}>
          <ProductShowcaseGrid />
        </Suspense>

        {/* <div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
}
