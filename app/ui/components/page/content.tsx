import React from "react";
import Card from "@/app/ui/components/card";
import store from "@/app/lib/store";
import { font } from "@/app/ui/fonts";

export default function Content() {
  return (
    <>
      {/* PROJECTS */}
      <section
        id="projects"
        className="grid-area:projects p-container-top-0 position-relative z-index-10"
      >
        <>
          {store.projects.map((project, index) => (
            <div key={index} className="grid-template-columns-3 gap-5">
              {project.work?.map((workItem, index) => (
                <Card
                  key={index}
                  title={workItem.title}
                  text={workItem.description}
                  className="h-600x"
                  border={workItem.border}
                  imageSrc={workItem.imageSrc}
                  imageTexture={workItem.imageTexture}
                  navigateTo={workItem.navigateTo}
                />
              ))}
            </div>
          ))}
        </>
      </section>

      {/* PLAYGROUND */}
      <section
        id="playground"
        className="grid-area:playground p-container-top-0 z-index-10 grid-template-columns-3 gap-5"
      >
        <h2 className={font.heading}>Playground</h2>
        <div className="grid-column:2-3 gap-5">
          {store.projects.map((project, index) => (
            <div
              className="grid-template-columns-2 grid-column:2-3 gap-5"
              key={index}
            >
              {project.playground?.map((playgroundItem, index) => (
                <Card
                  key={index}
                  title={playgroundItem.title}
                  text={playgroundItem.description}
                  border={playgroundItem.border}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="grid-area:about grid-template-columns-3 p-container z-index-10"
      >
        <h2 className={font.heading}>About me</h2>
        <div className="grid-column:2-3 grid-template-columns-2 gap-5">
          <div className="border-gray-600 p-container round-3">
            <p className="paragraph">
              I gratuated in Graphic Design from the university of Univille in
              2017, and have been working in this field since then as a UX/UI
              Designer. Recently, at the beggining of this year (2024), I had
              the opportunity to play a role as a junior frontend developer and
              I pretty much loved it.
            </p>
          </div>
          <div className="border-gray-600 p-container round-3">
            Experiências
          </div>
        </div>
      </section>

      {/* SKILLS */}
      {/* <section className="p-container">
        <h2 className={font.heading}>My goal is to keep learning</h2>
        <p className="paragraph mt-2">
          As I always say: knowledge is never enough. And the world of design
          and development is always evolving. So many new things are coming. And
          so many to explore.
        </p>
        <div className="mt-6">
          Essential toolbox - Figma, VSCode, Spotify and more... logos
        </div>
      </section> */}
    </>
  );
}
