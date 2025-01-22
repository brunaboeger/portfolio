import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Navigation({
  nextLink,
  backLink,
}: {
  nextLink?: string;
  backLink?: string;
}) {
  return (
    <section className="navigation position-fixed right-0 z-index-20">
      <div className="p-container flex-column gap-5">
        <Link href={backLink || "/"} className="flex align-center gap-2">
          <ArrowLeftIcon className="size-1" /> Back to home
        </Link>
        <Link href={nextLink || "/"} className="flex align-center gap-2">
          Next project <ArrowRightIcon className="size-1" />
        </Link>
      </div>
    </section>
  );
}
