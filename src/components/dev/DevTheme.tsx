"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sun, TreePine, Moon, IceCream, Computer } from "lucide-react";
import { Button } from "../ui/button";

export default function DevTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
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
  );
}
