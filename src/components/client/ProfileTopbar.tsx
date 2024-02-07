import { Badge } from "../ui/badge";
import { CalendarPlus, HeartHandshake, Mail, Menu, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Client, ClientEvent } from "@prisma/client";
import { formatAddedCause } from "@/lib/formatters/client";

type ProfileTopbarProps = {
  className?: string;
  client: Client & {
    events: ClientEvent[];
  };
};

export default function ProfileTopbar({
  className,
  client,
}: ProfileTopbarProps) {
  const latestEvent = client.events[client.events.length - 1] ?? null;
  return (
    <div className=" flex justify-between p-4 bg-card border-b">
      <div className="flex flex-col gap-1">
        <p className="text-green-500 text-sm font-medium">
          {latestEvent
            ? `${latestEvent.message} at ${latestEvent.eventDate.getUTCDate()}`
            : "No recent activity"}
        </p>
        <h2 className="text-3xl font-medium">{client.name}</h2>
        <div className="flex gap-1">
          {client.leadReasons.map((cause) => (
            <Badge
              key={cause}
              variant={"destructive"}
              className="max-w-min whitespace-nowrap"
            >
              {formatAddedCause(cause)}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex gap-1">
        <Button className="h-8 gap-1" variant="secondary">
          Email
          <Mail className="size-5" />
        </Button>
        <Button className="h-8 gap-1" variant="secondary">
          Schedule meeting
          <CalendarPlus className="size-5" />
        </Button>
        <Button className="h-8 gap-1" variant="secondary">
          Send info packet
          <Send className="size-5" />
        </Button>
        <Button className="h-8 gap-1" variant={"secondary"}>
          <HeartHandshake className="size-5" />
          Open deal screen
        </Button>
        <Button className="h-8" variant="secondary" size="icon">
          <Menu />
        </Button>
      </div>
    </div>
  );
}
