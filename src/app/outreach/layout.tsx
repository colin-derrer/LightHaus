import { getClients } from "@/actions/clients/clients";
import DividerBar from "@/components/DividerBar";
import ProfileItem from "@/components/client/ClientListItem";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default async function OutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clients = await getClients();

  return (
    <PageShell className="flex grow">
      <div className="w-[550px] border-r p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <DividerBar className="">Outreach</DividerBar>
          <div className="flex gap-1">
            <Button variant={"secondary"} className="h-8">
              All
            </Button>
            <Button variant={"outline"} className="h-8 text-muted-foreground">
              Leads (12)
            </Button>
            <Button variant={"outline"} className="h-8 text-muted-foreground">
              Follow Ups (4)
            </Button>
            <Button className="ml-auto h-8">+ Add client</Button>
          </div>
        </div>
        <Separator />
        <ScrollArea>
          <div className="pr-4 flex flex-col gap-1 max-h-[600px]">
            {clients.map((client) => (
              <div key={client.id}>
                <ProfileItem client={client} href={`/outreach/${client.id}`} />
                <Separator />
              </div>
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
      </div>
      {children}
    </PageShell>
  );
}
