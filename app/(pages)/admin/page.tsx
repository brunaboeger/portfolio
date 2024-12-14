import { fetchProfiles } from "@/app/lib/data";

export default function Page() {
  const tab = null;
  const profiles = fetchProfiles();
  console.log(profiles);

  return (
    <div>
      <header className="flex p-container align-center">
        <div className="logo mr-3" />
        <h3 className="heading">Hello, admin</h3>
      </header>
      <main className="md:flex">
        <aside className="p-container">
          <ul className="flex decoration-none">
            <li className="mr-3">Profile</li>
            <li className="mr-3">Projects</li>
            <li>Experiences</li>
          </ul>
        </aside>
        <section className="p-container">
          {tab !== "active" ? (
            <div>Home content</div>
          ) : (
              <div>Tab content</div>
            )
          }
        </section>
      </main>
    </div>
  )
}
