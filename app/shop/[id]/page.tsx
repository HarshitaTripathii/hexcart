import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, StarIcon, ShoppingCartPlus } from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/dummyData";
import { notFound } from "next/navigation";
import { WishlistButton } from "@/components/WishlistButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    notFound();
  }
  return (
    <div className="min-h-screen py-16">
      <MaxWidthWrapper>
        {/* <div className=" bg-blue-300 min-h-screen flex items-center justify-center  "> */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* image part */}
          <div className="flex-1 w-full md:w-1/2 h-96 md:h-[500px]  rounded relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hover:scale-110 transition-all duration-300 "
              fill
            />
          </div>
          {/* description part + Add to cart button */}
          <div className="flex flex-col flex-1 justify-items-start gap-3">
            {/* brand + Id */}

            {/* prod name */}
            <div className="group  space-y-1">
              <div className="flex justify-between items-center text-sm text-gray-500 text-shadow-xs">
                <p>{product.brand}</p>
                {/* <p>230COECN</p> */}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className=" text-2xl text-gray-900 font-extrabold ">
                    {product.title}
                  </h2>
                </div>
                {/* buttons share+ wishlist */}
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <Button variant="outline" size="icon">
                      <Share2 />
                    </Button>
                  </div>
                  <div>
                    {/* <Button variant="outline" size="icon">
                      <Heart />
                    </Button> */}
                    <WishlistButton prodId={product.id} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  text-xs text-gray-400">
                <p>ID: {product.productId}</p>
              </div>
            </div>

            {/* rating stars */}
            <div className="flex justify-items-start items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon fill="orange" color="orange" size={18} key={index} />
              ))}
              <span>
                {product.rating} ({product.totalReviews} reviews){" "}
              </span>
            </div>

            {/* price */}
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">${product.price}</p>
              <p className="text-sm text-gray-400 line-through">
                ${product.originalPrice}{" "}
              </p>
              <Badge variant="destructive">{product.discount}% OFF</Badge>
            </div>

            {/* descp */}
            <div>
              <p>{product.description}</p>
            </div>

            {/* ratings */}
            {/* <div className="flex justify-items-start">
              <Badge variant="secondary">
                <StarIcon fill="yellow" />
                4.2
              </Badge>
            </div> */}

            {/* sizes */}
            <div className="space-y-2">
              <h3 className="font-semibold ">Select Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <Button variant="outline" key={s}>
                    {s}{" "}
                  </Button>
                ))}
              </div>
            </div>
            {/* colors */}
            <div className="space-y-2">
              <h3 className="font-semibold ">Select Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center gap-2"
                    title={color.name}
                  >
                    <span
                      className="h-7 w-7 rounded-full border"
                      style={{ backgroundColor: color.hex }}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* button- add to cart + wish list */}
            <div className="flex w-full gap-3">
              {/* add to cart */}

              <Button className=" flex-1 h-10">
                <ShoppingCartPlus />
                Add to Cart
              </Button>

              {/* wishlist */}

              <Button
                variant="destructive"
                size="icon"
                className=" flex-1 h-10"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </MaxWidthWrapper>
    </div>
  );
}
