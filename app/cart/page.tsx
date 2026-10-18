"use client"

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore"
import { DeleteIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Product } from "../shop/[id]/page";
import { useQuery } from "@tanstack/react-query";


async function getCartItems(ids: string[]) {
  const results = await Promise.all(
    ids.map(async (id) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      if (!response.ok) throw new Error('Failed to fetch products')
      return response.json() as Promise<Product>
    })
  )
  return results
}

export default function CartPage() {
  const { product } = useCartStore();

  const productIds = product.map(p => p.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: [`products-cart-${productIds}`],
    queryFn: () => getCartItems(productIds),
  })

  if (isLoading) return <h3>Hi I am loading the data!</h3>
  if (isError) return <h3>Hi I just got my period!</h3>
  return (
    <div>
      <MaxWidthWrapper>
        <div className="space-y-3">
          <h3 className="text-3xl font-heading font-semibold py-6">Your Cart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded w-full p-3 space-y-3 divide-y">
              {/*product card*/}
              {data?.map((p, i) => {
                return <div className="flex gap-3 py-3" key={p.id}>
                  <div className="aspect-square h-32 bg-neutral-100 rounded overflow-hidden relative">
                    <Image src={"/product-image.png"} alt="product-image" fill />
                  </div>
                  <div className="w-full flex justify-between">
                    <div>
                      <h5 className="text-2xl font-medium">
                        {p.title}
                      </h5>
                      <p className="text-lg font-medium">${p.price}</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <Button size={"icon-lg"} variant={"destructive"}>
                        <TrashIcon/>
                      </Button>
                      <div className="rounded border flex p-2 gap-2 items-center">
                        <Button size={"icon"} variant={"ghost"}>
                          <MinusIcon/>
                        </Button>
                        {product.find(pS => pS.id === String(p.id))?.qty}
                        <Button size={"icon"} variant={"ghost"}>
                          <PlusIcon/>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

    </div>
  )
}
