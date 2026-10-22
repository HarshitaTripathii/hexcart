import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, StarIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className=" bg-blue-300 min-h-screen flex items-center justify-center py-8 ">
          <div className="bg-amber-200 w-full max-w-4xl flex flex-col md:flex-row gap-6 rounded-xl border p-10 shadow-lg">
            {/* image part */}
            <div className="flex-1 w-full md:w-1/2 h-80 rounded relative overflow-hidden">
              <Image
                src="/image.png"
                alt="Doggu"
                className="hover:scale-110 transition-all duration-300 "
                fill
              />
            </div>
            {/* description part + Add to cart button */}
            <div className="flex flex-col flex-1 justify-items-start gap-4">
              {/* brand + Id */}
              <div className="flex justify-between items-center">
                <p>BrandName</p>
                <p>230COECN</p>
              </div>
              {/* prod name */}
              <div className="group gap-2">
                <div>
                  <h2 className="text-2xl  font-extrabold">LipStick</h2>
                </div>
                {/* descp */}
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam in odit quam.
                  </p>
                </div>
              </div>

              {/* ratings */}
              <div className="flex justify-items-start">
                <Badge variant="secondary">
                  <StarIcon fill="yellow" />
                  4.2
                </Badge>
              </div>
              {/* price */}
              <div>
                <p className="text-xl font-bold">$499</p>
              </div>
              {/* button- add to cart + wish list */}
              <div className="flex justify-center items-center">
                {/* add to cart */}
                <div className="flex justify-center items-center">
                  <Button>Add to Cart</Button>
                </div>
                {/* wishlist */}
                <div>
                  <Button variant="outline" size="icon">
                    <Heart />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
