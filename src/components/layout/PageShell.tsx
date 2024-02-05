import { cn } from "@/lib/utils";
import BreakpointMargin from "./BreakpointMargin";

export default function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <BreakpointMargin className={cn(`border grow rounded-lg`, className)}>
      {children}
    </BreakpointMargin>
  );
}
