import CardOutline from "@/app/ui/components/card-outline";
import Timeline from "@/app/ui/components/timeline";
import { font } from "@/app/ui/fonts";
import { TimelineProps } from "@/app/lib/types";

interface Props {
  items?: TimelineProps[];
}

export default function ProfileEducation(listItems: Props) {
  const educationList: TimelineProps[] = [];
  const certificatesList: TimelineProps[] = [];

  listItems.items?.forEach((item) => {
    if (item) {
      if (item.type === "course") {
        educationList.push(item);
      } else if (item.type === "certificate") {
        certificatesList.push(item);
      }
    }
  });

  return (
    <CardOutline>
      <div className="flex-column p-container">
        {educationList.length > 0 && (
          <div>
            <h4 className={`${font.heading} text-light mb-4`}>Educação</h4>
            <Timeline items={educationList} />
          </div>
        )}
        {certificatesList.length > 0 && (
          <div className="mt-6">
            <h4 className={`${font.heading} text-light mb-4`}>Certificados</h4>
            <Timeline items={certificatesList} />
          </div>
        )}
      </div>
    </CardOutline>
  );
}
