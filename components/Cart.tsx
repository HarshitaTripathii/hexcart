import Link from "next/link";
import { Button } from "./ui/button";
import { Handbag } from "lucide-react";

export function Cart() {
  return (
    <div>
      <Link href="/cart">
        <Button variant={"ghost"} size={"icon"}>
          <Handbag className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
