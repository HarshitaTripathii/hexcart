"use client";

import { useWishStore } from "@/lib/wishlistStore";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
interface WishlistProp {
  prodId: number;
}

export function WishlistButton({ prodId }: WishlistProp) {
  const toggleWishlist = useWishStore((state) => state.toggleWishlist);
  const isWishlisted = useWishStore((state) =>
    state.wproducts.includes(prodId),
  );
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => toggleWishlist(prodId)}
      aria-pressed={isWishlisted}
    >
      <Heart
        className={
          isWishlisted ? "fill-pink-600 text-pink-600" : "text-gray-500"
        }
      />
    </Button>
  );
}
