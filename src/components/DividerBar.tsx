import { cn } from "@/lib/utils";

export default function TextDivider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `flex items-center grow gap-2 text-xl font-semibold`,
        className
      )}
    >
      {children}
      <div className="bg-primary h-1 grow rounded-tl-full rounded-br-full" />
    </div>
  );
}
