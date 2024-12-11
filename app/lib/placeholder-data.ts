// This file contains placeholder data that you'll be replacing with real data in the future.
// import data from store files!

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Bruna",
    email: "bruna.boeger@gmail.com",
    password: "123456",
    created_at: new Date().toISOString(),
  },
];

const profiles = [
  {
    id: 1,
    name: "Bruna",
    email: "bruna.boeger@gmail.com",
    phone: "(47) 99999-9999",
    image_url: "/profile/bruna.webp",
  },
];

const projects = [
  {
    id: 1,
    name: "Plataforma Simplifica+",
    description: "Descrição do projeto 1",
    image_url: "/projects/plataforma-simplificamais.webp",
    priority: true,
  },
  {
    id: 2,
    name: "Allp Aplicativo",
    description: "Descrição do projeto 2",
    image_url: "/projects/allp.webp",
    priority: true,
  },
  {
    id: 3,
    name: "Site Simplifica+",
    description: "Descrição do projeto 3",
    image_url: "/projects/site-simplificamais.webp",
    priority: false,
  },
  {
    id: 4,
    name: "Design System Plataforma Simplifica+",
    description: "Descrição do projeto 4",
    image_url: "/projects/design-system.webp",
    priority: false,
  },
];

const experiences = [
  {
    id: 1,
    name: "Adapcon Software e Inovação",
    description:
      "Em minha última experiência, pude fundir as habilidades de UX/UI Design com uma base sólida de programação, criando algo mais do que apenas projetos web – experiências únicas, em que a forma e função estão em perfeita harmonia.",
    role: "UI Designer",
    image_url: "/experiences/adapcon.webp",
    date_begin: new Date("2021-05-03").toISOString(),
    date_end: new Date("2024-08-06").toISOString(),
    current: false,
  },
  {
    id: 2,
    name: "Sonda I.T. Brasil",
    description:
      "Com a liberdade de criar um dashboard do zero, me encontrei em um laboratório pessoal. Cada decisão era um novo experimento, e pude combinar diferentes elementos do design e código. O resultado foi a mistura do melhor de dois mundos.",
    role: "UI Designer",
    image_url: "/experiences/sonda.webp",
    date_begin: new Date("2020-01-01").toISOString(),
    date_end: new Date("2020-12-31").toISOString(),
    current: false,
  },
  {
    id: 3,
    name: "Schulz S.A.",
    description:
      "Lörem ipsum åsat rede, nens nenas. Pojirat rening. Aheten syhyliga konfili sunade hikikomori. Unar belav prorade. Ress rek nynyrad att nyrågt. Eurovaläck filolog plus egode. Unar belav prorade.",
    role: "Designer Gráfico",
    image_url: "/experiences/shulz.webp",
    date_begin: new Date("2017-02-01").toISOString(),
    date_end: new Date("2017-11-30").toISOString(),
    current: false,
  },
  {
    id: 4,
    name: "Cubo Afinação de Empresas",
    description:
      "Em meu primeiro estágio, fui lançada em um laboratório de possibilidades: tive que misturar PHP (uma linguagem de programação que até então desconhecia) com Design para criar algo novo no ambiente administrativo da empresa.",
    role: "UI Designer",
    image_url: "/experiences/cubo.webp",
    date_begin: new Date("2016-02-01").toISOString(),
    date_end: new Date("2016-11-30").toISOString(),
    current: false,
  },
];

const studies = [
  {
    id: 1,
    name: "Design Gráfico",
    type: "Graduação",
    type_name: "Univille Universidade",
    description:
      "Lörem ipsum åsat rede, nens nenas. Pojirat rening. Aheten syhyliga konfili sunade hikikomori. Unar belav prorade. Ress rek nynyrad att nyrågt. Eurovaläck filolog plus egode.",
    image_url: "/studies/design.webp",
  },
  {
    id: 2,
    name: "Fotografia",
    type: "Tecnólogo",
    type_name: "Univille Universidade",
    description:
      "Lörem ipsum åsat rede, nens nenas. Pojirat rening. Aheten syhyliga konfili sunade hikikomori. Unar belav prorade. Ress rek nynyrad att nyrågt. Eurovaläck filolog plus egode.",
    image_url: "/studies/fotografia.webp",
  },
  {
    id: 3,
    name: "Programação",
    type: "Curso online",
    type_name: "Curso.dev",
    description:
      "Lörem ipsum åsat rede, nens nenas. Pojirat rening. Aheten syhyliga konfili sunade hikikomori. Unar belav prorade. Ress rek nynyrad att nyrågt. Eurovaläck filolog plus egode.",
    image_url: "/studies/programacao.webp",
  },
  {
    id: 4,
    name: "Next.js e React",
    type: "Curso online",
    type_name: "Next.js",
    description:
      "Lörem ipsum åsat rede, nens nenas. Pojirat rening. Aheten syhyliga konfili sunade hikikomori. Unar belav prorade. Ress rek nynyrad att nyrågt. Eurovaläck filolog plus egode.",
    image_url: "/studies/nextjs.webp",
  },
];

const abilities = [
  {
    id: 1,
    name: "React",
    image_url: "/abilities/react.webp",
    level: 6,
  },
  {
    id: 2,
    name: "Next.js",
    image_url: "/abilities/nextjs.webp",
    level: 6,
  },
  {
    id: 3,
    name: "HTML",
    image_url: "/abilities/html.webp",
    level: 9,
  },
  {
    id: 4,
    name: "SASS/CSS",
    image_url: "/abilities/sass.webp",
    level: 9,
  },
  {
    id: 5,
    name: "Vue",
    image_url: "/abilities/vue.webp",
    level: 8,
  },
  {
    id: 6,
    name: "Node.js",
    image_url: "/abilities/nodejs.webp",
    level: 4,
  },
  {
    id: 7,
    name: "PostgreSQL",
    image_url: "/abilities/postgres.webp",
    level: 5,
  },
];

export { users, profiles, projects, experiences, studies, abilities };
