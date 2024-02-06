import { ClientData } from "@/lib/types";
import {
  Pencil,
  TreesIcon,
  Baby,
  Phone,
  CircleDollarSign,
  AtSign,
  Mailbox,
  PhoneMissed,
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

type ProfileSidecardProps = {
  className?: string;
  client: ClientData;
};

export default function ProfileSidecard({
  client,
  className,
}: ProfileSidecardProps) {
  return (
    <Card
      className={cn(
        "p-4 w-[450px] flex flex-col gap-2 m-2 relative bg-transparent",
        className
      )}
    >
      <div className="flex justify-between">
        <Pencil className="size-5 absolute top-4 right-4" />
      </div>
      <p className="text-xs text-muted-foreground font-medium">
        Autogenerated Biography
      </p>
      <p className="text-sm">{client.autogenDescription}</p>
      <Separator />
      <div className="grid grid-cols-2 mr-4 gap-4">
        <div className="col-span-1 ">
          <p className="text-xs text-muted-foreground font-medium">Age</p>
          <TreesIcon className="size-5 inline" />
          <span className="ml-1 text-sm">{client.age || "-"}</span>
        </div>
        <div className="col-span-1">
          <p className="text-xs text-muted-foreground font-medium">
            Family Members
          </p>
          <Baby className="size-5 inline" />
          <span className="ml-1 text-sm">{client.familyMembers || "-"}</span>
        </div>
        <div className="col-span-1">
          <p className="text-xs text-muted-foreground font-medium">
            Primary Phone Number
          </p>
          <Phone className="size-5 inline" />
          <span className="ml-1 text-sm">{client.phone || "-"}</span>
        </div>
        <div className="col-span-1">
          <p className="text-xs text-muted-foreground font-medium">
            Estimated Salary
          </p>
          <CircleDollarSign className="size-5 inline" />
          <span className="ml-1 text-sm">{client.estimatedSalary || "-"}</span>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-muted-foreground font-medium">
            Email Address
          </p>
          <AtSign className="size-5 inline" />
          <span className="ml-1 text-sm">{client.email || "-"}</span>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-muted-foreground font-medium">
            Home Address
          </p>
          <Mailbox className="size-5 inline" />
          <span className="ml-1 text-sm">{client.address || "-"}</span>
        </div>
      </div>
      <Separator />
      <div className="text-sm flex gap-2 items-center">
        {client.events.map((event) => {
          return (
            <div
              key={event.message + event.date}
              className="text-sm flex gap-2 items-center"
            >
              <PhoneMissed className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">{event.date}</p>
              <p className="">{event.message}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
