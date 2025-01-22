import store from "@/app/lib/store";
import Card from "@/app/ui/components/card";

export default function Projects() {
  return (
    <section id="projects" className="p-container-top-0 z-index-20">
      <>
        {store.projects.map((project, index) =>
          project.work ? (
            <div key={index} className="flex gap-5 mobile:flex-column">
              {project.work?.map((workItem, index) => (
                <Card
                  key={index}
                  title={workItem.title}
                  text={workItem.description}
                  className="h-600x shadow-2 tablet:w-33 tablet:hover-width-50 mobile:hover-translateY-2"
                  border={workItem.border}
                  imageSrc={workItem.imageSrc}
                  imageTexture={workItem.imageTexture}
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
