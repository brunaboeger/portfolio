import CardOutline from "@/app/ui/components/card-outline";
import Timeline from "@/app/ui/components/timeline";
import { font } from "@/app/ui/fonts";
import { TimelineProps } from "@/app/lib/types";

interface Props {
  items?: TimelineProps[];
}

export default function ProfileExperiences(listItems: Props) {
  return (
    <CardOutline>
      <div className="flex-column p-container">
        <h4 className={`${font.heading} text-light mb-4`}>Experiências</h4>
        <Timeline items={listItems.items} />
      </div>
    </CardOutline>
  );
}
