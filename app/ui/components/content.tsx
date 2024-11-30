import Card from "@/app/ui/components/card";
import React from "react";
import Carousel from "@/app/ui/utility/Carousel";

export default function Content() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

  return (
    <>
      <div>
        {" "}
        <h1 style={{ textAlign: "center" }}>Carousel Estilo Tinder</h1>{" "}
        <Carousel items={items} key={1} />{" "}
      </div>
      {/* CAREER */}
      <section className="padding-container">
        <h2 className="heading">My carreer</h2>
        <p className="paragraph mt-4">
          I gratuated in Graphic Design from the university of Univille in 2017
          and have been working in this field since then as a UX/UI Designer.
          Recently, at the beggining of this year, I had the opportunity to play
          a role as a junior frontend developer and I pretty much loved it.
        </p>
        <h3 className="heading mt-6">Design as a profession</h3>
        <p className="paragraph mt-4">
          Design offered me the opportunity to learn deeply about user
          experiences and journeys, and how to manage them according to the
          users needs and feels. I was able to work with a wide range of tools
          and technologies, such as Figma, Photoshop, Illustrator and more.
        </p>
        <h3 className="heading mt-6">Frontend as a passion</h3>
        <p className="paragraph mt-4">
          Although I am passionate about creating new experiences through
          graphic designs, I must say that I have become enamoured with the
          possibility to build it with my bare hands - literally. Working in web
          development and being close to developers and their workspaces has
          made me acquire valuable knowledge which I can apply in any project.
          And what I have learned so far you can check in the section below.
        </p>
        <p className="paragraph mt-4">
          I am proud to say that I can turn ideas into life.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="padding-container">
        <h2 className="heading">Projects I am proud of</h2>
        <p className="paragraph mt-2">
          In all my experiences and projects I have gained valuable knowledge,
          both in the technical aspect and in soft skills.
        </p>
        <div className="md-row mt-6">
          <Card
            title="S+ Atendimento"
            text="A module communication agents can use to interact with and help clients."
            className="mb-4"
            image={{
              src: "/images/placeholder-2.png",
              alt: "University",
              width: 150,
              className: "h-auto object-cover",
            }}
          />
          <Card
            title="S+ Website"
            text="I graduated from the university of Univille in 2014."
            className="mtb-4"
            image={{
              src: "/images/placeholder-2.png",
              alt: "University",
              width: 150,
              className: "h-auto object-cover",
            }}
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="padding-container">
        <h2 className="heading">My goal is to keep learning</h2>
        <p className="paragraph mt-2">
          As I always say: knowledge is never enough. And the world of design
          and development is always evolving. So many new things are coming. And
          so many to explore.
        </p>
      </section>
    </>
  );
}
