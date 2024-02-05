import { cn } from "@/lib/utils";
import NavElement from "./NavElement";
import { LayoutDashboard, RadioTower, Search, Wallet } from "lucide-react";
import { Separator } from "../ui/separator";
import PageMargin from "./BreakpointMargin";
import UserSwap from "../UserSwap";

export default function Navbar({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div className="h-12 border-b border-border bg-background">
      <PageMargin
        as={"nav"}
        className={cn(className, "flex justify-between items-center")}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="aspect-square size-8 bg-muted-foreground"></div>
            <div className="text-lg font-semibold">LightHaus</div>
          </div>
          <Separator orientation="vertical" className="h-8 w-[2px]" />
          <NavElement href="/" exact>
            <LayoutDashboard />
            Overview
          </NavElement>
          <NavElement href="active-deals">
            <Wallet />
            Active Deals
          </NavElement>
          <NavElement href="outreach">
            <RadioTower />
            Outreach
          </NavElement>
          <NavElement href="search">
            <Search />
            Search
          </NavElement>
        </div>
        <UserSwap />
      </PageMargin>
    </div>
  );
}
