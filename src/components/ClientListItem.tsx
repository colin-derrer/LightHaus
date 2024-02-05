import { formatAddedCause, formatAddedSource } from "@/lib/formatters/client";
import { cn } from "@/lib/utils";
import { ClientData } from "@/types";
import { Sparkles } from "lucide-react";
import ListItem from "./lists/ListItem";

type ProfileItemProps = {
  className?: string;
  client: ClientData;
  isActive?: boolean;
};

export default function ProfileItem({
  className,
  client,
  isActive,
}: ProfileItemProps) {
  return (
    <ListItem className={className} isActive={isActive}>
      <div className="flex flex-col justify-between">
        <p className="font-semibold text-base">{client.name}</p>
        <p className="text-sm opacity-80">
          {formatAddedCause(client.addedCause)}
        </p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className=" flex items-center text-sm gap-1">
          <p className="">Added today, 3:16 PM</p>
          <Sparkles className="size-5 stroke-[1.5px]" />
        </div>
        <p className="text-sm opacity-80">
          {formatAddedSource(client.addedSource)}
        </p>
      </div>
    </ListItem>
  );
}
