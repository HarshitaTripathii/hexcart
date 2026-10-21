"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Handbag } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";

export function Cart() {
  const products = useCartStore((state) => state.products);
  const totalQty = products.reduce((s, p) => s + p.qty, 0);
  return (
    <div>
      <Link href="/cart">
        <Button variant={"ghost"} size={"icon"}>
          <Handbag className="size-5" />
          {totalQty > 0 && (
            <span className="absolute top-0 right-0 size-3 text-primary-foreground text-xs bg-primary rounded-full text-center"></span>
          )}
        </Button>
      </Link>
    </div>
  );
}
