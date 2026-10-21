'use client'

import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Suspense } from "react";

async function getAllProducts() {
  const response = await fetch(
      `http://localhost:3000/api/products?limit=8`
    )
    if (!response.ok) throw new Error('Failed to fetch products')
    return response.json()
}


export function ProductShowcaseGrid() {
  const { data } = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(),
  })
  const products = data.data;
  return  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product: {
      title: string,
      price: number,
      rating: number,
      id: string,
      images: string[]
    }) => {
      return <Link prefetch href={`/shop/${product.id}`} key={product.id}>
        <ProductCard name={product.title} price={product.price} rating={product.rating} image={product.images[0]} key={product.id} />
      </Link>
    })}

  </div>
}

export function ProductShowcaseGridLoading() {

  return  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, index) => (
       <div key={index}>
         <ProductCardSkeleton/>
       </div>
     ))}


  </div>
}

export default function ProductShowcase() {
  return <div>
    <MaxWidthWrapper>
      <div className="w-full py-8 flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-2xl font-medium">Products</h3>
          <div><Link href={"/products"}><Button variant={"ghost"}>Show more</Button></Link></div>
        </div>
        <Suspense fallback={<ProductShowcaseGridLoading/>}>
          <ProductShowcaseGrid/>
        </Suspense>
      </div>
    </MaxWidthWrapper>
</div>
}
