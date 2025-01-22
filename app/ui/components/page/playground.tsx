import store from "@/app/lib/store";
import Card from "@/app/ui/components/card";
import { font } from "@/app/ui/fonts";

export default function Playground() {
  return (
    <section id="playground" className="p-container flex-column">
      <h2 className={`${font.heading} mt-5 mb-6`}>Playground</h2>
      {store.projects.map((project, projectIndex) =>
        project.playground ? (
          <div key={projectIndex} className="masonry">
            {project.playground?.map((playgroundItem, playgroundItemIndex) => (
              <Card
                key={playgroundItemIndex}
                title={playgroundItem.title}
                text={playgroundItem.description}
                className="masonry-item hover-translateY-2"
              />
            ))}
          </div>
        ) : null
      )}
    </section>
  );
}
