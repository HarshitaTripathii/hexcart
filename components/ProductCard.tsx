import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function ProductCard() {
  return (
    <div className="aspect-[6/7] flex flex-col group">
      {/* Image */}
      <div className="flex-1 rounded relative overflow-hidden">
        {/* Image needs either width and height, or the fill prop */}
        <Image
          src="/image.png"
          alt="Doggu"
          className="hover:scale-110 transition-all duration-300 "
          fill
        />
      </div>
      {/* Descp */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg line-clamp-1">Doggu</h4>
          <p className="text-base">$499</p>
        </div>
        <div>
          <Badge variant="secondary">
            <StarIcon fill="yellow" /> 4.1
          </Badge>
        </div>
      </div>
    </div>
  );
}
