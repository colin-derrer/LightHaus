"use client";

import { setToken } from "@/actions/auth/client";
import { Button } from "../ui/button";

export default function UpdateUserButton({
  userId,
  displayName,
}: {
  userId: string;
  displayName: string;
}) {
  return (
    <Button
      className="w-full truncate p-2 text-xs"
      variant={"outline"}
      onClick={() => setToken(userId)}
    >
      {displayName}
    </Button>
  );
}
