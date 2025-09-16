import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Menubar() {
  return (
    <div className="grid grid-cols-4 justify-items-center items-center">
      <Link href={"/"} className="text-3xl font-bold col-span-1">
        Home
      </Link>
      <div className="flex w-full max-w-m items-center gap-2 col-span-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit" variant="default">
          Search
        </Button>
      </div>
      <Avatar className="col-span-1">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>
  );
}
