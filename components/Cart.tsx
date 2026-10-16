import { HandbagIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


export default async function Cart() {
  return (
    <div>
      <Link href={"/cart"}><Button variant={"ghost"} size={"icon"}>
        <HandbagIcon className="size-5"/>
      </Button></Link>
    </div>
  )
}
