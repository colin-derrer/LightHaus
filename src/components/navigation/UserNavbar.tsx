import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserSwap() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>FV</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="text-foreground">Frogamus Verstappen</div>
        <div className="text-muted-foreground text-sm">Lindsay Acura #551</div>
      </div>
      <ChevronDown className="ml-2" />
    </div>
  );
}
