import { cn } from "@/lib/utils";

export default function BreakpointMargin<C extends React.ElementType>({
  className,
  children,
  as,
}: {
  className?: string;
  as?: C;
  children?: React.ReactNode;
}) {
  const Component = as || "div";
  return (
    <Component className={cn("w-[1920px] mx-auto ", className)}>
      {children}
    </Component>
  );
}
