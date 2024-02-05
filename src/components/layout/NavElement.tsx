"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkTypes = {
  children: React.ReactNode;
  href: string;
  className?: string;
  exact?: boolean;
};

//Thanks to https://www.danstroot.com/snippets/nextjs-navlink-component for showing me how to use this!
export default function NavElement({
  children,
  exact = false,
  href,
  className,
  ...props
}: NavLinkTypes) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(`/${href}`);

  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground flex items-center gap-2 font-medium relative",
        isActive && "text-primary",
        className
      )}
      {...props}
    >
      {children}
      {isActive && (
        <div className="w-full bg-primary h-[2px] absolute bottom-0 translate-y-1"></div>
      )}
    </Link>
  );
}
