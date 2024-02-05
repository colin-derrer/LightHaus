import { cn } from "@/lib/utils";
import { PackageOpen } from "lucide-react";

type DashboardTileProps = {
  children?: React.ReactNode;
  className?: string;
  widthSpan?: number;
  heightSpan?: number;
  icon?: React.ComponentType<{ className?: string }>;
};

export default function DashboardTile({
  children,
  className,
  widthSpan = 1,
  heightSpan = 1,
  icon: Icon,
}: DashboardTileProps) {
  const size = `col-span-${widthSpan} row-span-${heightSpan}`;
  return (
    <div
      className={cn(
        `${size} bg-card border border-border rounded-lg aspect-square flex flex-col items-center justify-center p-2 min-h-0 min-w-0`,
        className
      )}
    >
      {Icon && <Icon className="w-10 h-10" />}
      {children}
    </div>
  );
}
