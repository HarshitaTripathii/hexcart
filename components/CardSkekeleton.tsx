import { Skeleton } from "./ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="aspect-[3/3.5] flex flex-col group">
      {/*image*/}
      <div className="flex-1 bg-neutral-100 relative rounded overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      {/*info*/}
      <div className="w-full flex justify-between py-3">
        <div className="flex flex-col gap-0.5">
          {/*<h4 className="text-lg line-clamp-1" title={name}>{name}</h4>*/}
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div>
          <Skeleton className="h-6 w-12" />
        </div>
      </div>
    </div>
  );
}
