import PageShell from "@/components/layout/PageShell";
import Link from "next/dist/client/link";

export default function NotFound() {
  return (
    <PageShell className="flex flex-col items-center">
      <p>404 - Not Found</p>
      <Link href="/">Return to home.</Link>
    </PageShell>
  );
}
