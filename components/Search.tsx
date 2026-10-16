import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default async function Search() {
  return (
    <div>
      <Dialog>
        <DialogTrigger render={  <Button variant={"ghost"} size={"icon"}>
          <SearchIcon className="size-5"/>
        </Button>} />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>What do you wanna search?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}
