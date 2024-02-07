"use client";

import { devResetAndSeed } from "@/actions/dev/seed";
import { Button } from "../ui/button";

export default function DevResetAndSeedButton() {
  return (
    <Button
      className="w-full"
      variant={"destructive"}
      onClick={() => devResetAndSeed()}
    >
      Reset and reseed
    </Button>
  );
}
