import { cn } from "@/lib/utils";

type ListItemProps = {
  className?: string;
  active?: boolean;
  children?: React.ReactNode;
};

export default function ListItem({
  className,
  active,
  children,
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
    >
      {children}
    </li>
  );
}
