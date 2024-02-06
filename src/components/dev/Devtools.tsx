"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sun, Moon, IceCream, TreePine, Computer } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export default function DevTools() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 m-4">
      <Card className="p-2 flex flex-col gap-2 w-48">
        <p className="text-xs font-bold uppercase">Dev tools</p>
        <p>Theme</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              {theme} theme
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <div className="flex gap-1 items-center">
                <Sun />
                <TreePine />
                <p>Light Mint</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("orange")}>
              <div className="flex gap-1 items-center">
                <Moon />
                <IceCream />
                <p>Dark Orange</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <div className="flex gap-1 items-center">
                <Moon />
                <TreePine />
                <p>Dark Mint</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <div className="flex gap-1 items-center">
                <Computer />
                <TreePine />
                <p>System Mint</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
