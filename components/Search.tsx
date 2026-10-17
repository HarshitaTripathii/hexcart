import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
export function Search() {
  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button variant={"ghost"} size={"icon"}>
              <SearchIcon className="size-5" />
            </Button>
          }
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search Items?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
