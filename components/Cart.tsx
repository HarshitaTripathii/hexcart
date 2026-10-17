"use client"


import { HandbagIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";


export default function Cart() {
  const { product: productState } = useCartStore();
  const cartQty = productState.reduce((sum, p) => sum + p.qty, 0);
  return (
    <div>
      <Link href={"/cart"}><Button variant={"ghost"} size={"icon"} className={"relative"}>
        <HandbagIcon className="size-5" />
        {cartQty > 0 && <span className="absolute top-0 right-0 size-3 text-primary-foreground text-xs bg-primary rounded-full text-center">
        </span>}
      </Button></Link>
    </div>
  )
}
