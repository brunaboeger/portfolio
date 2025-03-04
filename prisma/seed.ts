const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.profile.deleteMany();

    const profile = await tx.profile.create({
      data: {
        name: "Bruna",
        role: "Designer & Developer",
        imageUrl: "/images/perfil.png",
        description:
          "Passionate about creating new experiences, my motivation comes from the desire to transform a simple idea into reality.",
      },
    });

    await tx.social.createMany({
      data: [
        {
          name: "Email",
          description: "Send and email",
          link: "mailto:bruna.boeger@gmail.com",
          imageUrl: "/social/email.svg",
          profileId: profile.id,
        },
        {
          name: "Github",
          description: "See my projects in code",
          link: "https://github.com/brunaboeger",
          imageUrl: "/social/github.svg",
          profileId: profile.id,
        },
        {
          name: "LinkedIn",
          description: "See my profile on LinkedIn",
          link: "https://www.linkedin.com/in/brunaboeger/",
          imageUrl: "/social/linkedin.svg",
          profileId: profile.id,
        },
        {
          name: "Curriculum",
          description: "Download my CV",
          link: "/docs/curriculo.pdf",
          imageUrl: "/social/curriculo.svg",
          profileId: profile.id,
        },
      ],
    });

    const adapconExperience = await tx.experience.create({
      data: {
        name: "Adapcon Software & Inovação",
        description: "UI Designer & Developer",
        startDate: new Date("2021-05-03T08:00:00"),
        endDate: new Date("2024-08-06T08:00:00"),
        link: "https://adapcon.com.br/",
        profileId: profile.id,
      },
    });

    await tx.project.createMany({
      data: [
        {
          name: "ALLP",
          slug: "/allp",
          description:
            "A platform that connects people, places and services to promote health and well-being.",
          coverImageSrc: "/images/projects/allp/cover.webp",
          thumbImageSrc: "/images/projects/allp/thumb.webp",
          screens: [
            "/images/projects/allp/screens/allp-tela-1.webp",
            "/images/projects/allp/screens/allp-tela-2.webp",
            "/images/projects/allp/screens/allp-tela-3.webp",
            "/images/projects/allp/screens/allp-tela-4.webp",
            "/images/projects/allp/screens/allp-tela-5.webp",
            "/images/projects/allp/screens/allp-tela-6.webp",
            "/images/projects/allp/screens/allp-tela-7.webp",
            "/images/projects/allp/screens/allp-tela-8.webp",
          ],
          profileId: profile.id,
          experienceId: adapconExperience.id,
        },
        {
          name: "Simplifica+",
          slug: "/simplificamais",
          description:
            "Automates company processes and provides autonomy for customers.",
          coverImageSrc: "/images/projects/simplifica/cover.webp",
          thumbImageSrc: "/images/projects/simplifica/thumb.webp",
          screens: [
            "/images/projects/simplifica/screens/simplifica-tela-1.webp",
            "/images/projects/simplifica/screens/simplifica-tela-2.webp",
            "/images/projects/simplifica/screens/simplifica-tela-3.webp",
            "/images/projects/simplifica/screens/simplifica-tela-4.webp",
          ],
          profileId: profile.id,
          experienceId: adapconExperience.id,
        },
      ],
    });

    await tx.experience.createMany({
      data: [
        {
          name: "Sonda I.T.",
          description: "UX/UI Designer",
          startDate: new Date("2019-02-01T08:00:00"),
          endDate: new Date("2019-12-01T08:00:00"),
          link: "https://www.sonda.com/en/home",
          profileId: profile.id,
        },
        {
          name: "Schulz S.A.",
          description: "Graphic Designer",
          startDate: new Date("2017-03-01T08:00:00"),
          endDate: new Date("2017-12-01T08:00:00"),
          link: "https://www.schulz.com.br/?lang=en",
          profileId: profile.id,
        },
        {
          name: "Cubo Afinação de Empresas",
          description: "Webdesigner",
          startDate: new Date("2016-02-01T08:00:00"),
          endDate: new Date("2016-11-01T08:00:00"),
          link: "https://re9c.com.br/",
          profileId: profile.id,
        },
      ],
    });

    await tx.skill.createMany({
      data: [
        {
          name: "React.js",
          description: "React.js",
          imageSrc: "/images/skills/reactjs.svg",
          profileId: profile.id,
        },
        {
          name: "Node.js",
          description: "Node.js",
          imageSrc: "/images/skills/nodejs.svg",
          profileId: profile.id,
        },
        {
          name: "Next.js",
          description: "Next.js",
          imageSrc: "/images/skills/nextjs.svg",
          profileId: profile.id,
        },
        {
          name: "JavaScript",
          description: "JavaScript",
          imageSrc: "/images/skills/javascript.svg",
          profileId: profile.id,
        },
        {
          name: "GIT",
          description: "GIT",
          imageSrc: "/images/skills/git.svg",
          profileId: profile.id,
        },
        {
          name: "Github",
          description: "Github",
          imageSrc: "/images/skills/git.svg",
          profileId: profile.id,
        },
        {
          name: "SASS",
          description: "SASS",
          imageSrc: "/images/skills/sass.svg",
          profileId: profile.id,
        },
        {
          name: "HTML",
          description: "HTML5",
          imageSrc: "/images/skills/html.svg",
          profileId: profile.id,
        },
        {
          name: "Docker",
          description: "Docker",
          imageSrc: "/images/skills/docker.svg",
          profileId: profile.id,
        },
        {
          name: "Vercel",
          description: "Vercel",
          imageSrc: "/images/skills/vercel.svg",
          profileId: profile.id,
        },
        {
          name: "Vue.js",
          description: "Vue.js",
          imageSrc: "/images/skills/vuejs.svg",
          profileId: profile.id,
        },
        {
          name: "Webflow",
          description: "Webflow",
          imageSrc: "/images/skills/webflow.svg",
          profileId: profile.id,
        },
        {
          name: "PostgreSQL",
          description: "PostgreSQL",
          imageSrc: "/images/skills/postgres.svg",
          profileId: profile.id,
        },
        {
          name: "PHP",
          description: "PHP",
          imageSrc: "/images/skills/php.svg",
          profileId: profile.id,
        },
        {
          name: "MySQL",
          description: "MySQL",
          imageSrc: "/images/skills/mysql.svg",
          profileId: profile.id,
        },
        {
          name: "Figma",
          description: "Figma",
          imageSrc: "/images/skills/figma.svg",
          profileId: profile.id,
        },
      ],
    });

    await tx.study.createMany({
      data: [
        {
          name: "Web Development",
          description: "Filipe Deschamps",
          startDate: new Date("2024-11-01T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "Photography",
          description: "Univille University",
          startDate: new Date("2017-02-01T08:00:00"),
          endDate: new Date("2021-06-01T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "Graphic Design",
          description: "Univille University",
          startDate: new Date("2014-02-01T08:00:00"),
          endDate: new Date("2017-12-01T08:00:00"),
          profileId: profile.id,
        },
      ],
    });

    await tx.certificate.createMany({
      data: [
        {
          name: "Full Stack Week",
          description: "Full Stack Club",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQEOzef96AwkhA/profile-treasury-image-shrink_800_800/B4DZVDzkrMGcAY-/0/1740599348493?e=1741662000&v=beta&t=9kAtJ8EiV60vj28gFlF95rQhsKLfxdpR4tNXi4INGkg",
          issueDate: new Date("2025-02-01T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "EF SET Certificate (C2 Proficient Level)",
          description: "EF Education First",
          link: "https://cert.efset.org/qFZVFc",
          issueDate: new Date("2023-07-21T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "How to Develop Your Emotional Intelligence",
          description: "LinkedIn",
          link: "https://www.linkedin.com/learning/certificates/9656bb2996b610a7c3327d9dc699e21a8dc181e8a126f6e99a7b2636a0074da2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF6luLVg7RZeJpHMIAe%2F3gw%3D%3D",
          issueDate: new Date("2022-03-07T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "Programming logic with JavaScript",
          description: "Caelum",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQG4teKgyD0WJQ/profile-treasury-image-shrink_800_800/B4DZVIOvKWHkAk-/0/1740673578129?e=1741662000&v=beta&t=SV1voO9StSTbbIiYcv04tUdEpc4fvr6Rpxe3w43mMnE",
          issueDate: new Date("2021-03-13T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "Prototyping and UX Part 1: High Fidelity with Adobe XD",
          description: "Alura",
          link: "https://cursos.alura.com.br/certificate/bruna-boeger/prototipagem-alta-fidelidade-adobe-xd",
          issueDate: new Date("2020-07-22T08:00:00"),
          profileId: profile.id,
        },
        {
          name: "HTML5 and CSS3 Part 4: Advancing CSS",
          description: "Alura",
          link: "https://cursos.alura.com.br/certificate/bruna-boeger/html5-css3-avancando-css",
          issueDate: new Date("2020-06-05T08:00:00"),
          profileId: profile.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
