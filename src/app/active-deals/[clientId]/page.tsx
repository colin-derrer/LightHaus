import ProfileSidecard from "@/components/client/ProfileSidecard";
import ProfileTopbar from "@/components/client/ProfileTopbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";
import {
  Pencil,
  TreesIcon,
  Baby,
  Phone,
  CircleDollarSign,
  AtSign,
  Mailbox,
  PhoneMissed,
  Calendar,
  Gauge,
  Users,
  PlusCircle,
} from "lucide-react";
import { redirect } from "next/navigation";

export default async function ClientPage({
  params,
}: {
  params: { clientId: string };
}) {
  const client = await prisma.client.findUnique({
    where: { id: params.clientId },
    include: { events: true },
  });
  if (!client) {
    redirect("/outreach");
  }
  return (
    <div className="grow flex flex-col">
      <ProfileTopbar client={client} />
      <div className="flex">
        <ProfileSidecard client={client} />
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
  );
}
