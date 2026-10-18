import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

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

        <div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
