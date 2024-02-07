import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useTheme } from "next-themes";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { devResetAndSeed } from "@/actions/dev/seed";
import DevTheme from "./DevTheme";
import DevUsersList from "./DevUsersList";
import DevResetAndSeedButton from "./DevResetAndSeedButton";

export default async function DevTools() {
  return (
    <div className="absolute top-0 left-0 m-4">
      <Card className="p-2 flex flex-col gap-2 w-48">
        <p className="text-xs font-bold uppercase">Dev tools</p>
        <p>Theme</p>
        <DevTheme />
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              <p>Typography</p>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 border-l">
            <Typography />
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              <p>Users</p>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 border-l">
            <DevUsersList />
          </CollapsibleContent>
        </Collapsible>
        <DevResetAndSeedButton />
      </Card>
    </div>
  );
}

function Typography() {
  return (
    <div>
      <p className="font-normal">Font baseline</p>
      <p className="font-medium">Font medium</p>
      <p className="font-semibold">Font Semibold</p>
      <p className="font-bold">Font Bold</p>
    </div>
  );
}
