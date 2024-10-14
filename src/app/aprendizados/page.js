import store from "@/src/store";
import Card from "@/src/components/card/Card";
import { definePriorityClass } from "@/src/models/knowledgeModel";

export default function LearningPage() {
  const knowledges = store.knowledge;

  return (
    <div className="tab-pane-inner">
      <header className="tab-pane-header">
        <h1 className="heading">Aprendizados</h1>
        <p className="subtitle">Lorem ipsum dolor simet.</p>
      </header>
      <main className="tab-pane-content">
        {knowledges.map((knowledge, index) => {
          return (
            <div
              key={index}
              className={definePriorityClass(knowledge.priority)}
            >
              <Card
                media={knowledge.media}
                title={knowledge.title}
                subtitle={knowledge.subtitle}
                text={knowledge.text}
                action={knowledge.action}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}
