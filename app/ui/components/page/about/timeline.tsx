import { font } from "@/app/ui/fonts";
import Image from "next/image";

interface Timeline {
  id: number;
  role: string;
  company: string;
  date: string;
}

interface TimelineProps {
  timeline: Timeline[];
}

export default function Timeline({ timeline }: TimelineProps) {
  const border = (itemId = 0) => {
    if (itemId === 1) return;
    return "border-top-gray-100";
  };

  return (
    <div className="p-container-top-0 flex-column gap-3">
      {timeline.map((timelineItem) => (
        <div
          key={timelineItem.id}
          className={`flex gap-5 pt-3 ${border(
            timelineItem.id
          )} hover-translateY-2`}
        >
          <div
            className="flex align-center justify-center bg-orange-400 round-2"
            style={{ width: 74 }}
          >
            <Image
              src="/images/icons/cat.svg"
              alt="work"
              width={40}
              height={40}
            />
          </div>
          <div className="flex-column gap-2">
            <p className={`${font.paragraph} text-bold`}>{timelineItem.role}</p>
            <small className={font.small}>{timelineItem.company}</small>
            <small className={font.small}>{timelineItem.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
