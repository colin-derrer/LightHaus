import CalendarCard from "@/components/CalendarCard";
import GridTile from "@/components/GridTile";
import PageMargin from "@/components/layout/BreakpointMargin";
import TextDivider from "@/components/DividerBar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  CalendarPlus,
  Car,
  PackageOpen,
  SatelliteDish,
  Wallet,
} from "lucide-react";

//grid-rows-[200px_minmax(900px,_1fr)_100px]

export default function Home() {
  const tiles = [];
  for (let i = 0; i < 16; i++) {
    tiles.push(i);
  }

  return (
    <PageMargin className="border border-border grow p-4 grid grid-cols-12 auto-rows-min gap-x-4 rounded-lg">
      <Card className="col-span-4 justify-between aspect-square bg-transparent flex flex-col border-none">
        <TextDivider className="grow-0">
          <div className="">Frogamus’s Dashboard</div>
        </TextDivider>
        <div className="flex flex-col">
          <p className="text-muted-foreground text-xl font-medium">
            January 26th
          </p>
          <p className="text-5xl font-medium">10:21 AM</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center text-lg font-medium">
          <Card className="h-32 col-span-2 bg-gray-300 p-8 flex justify-between items-center text-primary-foreground">
            <p>36% | $84,600</p>
            <p>Monthly sales target $235,000</p>
          </Card>
          <Card className="h-32 col-span-2 bg-stone-700 p-8 flex justify-between items-center">
            <p>96.4%</p>
            <p>Customer satisfaction score</p>
          </Card>
          <Card className="h-32 bg-blue-600 flex justify-center items-center p-4">
            This month you’ve sold exterior detailing packages
          </Card>
          <Card className="h-32 bg-black p-4 flex justify-center items-center">
            6 months in a row of hitting your goals
          </Card>
        </div>
      </Card>
      <Card className="border-none bg-transparent col-span-4 grid grid-cols-4 grid-rows-4 gap-4 aspect-square">
        <GridTile className="bg-tempBlue text-tempBlue-foreground">
          <SatelliteDish className="size-10" />
          <div className="flex flex-col text-center pt-4 font-medium">
            <p className="">4 New</p>
            <p className="">Outreach</p>
          </div>
        </GridTile>
        <GridTile className="bg-muted text-muted-foreground">
          <PackageOpen className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">4</p>
            <p className="font-medium">Package Updates</p>
          </div>
        </GridTile>
        <GridTile className="bg-primary text-primary-foreground">
          <Car className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">Recent Vehicle</p>
            <p className="font-medium">4 Arrivals</p>
          </div>
        </GridTile>
        <GridTile className="">
          <Wallet className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">1</p>
            <p className="font-medium">Open Deal</p>
          </div>
        </GridTile>
        <div className="col-span-1 bg-transparent" />
        <GridTile className="bg-primary text-primary-foreground">
          <Wallet className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">1</p>
            <p className="font-medium">Open Deal</p>
          </div>
        </GridTile>
        <div className="col-span-1 bg-transparent" />
        <GridTile className="bg-primary text-primary-foreground">
          <CalendarPlus className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">View Showroom Visit Log</p>
          </div>
        </GridTile>
        <GridTile className=" col-span-3 row-span-2 aspect-auto flex flex-col p-2 gap-4">
          <p className="mt-4">New Vehicles This Week</p>
          <ScrollArea className="h-full w-full ">
            <div className="flex grow  h-full w-max gap-2">
              <Card className="h-52 min-w-48">hi</Card>
              <Card className="h-52 min-w-48">hi</Card>
              <Card className="h-52 min-w-48">hi</Card>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </GridTile>

        <GridTile className="bg-muted text-muted-foreground">
          <CalendarPlus className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">View Showroom Visit Log</p>
          </div>
        </GridTile>

        <GridTile className="bg-primary text-primary-foreground">
          <CalendarPlus className="size-10" />
          <div className="flex flex-col text-center pt-4">
            <p className="font-medium">View Showroom Visit Log</p>
          </div>
        </GridTile>
      </Card>
      <Card className="col-span-4 aspect-square">
        <CardHeader className="flex flex-row justify-between gap-2 items-center space-y-0">
          <TextDivider className="grow">
            <div className="">Memo</div>
          </TextDivider>
          <div className="text-muted-foreground underline font-medium">
            Modify an entry
          </div>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between gap-1 before:content-['*'] before:ml-0.5  ">
              <p className="grow text-sm">
                Follow up with Colby Llama about Koenigsegg Regera maintanence
                history Follow up with Colby Llama about Koenigsegg Regera
                maintanence history
              </p>
              <div className="flex flex-shrink flex-col">
                <p className="text-sm whitespace-nowrap">10:13 AM, Jan 29th</p>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  autodelete in 36 hours
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-1 before:content-['*'] before:ml-0.5  ">
              <p className="grow text-sm">
                Follow up with Colby Llama about Koenigsegg Regera maintanence
                history Follow up with Colby Llama about Koenigsegg Regera
                maintanence history
              </p>
              <div className="flex flex-shrink flex-col">
                <p className="text-sm whitespace-nowrap">10:13 AM, Jan 29th</p>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  autodelete in 36 hours
                </p>
              </div>
            </li>
            <li className="flex justify-between gap-1 before:content-['*'] before:ml-0.5  ">
              <p className="grow text-sm">
                Follow up with Colby Llama about Koenigsegg Regera maintanence
                history Follow up with Colby Llama about Koenigsegg Regera
                maintanence history
              </p>
              <div className="flex flex-shrink flex-col">
                <p className="text-sm whitespace-nowrap">10:13 AM, Jan 29th</p>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  autodelete in 36 hours
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="col-span-full flex flex-col gap-2 pt-6 bg-transparent border-transparent">
        <TextDivider>
          <div>Your week</div>
        </TextDivider>
        <ScrollArea className="h-full w-full whitespace-nowrap">
          <div className="flex h-full w-max gap-2 pb-4">
            {tiles.map((tile) => (
              <CalendarCard key={tile} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
    </PageMargin>
  );
}
