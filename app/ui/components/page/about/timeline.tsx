import { font } from "@/app/ui/fonts";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Timeline {
  id: number;
  role: string;
  company: string;
  date: string;
  imageSrc: string;
}

interface TimelineExtra {
  id: number;
  name: string;
}

interface TimelineProps {
  timeline: Timeline[];
  timelineExtra: TimelineExtra[];
}

export default function Timeline({ timeline, timelineExtra }: TimelineProps) {
  const border = (itemId = 0) => {
    if (itemId === 1) return null;
    return "border-top-gray-100";
  };

  return (
    <div className="p-container-top-0 flex-column gap-3">
      {timeline.map((timelineItem) => (
        <div
          key={timelineItem.id}
          className={`flex align-center gap-5 pt-3 ${border(
            timelineItem.id
          )} hover-translateY-2`}
        >
          <div
            className="flex align-center justify-center"
            style={{ width: 64, height: 64 }}
          >
            <Image
              src={
                timelineItem.imageSrc
                  ? timelineItem.imageSrc
                  : "/images/icons/cat.svg"
              }
              alt="work"
              width={64}
              height={64}
              className="round-full"
            />
          </div>
          <div className="flex-column gap-2">
            <p className={`${font.paragraph} text-bold`}>{timelineItem.role}</p>
            <small className={font.small}>{timelineItem.company}</small>
            <small className={font.small}>{timelineItem.date}</small>
          </div>
        </div>
      ))}

      {timelineExtra.length > 0 ? (
        <>
          <div className="p-container-tb">
            <h4 className={`${font.heading} text-light`}>Certificates</h4>
          </div>
          <div className="flex-column gap-3">
            {timelineExtra.map((timelineExtraItem) => (
              <div
                key={timelineExtraItem.id}
                className="flex align-center gap-3 p-3 hover-translateY-1 hover-bg-1 cursor-pointer round-1 border-gray-100"
              >
                <MusicalNoteIcon className="size-2" />
                <p>{timelineExtraItem.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
