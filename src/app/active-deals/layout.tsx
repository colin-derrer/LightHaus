import { getClients } from "@/actions/clients/clients";
import DividerBar from "@/components/DividerBar";
import ProfileItem from "@/components/client/ClientListItem";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";

export default async function ActiveDealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeProposalClients = await getClients({ phase: "ACTIVE_PROPOSAL" });
  const activeDealClients = await getClients({ phase: "ACTIVE_DEAL" });

  return (
    <PageShell className="flex grow">
      <div className="w-[550px] border-r p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <DividerBar className="">Active Proposals</DividerBar>
          <div className="flex gap-1">
            <Button variant={"secondary"} className="h-8">
              All
            </Button>
            <Button variant={"outline"} className="h-8 text-muted-foreground">
              Active Deals ({activeDealClients.length})
            </Button>
            <Button variant={"outline"} className="h-8 text-muted-foreground">
              Active Proposals ({activeProposalClients.length})
            </Button>
            <Button className="ml-auto h-8">+ Add client</Button>
          </div>
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground">Active Deals</p>
        <ScrollArea>
          <div className="pr-4 flex flex-col gap-1 max-h-[300px]">
            {activeDealClients.map((client) => (
              <div key={client.id}>
                <ProfileItem
                  client={client}
                  href={`/active-deals/${client.id}`}
                />
                <Separator />
              </div>
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
        <Separator />
        <p className="text-sm text-muted-foreground">Active Proposals</p>
        <ScrollArea>
          <div className="pr-4 flex flex-col gap-1 max-h-[300px]">
            {activeProposalClients.map((client) => (
              <div key={client.id}>
                <ProfileItem
                  client={client}
                  href={`/active-deals/${client.id}`}
                />
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
