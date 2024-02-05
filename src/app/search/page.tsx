import ProfileItem from "@/components/ClientListItem";
import TextDivider from "@/components/DividerBar";
import DividerBar from "@/components/DividerBar";
import BreakpointMargin from "@/components/layout/BreakpointMargin";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { clientList } from "@/demo/data";
import SearchForm from "./SearchForm";

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
    </PageShell>
  );
}
