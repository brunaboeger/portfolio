import Link from 'next/link';
import { AcademicCapIcon, BriefcaseIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function FloatingBar() {
  return (
    <div className="floating-bar">
      <div className="p-4 bg-blue-100 round-lg">
        <Link href="/projects">
          <AcademicCapIcon className="size-2" />
        </Link>
        <Link href="/experiences">
          <BriefcaseIcon className="size-2 mlr-4" />
        </Link>
        <Link href="/knowledge">
          <BookOpenIcon className="size-2" />
        </Link>
      </div>
    </div>
  )
}