import store from "@/src/store/index";
import Card from "@/src/components/card/Card";
import { definePriorityClass } from "@/src/models/knowledgeModel";

export default function AbilitiesPage() {
  const abilities = store.abilities;
  const sortedAbilities = abilities.sort((a, b) => a.order - b.order);

  return (
    <div className="tab-pane-inner">
      <header className="tab-pane-header">
        <h1 className="heading">Habilidades</h1>
        <p className="subtitle">
          Minhas habilidades consistem principalmente nas áreas de{" "}
          <span className="text-highlight">UX/UI Design </span>e{" "}
          <span className="text-highlight">Desenvolvimento Web</span>.
        </p>
      </header>
      <main className="tab-pane-content-wider">
        {sortedAbilities.map((ability, index) => {
          return (
            <div key={index} className={definePriorityClass(ability.priority)}>
              <Card media={ability.media} subtitle={ability.subtitle} />
            </div>
          );
        })}
      </main>
    </div>
  );
}
