import { cn } from "cn";


export function MaxWidthWrapper({children, className}: {children : React.ReactNode, className?: string}) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4", className)}>
      {children}
    </div>
  )
}
