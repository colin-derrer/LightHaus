import { cn } from "@/lib/utils";

export default function FormLabelBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grow rounded-tl-full rounded-br-full bg-muted h-[2px] mr-2",
        className
      )}
    />
  );
}
