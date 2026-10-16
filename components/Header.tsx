import { HandbagIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Search from "./Search";
import Cart from "./Cart";


export async function Header() {
  return (
    <header className="w-full h-16 flex items-center">
      <MaxWidthWrapper className="w-full flex items-center">
        <div className="flex-1 w-full flex gap-6 items-center">
          <div>
            <Link href={"/"}>
              <p className="text-2xl font-semibold">Hex<span className="text-primary">cart</span></p>
            </Link>
          </div>
          <div className="flex-1 w-full items-center">
            <Link href={"/shop"}><Button variant={"ghost"}>Shop</Button></Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Search/>
          <Cart/>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
