import { Gauge, MapPin, Calendar } from "lucide-react";
import ListItem from "./ListItem";
import { cn } from "@/lib/utils";

export type CarListItemProps = {
  active?: boolean;
  className?: string;
  vehicle: {
    name: string;
    id: string;
    price: number;
    mileage: number | null;
    location: string;
    added: string;
  };
};

export default function CarListItem({
  className,
  vehicle,
  active = false,
}: CarListItemProps) {
  return (
    <ListItem className={cn("h-20 ", className)} active={active}>
      <div className="flex gap-2">
        <div className="h-full aspect-video bg-card rounded-sm" />
        <div className="flex flex-col justify-between whitespace-nowrap py-1">
          <p className="text-lg">{vehicle.name}</p>
          <div className="flex gap-4 items-center opacity-70">
            <p>${vehicle.price}</p>
            <div className="flex items-center gap-1">
              <Gauge className="size-5" />
              <p>{vehicle.mileage} miles</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-between items-end py-1 ${
          !active && "opacity-70"
        }`}
      >
        <div className="flex gap-1 items-center">
          <MapPin className="size-5" />
          <p>{vehicle.location}</p>
        </div>
        <div className="flex gap-1 items-center">
          <Calendar className="size-5" />
          <p>{vehicle.added}</p>
        </div>
      </div>
    </ListItem>
  );
}
