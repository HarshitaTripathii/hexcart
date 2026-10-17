"use client"

import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { Rating } from '@/components/ui/ratings';
import { useQuery } from '@tanstack/react-query';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import { use } from 'react'


export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}


async function getProductDetail(id: string) {
  const response = await fetch(
      `https://dummyjson.com/products/${id}`
    )
    if (!response.ok) throw new Error('Failed to fetch products')
    return response.json()
}

export default function Page({
  params,
  // searchParams,
}: {
  params: Promise<{ id: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
  const { id } = use(params);
  const { data, isLoading, isError } = useQuery({
    queryKey: [`products-${id}`],
    queryFn: () => getProductDetail(id),
  })

  if (isLoading) return <h3>Hi I am loading the data!</h3>
  if (isError) return <h3>Hi I just got my period!</h3>

  const product = data as Product;




  return <div>
    <MaxWidthWrapper>
      <div className=''>
        {/*product showcase detailed section*/}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full bg-neutral-100 aspect-square relative rounded overflow-hidden group'>
            <Image src={product.images[0]} alt="product-img" className='hover:scale-110 transition-all duration-300' fill />
          </div>
          <div className='w-full flex gap-5 flex-col'>
            <div className='w-full flex justify-between items-center'>
              <p className='font-medium'>
                {product.brand}
              </p>
              <p className='text-muted-foreground text-sm font-medium'>
                {product.sku}
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-4xl font-medium font-heading'>
                {product.title}
              </h3>
              <Rating readOnly value={product.rating} />
            </div>
            <p className='text-2xl font-semibold'>${product.price}</p>
            <p>
              {product.description}
            </p>
            <div className='w-[70%] flex items-center gap-3'>
              <Button className={"w-full"} size={"lg"}>Add to cart</Button>
              <Button variant={"secondary"} size={"icon-lg"}>
                <HeartIcon/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  </div>
}
