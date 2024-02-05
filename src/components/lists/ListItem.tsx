import { cn } from "@/lib/utils";

type ListItemProps = {
  className?: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

export default function ListItem({
  className,
  isActive,
  children,
}: ListItemProps) {
  return (
    <li
      className={cn(
        `flex justify-between px-4 py-2 hover:bg-primary/50 hover:rounded-lg cursor-pointer ${
          isActive
            ? "bg-primary rounded-lg text-primary-foreground"
            : "text-foreground"
        }`,
        className
      )}
    >
      {children}
    </li>
  );
}
