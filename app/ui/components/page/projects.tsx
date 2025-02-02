import store from "@/app/lib/store";
import Card from "@/app/ui/components/card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container-default p-container-top-0 z-index-20"
    >
      <>
        {store.projects.map((project, index) =>
          project.work ? (
            <div key={index} className="projects-list">
              {project.work?.map((workItem, index) => (
                <Card
                  key={index}
                  title={workItem.title}
                  text={workItem.description}
                  className="h-600x shadow-2 hover-translateY-2"
                  imageSrc={workItem.imageSrc}
                  navigateTo={workItem.navigateTo}
                />
              ))}
            </div>
          ) : null
        )}
      </>
    </section>
  );
}
