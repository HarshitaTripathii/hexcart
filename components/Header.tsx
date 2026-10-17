import { Link } from "lucide-react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Cart } from "./Cart";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="w-full h-16 flex items-center">
      <MaxWidthWrapper className=" w-full flex items-center">
        <div className="flex-1 w-full flex items-center">
          <div>
            <Link href="/">
              <p className="bold text-3xl">Hex</p>
              <span className="text-primary">cart</span>
            </Link>
          </div>
          <div>
            <Link href="/shop">
              <Button variant={"ghost"}>Shop</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
            <Search />
            <Cart />

        </div>
      </MaxWidthWrapper>
    </header>
  );
}
