import DividerBar from "@/components/DividerBar";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SearchForm from "./SearchForm";
import {
  Calendar,
  ChevronsUpDown,
  Circle,
  Gauge,
  MapPin,
  MapPinned,
  Menu,
} from "lucide-react";
import ListItem from "@/components/lists/ListItem";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { vehiclesList } from "@/demo/data";
import CarListItem from "@/components/CarListItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function SearchPage() {
  return (
    <PageShell className="flex">
      <div className="w-[550px] border-r p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <DividerBar className="">Search</DividerBar>
          <div className="flex gap-1">
            <Button variant={"secondary"} className="h-8">
              Vehicles
            </Button>
            <Button variant={"outline"} className="h-8 text-muted-foreground">
              Clients
            </Button>
          </div>
        </div>
        <Separator />
        <SearchForm />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center bg-card border-b p-2">
          <div className="flex">
            <Button variant="link" className="text-primary">
              Vehicles matched
            </Button>
            <Button variant="link" className="text-muted-foreground">
              Placeholder
            </Button>
          </div>
          <div className="flex gap-1">
            <Button className="h-8" variant="outline">
              Send to CRM
            </Button>
            <Button className="h-8" variant="outline" size="icon">
              <Menu />
            </Button>
          </div>
        </div>
        <div className="p-2 flex gap-2">
          <div className="p-2 flex-grow">
            <ScrollArea>
              <div className="flex flex-col gap-1 max-h-[1000px] pr-4">
                <CarListItem active vehicle={vehiclesList[0]} />
                <Separator />
                {vehiclesList.map((vehicle) => {
                  return (
                    <div key={vehicle.id}>
                      <CarListItem vehicle={vehicle} />
                      <Separator />
                    </div>
                  );
                })}
              </div>
              <ScrollBar />
            </ScrollArea>
          </div>
          <Card className="w-[550px] flex flex-col gap-2 p-4">
            <div className="bg-slate-500 w-full aspect-video rounded-lg" />
            <div className="w-full justify-between align-top flex">
              <p className="text-2xl">Koenigsegg Jesko Attack</p>
              <p className="text-2xl">$4,375,000</p>
            </div>
            <div className="text-sm flex justify-between">
              <div className="flex items-center gap-2">
                <Gauge className="size-5" />
                <p>New: 2 miles</p>
              </div>
              <p className="text-muted-foreground">Stock: 234-4236</p>
              <p className="text-muted-foreground">Vin: 19238DHBS94FHAW</p>
            </div>
            <Separator />
            <div className="grid grid-cols-2 py-1">
              <div className="flex flex-col">
                <div className="text-muted-foreground flex gap-1 items-center text-sm">
                  <MapPinned className="size-5" />
                  <p>Current Location</p>
                </div>
                <p>In transit- Dealership 2</p>
              </div>
              <div className="flex flex-col">
                <div className="text-muted-foreground flex gap-1 items-center text-sm">
                  <Calendar className="size-5" />
                  <p>Added Date</p>
                </div>
                <p>0 days ago</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-1">
              <h2 className="col-span-2 text-lg">Basic Info</h2>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>EXTERIOR</p>
                <p>Spa Yellow</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>DRIVETRAIN</p>
                <p>FWD</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>INTERIOR</p>
                <p>Ebony</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>TRANSMISSION</p>
                <p>10-Speed Auto</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>ENGINE</p>
                <p>2.0L DOHC</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex justify-between border-b">
                <p>FUEL EFFICIENCY</p>
                <p>22 City / 31 Hwy</p>
              </div>
            </div>
            <h2 className="text-lg">Features</h2>
            <div className="grid grid-cols-4 grid-rows-4 h-96 gap-x-2 gap-y-2 py-1">
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
              <div className="col-span-1 text-sm text-muted-foreground flex flex-col p-2 row-span-1 border rounded-sm text-center items-center justify-center">
                <Circle />
                <p>Adaptive Cruise Control</p>
              </div>
            </div>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between flex"
                >
                  <p>Extra info</p>
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-2 my-2 border-l">
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
