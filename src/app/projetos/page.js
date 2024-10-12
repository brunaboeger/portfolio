import Card from "@/src/components/card/Card";
import store from "@/src/store/index";

const projects = store.projects;
const principalProjects = [];
const secondaryProjects = [];

projects.forEach((project) => {
  if (project.principal == true) {
    principalProjects.push(project);
  } else {
    secondaryProjects.push(project);
  }
});

export default function ProjectsPage() {
  return (
    <div className="tab-pane-inner">
      <header className="tab-pane-header">
        <h1 className="heading">Projetos</h1>
        <p className="subtitle">Lorem ipsum dolor simet.</p>
      </header>
      <main className="tab-pane-content">
        {principalProjects.map((project, index) => {
          return (
            <Card
              key={index}
              title={project.title}
              text={project.text}
              media={project.media}
              action={project.action}
            />
          );
        })}
      </main>
      <footer className="tab-pane-footer">
        {secondaryProjects.map((project, index) => {
          return (
            <Card
              key={index}
              subtitle={project.subtitle}
              text={project.text}
              media={project.media}
              action={project.action}
            />
          );
        })}
      </footer>
    </div>
  );
}
