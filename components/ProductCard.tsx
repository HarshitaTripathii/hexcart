import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"
import Image from "next/image"

interface Product {
  name: string,
  price: number,
  image: string,
  rating: number
}

export default function ProductCard({ name, image, price, rating}: Product) {
  return <div className="aspect-[3/3.5] flex flex-col group">
    {/*image*/}
    <div className="flex-1 bg-neutral-100 relative rounded overflow-hidden">
      <Image src={image} alt="product image" className="hover:scale-110 transition-all duration-300" fill/>
    </div>
    {/*info*/}
    <div className="w-full flex justify-between py-3">
      <div className="flex flex-col gap-0.5">
        <h4 className="text-lg line-clamp-1" title={name}>{name}</h4>
        <p className="text-base">${price}</p>
      </div>
      <div>
        <Badge variant="secondary"><StarIcon fill="yellow" /> {rating}</Badge>
      </div>

    </div>
  </div>
}
