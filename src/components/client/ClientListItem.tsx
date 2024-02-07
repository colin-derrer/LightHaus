import { formatAddedCause, formatAddedSource } from "@/lib/formatters/client";
import { cn } from "@/lib/utils";
import { ClientData } from "@/lib/types";
import { Sparkles } from "lucide-react";
import ListItem from "../ListItem";
import { Client, LeadReason } from "@prisma/client";
import Link from "next/link";

type ProfileItemProps = {
  className?: string;
  client: Client;
  isActive?: boolean;
  href?: string;
};

export default function ProfileItem({
  className,
  client,
  href,
  isActive,
}: ProfileItemProps) {
  if (!href) {
    return (
      <ListItem className={className} active={isActive}>
        <div className="flex flex-col justify-between">
          <p className="font-semibold text-base">{client.name}</p>
          <p className="text-sm opacity-80">
            {client.leadReasons[0]
              ? formatAddedCause(client.leadReasons[0])
              : "No added reason"}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className=" flex items-center text-sm gap-1">
            <p className="">
              {client.assignedDate?.getDate() || "Unknown assigning date"}
            </p>
            <Sparkles className="size-5 stroke-[1.5px]" />
          </div>
          <p className="text-sm opacity-80">
            {client.leadSources[0]
              ? formatAddedSource(client.leadSources[0])
              : "Unknown source"}
          </p>
        </div>
      </ListItem>
    );
  }

  return (
    <Link href={href}>
      <ListItem className={className} active={isActive}>
        <div className="flex flex-col justify-between">
          <p className="font-semibold text-base">{client.name}</p>
          <p className="text-sm opacity-80">
            {client.leadReasons[0]
              ? formatAddedCause(client.leadReasons[0])
              : "No added reason"}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className=" flex items-center text-sm gap-1">
            <p className="">Added today, 3:16 PM</p>
            <Sparkles className="size-5 stroke-[1.5px]" />
          </div>
          <p className="text-sm opacity-80">
            {client.leadSources[0]
              ? formatAddedSource(client.leadSources[0])
              : "Unknown source"}
          </p>
        </div>
      </ListItem>
    </Link>
  );
}
