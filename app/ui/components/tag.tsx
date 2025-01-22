import { font } from "@/app/ui/fonts";

export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`tag round-5 ${className}`}>
      <p className={`${font.paragraph} text-small`}>{children}</p>
    </div>
  );
}
