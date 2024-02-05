import ProfileItem from "@/components/ClientListItem";
import TextDivider from "@/components/DividerBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { clientList } from "@/demo/data";
import { cn } from "@/lib/utils";
import {
  AtSign,
  Baby,
  Calendar,
  CircleDollarSign,
  Gauge,
  Mail,
  Mailbox,
  Menu,
  Pencil,
  Phone,
  PhoneMissed,
  PlusCircle,
  TreesIcon,
  Users,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import PageShell from "@/components/layout/PageShell";

export default function ActiveDealsPage() {
  return (
    <PageShell className="flex">
      <div className="w-[550px] border-r p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <TextDivider>
            <span>Active Proposals</span>
            <span className="text-muted-foreground">{clientList.length}</span>
          </TextDivider>
          <Button className="ml-auto h-8">+ Add client</Button>
        </div>
        <Separator />
        <ScrollArea>
          <div className="pr-4 flex flex-col gap-1 max-h-[300px]">
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} isActive />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
          </div>
          <ScrollBar />
        </ScrollArea>
        <div className="flex gap-2 items-center pt-16">
          <TextDivider>
            <span>Active Deals</span>
            <span className="text-muted-foreground">{clientList.length}</span>
          </TextDivider>
          <Button className="ml-auto h-8">+ Add client</Button>
        </div>
        <ScrollArea>
          <div className="pr-4 flex flex-col gap-1 max-h-[300px]">
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} isActive />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
            <Separator />
            <ProfileItem client={clientList[0]} />
            <Separator />
            <ProfileItem client={clientList[1]} />
          </div>
          <ScrollBar />
        </ScrollArea>
      </div>
      <div className="grow flex flex-col">
        <div className="flex justify-between items-center bg-card border-b p-2">
          <div className="flex">
            <Button variant="link" className="text-primary">
              User Overview
            </Button>
            <Button variant="link" className="text-muted-foreground">
              Database
            </Button>
          </div>
          <div className="flex gap-1">
            <Button className="h-8" variant="outline">
              Email
            </Button>
            <Button className="h-8" variant="outline">
              Schedule meeting
            </Button>
            <Button className="h-8" variant="outline">
              Send info packet
            </Button>
            <Button className="h-8" variant="outline">
              Create Deal
            </Button>
            <Button className="h-8" variant="outline" size="icon">
              <Menu />
            </Button>
          </div>
        </div>
        <div className="flex">
          <Card className="m-2 p-4 max-w-[30%] flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-primary text-sm">
                Last contacted 3 hours ago via a phone call
              </p>
              <Pencil className="size-5" />
            </div>
            <h1 className="text-2xl font-semibold">Hanna Tyler</h1>
            <p className="text-sm">
              Hanna’s record shows they have a relation with John Uhmmu.
              Previously Hanna’s budget has been $100,000-$250,000. Hanna’s
              preferred language is English.
            </p>
            <Badge variant={"destructive"} className="max-w-fit">
              Lease ending soon
            </Badge>
            <Separator />
            <div className="grid grid-cols-2 mr-4 gap-4">
              <div className="col-span-1 ">
                <p className="text-xs text-muted-foreground font-semibold">
                  Age
                </p>
                <TreesIcon className="size-5 inline" />
                <span className="ml-1 text-sm">45 years old</span>
              </div>
              <div className="col-span-1">
                <p className="text-xs text-muted-foreground font-semibold">
                  Family Members
                </p>
                <Baby className="size-5 inline" />
                <span className="ml-1 text-sm">4 family members</span>
              </div>
              <div className="col-span-1">
                <p className="text-xs text-muted-foreground font-semibold">
                  Primary Phone Number
                </p>
                <Phone className="size-5 inline" />
                <span className="ml-1 text-sm">614-555-2020</span>
              </div>
              <div className="col-span-1">
                <p className="text-xs text-muted-foreground font-semibold">
                  Estimated Salary
                </p>
                <CircleDollarSign className="size-5 inline" />
                <span className="ml-1 text-sm">~$5,000,000</span>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground font-semibold">
                  Email Address
                </p>
                <AtSign className="size-5 inline" />
                <span className="ml-1 text-sm">hannauhmmu@gmail.com</span>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground font-semibold">
                  Home Address
                </p>
                <Mailbox className="size-5 inline" />
                <span className="ml-1 text-sm">
                  2 Address Rd. Columbus, Ohio
                </span>
              </div>
            </div>
            <Separator />
            <div className="text-sm flex gap-2 items-center">
              <PhoneMissed className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">Jan 10th</p>
              <p className="">Attempt to call; Did not pickup</p>
            </div>
            <div className="text-sm flex gap-2 items-center">
              <PhoneMissed className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">Jan 11th</p>
              <p className="">Attempt to call; Did not pickup</p>
            </div>
          </Card>
          <div className="grow m-2 flex flex-col gap-2">
            <div className="flex w-full h-24 gap-2">
              <div className="w-1/3 bg-yellow-300 flex flex-col gap-1 justify-center items-center text-black font-semibold rounded-lg">
                <Calendar className="size-8" />
                <p>Febuary 12th, 2024</p>
                <p className="text-sm font-normal">lease end date</p>
              </div>
              <div className="w-1/3 bg-orange-500 flex flex-col gap-1 justify-center items-center text-black font-semibold rounded-lg">
                <Gauge className="size-8" />
                <p>25.6k miles</p>
                <p className="text-sm font-normal">miles on current vehicle</p>
              </div>
              <div className="w-1/3 bg-teal-400 flex flex-col gap-1 justify-center items-center text-black font-semibold rounded-lg">
                <Users className="size-8" />
                <p>4 people</p>
                <p className="text-sm font-normal">family members</p>
              </div>
            </div>
            <Card className="p-4 flex flex-col gap-4 bg-transparent">
              <div className="flex gap-1 flex-col">
                <div className="text-sm font-semibold text-muted-foreground">
                  Power
                </div>
                <div className="flex gap-1">
                  <Badge variant={"outline"}>Gasoline</Badge>
                  <Badge variant={"default"}>Hybrid</Badge>
                  <Badge variant={"default"}>Electric</Badge>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="text-sm font-semibold text-muted-foreground">
                  Class
                </div>
                <div className="flex gap-1">
                  <Badge variant={"outline"}>Sports</Badge>
                  <Badge variant={"default"}>Business</Badge>
                  <Badge variant={"outline"}>Luxury</Badge>
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="text-sm font-semibold text-muted-foreground">
                  Style
                </div>
                <div className="flex gap-1">
                  <Badge variant={"outline"}>Coupe</Badge>
                  <Badge variant={"default"}>Sedan</Badge>
                  <Badge variant={"outline"}>Convertible</Badge>
                  <Badge variant={"outline"}>SUV</Badge>
                </div>
              </div>
              <Separator />
              <div className="flex gap-2 flex-col">
                <div className="text-sm font-semibold text-muted-foreground">
                  Notes
                </div>
                <ul className="list-disc list-inside pl-2">
                  <li>Works at JP Morgan Chase as a junior advisor</li>
                  <li>Loves the Cleveland Browns</li>
                  <li>Will not drive a purple vehicle</li>
                  <li>Needs space for booster seats</li>
                </ul>
                <div className="flex gap-2">
                  <Input placeholder="Add another note" />
                  <Button size={"icon"}>
                    <PlusCircle />
                  </Button>
                </div>
              </div>
              <Separator />
              <Card className="p-2">
                <h2 className="text-sm font-semibold text-muted-foreground">
                  Purchase History
                </h2>
                <div className="flex gap-2 flex-col">
                  <div>
                    <p className="text-sm">Purchased 2 vehicles</p>
                    <p className="text-sm">Last purchase: 2 years ago</p>
                  </div>
                  <div>
                    <p className="text-sm">Purchased 2 vehicles</p>
                    <p className="text-sm">Last purchase: 2 years ago</p>
                  </div>
                </div>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
