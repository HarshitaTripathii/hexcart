"use client";
import { cn } from "cn";

import { Price, PriceValue } from "@/components/shadcnblocks/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  description: string;
  price: ProductPrice;
  badge: {
    text: string;
    backgroundColor?: string;
  };
}

const PRODUCT_CARD: Product = {
  name: "Vexon CoreStep '08 LX",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
    alt: "",
  },
  link: "#",
  description:
    "Everyday comfort meets bold tri-color style in this performance-driven design.",
  price: {
    regular: 499.0,
    sale: 399.0,
    currency: "USD",
  },
  badge: {
    text: "Selling fast!",
    backgroundColor: "oklch(50.5% 0.213 27.518)",
  },
};

interface ProductCard1Props {
  className?: string;
  product?: Product;
}

const ProductCard1 = ({
  className,
  product = PRODUCT_CARD,
}: ProductCard1Props) => {
  const { regular, sale, currency } = product.price;

  const [count, setCount] = useState(0);

  return (
    <a
      href={product.link}
      className={cn(
        "block max-w-md transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <img
              src={product.image.src}
              alt={product.image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
          {product.badge && (
            <Badge
              style={{
                background: product.badge.backgroundColor,
              }}
              className="absolute start-4 top-4"
            >
              {product.badge.text}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {product.description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={sale != null} className="text-lg font-semibold">
              <PriceValue
                price={regular}
                currency={currency}
                variant="regular"
              />
              <PriceValue price={sale} currency={currency} variant="sale" />
            </Price>
            {count === 0 ? (
              <Button onClick={() => {
                    setCount(count + 1);
                  }}> Add to Cart </Button>
            ) : (
              <div>
                <Minus
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}
                />
                <div>{count}</div>
                <Plus
                  onClick={() => {
                    setCount(count + 1);
                  }}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductCard1 };
