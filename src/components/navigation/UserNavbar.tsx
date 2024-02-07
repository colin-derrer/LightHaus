import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getSelf } from "@/actions/auth/client";
import { getUsers } from "@/actions/users/users";

export default async function UserSwap() {
  const self = await getSelf();
  const users = await getUsers({ id: self?.id + "" ?? "user is null asdf" });

  const user = users[0] ?? {
    displayName: "Unknown user",
    email: "No email",
    id: "0000",
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>FV</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="text-foreground">{user.displayName}</div>
        <div className="text-muted-foreground text-sm">{user.email}</div>
      </div>
      <ChevronDown className="ml-2" />
    </div>
  );
}
