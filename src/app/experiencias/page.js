import store from "@/src/store";
import { definePriorityClass } from "@/src/models/knowledgeModel";
import Card from "@/src/components/card/Card";

const experiences = store.experiences;

export default function ExperiencesPage() {
  return (
    <div className="tab-pane-inner">
      <header className="tab-pane-header">
        <h1 className="heading">Experiências</h1>
        <p className="subtitle">
          Minha carreira tem sido uma experimentação contínua, quase como a de
          um alquimista tentando transformar chumbo em ouro.
        </p>
      </header>

      <main className="tab-pane-content">
        {experiences.map((job, index) => {
          return (
            <div key={index} className={definePriorityClass(job.priority)}>
              <Card
                media={job.media}
                title={job.title}
                subtitle={job.subtitle}
                text={job.text}
                action={job.action}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}
