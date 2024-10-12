import store from "@/src/store";

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
            <Card
              key={index}
              media={job.media}
              title={job.title}
              text={job.text}
              action={job.action}
            />
          );
        })}
      </main>
    </div>
  );
}
