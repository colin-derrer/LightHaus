import { ClientData } from "@/lib/types";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { CalendarPlus, HeartHandshake, Mail, Menu, Send } from "lucide-react";
import { Button } from "../ui/button";

type ProfileTopbarProps = {
  className?: string;
  client: ClientData;
};

export default function ProfileTopbar({
  className,
  client,
}: ProfileTopbarProps) {
  const latestEvent = client.events[-1] || {
    message: "No recent event",
    date: "Never",
    type: null,
  };

  return (
    <div className="h-32 flex justify-between p-4 bg-card border-b">
      <div className="flex flex-col justify-between">
        <p className="text-green-500 text-sm font-medium">
          {latestEvent.message} at {latestEvent.date}
        </p>
        <h2 className="text-3xl font-medium">{client.name}</h2>
        {client.addedCause.map((cause) => (
          <Badge key={cause} variant={"destructive"} className="max-w-min">
            {cause}
          </Badge>
        ))}
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
