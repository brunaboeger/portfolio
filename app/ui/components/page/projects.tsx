import store from "@/app/lib/store";
import Card from "@/app/ui/components/card";

export default function Projects() {
  const menuLinkName = store.menuLinks[1].navigateTo.text;

  return (
    <section
      id={menuLinkName}
      className="container-default p-container-top-0 z-index-20"
    >
      <>
        {store.projects.map((project, index) =>
          project.work ? (
            <div key={index} className="flex-column gap-5">
              {project.work?.map((workItem, index) => (
                <Card
                  key={index}
                  title={workItem.title}
                  text={workItem.description}
                  className="shadow-2 hover-translateY-2"
                  image={workItem.image}
                  navigateTo={workItem.navigate}
                />
              ))}
            </div>
          ) : null
        )}
      </>
    </section>
  );
}
