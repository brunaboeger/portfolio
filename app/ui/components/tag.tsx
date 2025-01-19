import { font } from "@/app/ui/fonts";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="tag round-5">
      <p className={`${font.paragraph} text-small`}>{children}</p>
    </div>
  );
}
