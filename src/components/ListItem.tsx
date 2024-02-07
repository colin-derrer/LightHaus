import { cn } from "@/lib/utils";
import React from "react";

type ListItemProps = {
  className?: string;
  active?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLLIElement>;

export default function ListItem({
  className,
  active,
  children,
  ...props
}: ListItemProps) {
  return (
    <li
      className={cn(
        `flex justify-between px-4 py-2 hover:bg-primary/60 hover:rounded-lg cursor-pointer`,
        active
          ? "bg-primary rounded-lg text-primary-foreground hover:bg-primary/80"
          : "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}
