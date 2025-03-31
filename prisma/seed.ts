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
          slug: "allp",
          description:
            "A platform that connects people, places and services to promote health and well-being.",
          coverImageSrc: ["/images/projects/allp/cover.webp"],
          thumbImageSrc: ["/images/projects/allp/thumb.webp"],
          screens: [
            "/images/projects/allp/screens/screen-1.webp",
            "/images/projects/allp/screens/screen-2.webp",
            "/images/projects/allp/screens/screen-3.webp",
            "/images/projects/allp/screens/screen-4.webp",
            "/images/projects/allp/screens/screen-5.webp",
            "/images/projects/allp/screens/screen-6.webp",
            "/images/projects/allp/screens/screen-7.webp",
            "/images/projects/allp/screens/screen-8.webp",
          ],
          profileId: profile.id,
          experienceId: adapconExperience.id,
        },
        {
          name: "Simplifica+",
          slug: "simplificamais",
          description:
            "Automates company processes and provides autonomy for customers.",
          coverImageSrc: ["/images/projects/simplifica/cover.webp"],
          thumbImageSrc: ["/images/projects/simplifica/thumb.webp"],
          screens: [
            "/images/projects/simplifica/screens/screen-1.webp",
            "/images/projects/simplifica/screens/screen-2.webp",
            "/images/projects/simplifica/screens/screen-3.webp",
            "/images/projects/simplifica/screens/screen-4.webp",
          ],
          profileId: profile.id,
          experienceId: adapconExperience.id,
        },
      ],
    });

    await tx.projectContent.createMany({
      data: [
        {
          projectId: "ee91fcfb-15d9-4e58-8cd8-84bd1a272acf",
          experienceId: "609ea6cc-dbb3-4598-869e-d764041e8c5d",
          client: "Adapcon Software & Inovação",
          duration: "2 months (2022)",
          role: "UX/UI Designer",
          about: "",
          aboutLinks: [],
          insights:
            "## Quadras disponíveis, baixa adesãoQuando comecei a trabalhar no ALLP, percebi que havia um grande problema no **agendamento de quadras esportivas** e serviços relacionados. Muitos locais ainda utilizavam métodos manuais para gerenciar reservas, causando conflitos de horário, falta de organização e dificultando a experiência dos usuários. A ideia do ALLP era mudar esse cenário, criando uma plataforma digital intuitiva que facilitasse o processo para jogadores e prestadores de serviço.",
          insightsImages: [],
          challenges:
            "## ChallengesO primeiro desafio foi estruturar um **sistema de reservas eficiente**. Precisávamos garantir que os usuários pudessem visualizar rapidamente os horários disponíveis, escolher a melhor opção e confirmar a reserva sem complicação. Além disso, era essencial que os donos das quadras e outros prestadores de serviço tivessem controle total sobre suas disponibilidades e pudessem gerenciar os agendamentos de forma prática.Na parte técnica, trabalhar com **atualizações em tempo real** foi um grande desafio. Como garantir que dois usuários não reservassem o mesmo horário simultaneamente? Para resolver isso, implementei um sistema de bloqueio temporário de horários enquanto o usuário finalizava a reserva, garantindo que não houvesse conflitos. Além disso, utilizamos **WebSockets** para sincronizar informações instantaneamente entre usuários e administradores.O design do aplicativo também exigiu uma abordagem cuidadosa. Queria que a experiência fosse fluida, com uma **interface intuitiva e acessível** para diferentes públicos. Adotei um design moderno, com **navegação simplificada**, cores que transmitissem dinamismo e telas responsivas para diferentes tamanhos de dispositivos. Tudo foi pensado para que, em poucos cliques, qualquer pessoa conseguisse agendar uma quadra ou um serviço sem dificuldades.Outro aspecto fundamental foi a **integração de pagamentos**. Implementamos um sistema seguro, permitindo que os usuários realizassem pagamentos diretamente pelo aplicativo. Isso eliminou a necessidade de transações em dinheiro e ajudou a profissionalizar o serviço oferecido pelos estabelecimentos. Além disso, criamos um sistema de notificações para lembrar os usuários sobre suas reservas, reduzindo o número de cancelamentos de última hora.",
          challengesImages: [],
          results:
            "## ResultadosDurante os testes, percebemos que muitos usuários queriam mais do que apenas reservar quadras; eles também buscavam outros serviços complementares, como professores particulares, personal trainers e aluguel de equipamentos esportivos. Assim, expandimos a plataforma para incluir esses serviços, tornando o ALLP um hub completo para esportistas.Após o lançamento, os resultados foram imediatos. Os estabelecimentos passaram a ter um fluxo mais organizado, reduzindo a taxa de no-shows e melhorando a experiência dos clientes. Os usuários, por sua vez, aprovaram a praticidade do aplicativo, e a adoção cresceu rapidamente entre grupos esportivos que antes enfrentavam dificuldades para encontrar horários disponíveis.O ALLP me ensinou muito sobre experiência do usuário, escalabilidade e integração de sistemas em tempo real. Mais do que um aplicativo de reservas, ele se tornou uma solução que aproxima esportistas e serviços, simplificando a logística e incentivando a prática esportiva. Ver o impacto real do projeto foi, sem dúvida, uma das partes mais gratificantes desse desafio.",
          resultsImages: [],
        },
        {
          projectId: "ee91fcfb-15d9-4e58-8cd8-84bd1a272acf",
          experienceId: "609ea6cc-dbb3-4598-869e-d764041e8c5d",
          client: "Adapcon Software & Inovação",
          duration: "2 months (2022)",
          role: "UX/UI Designer",
          about: "",
          aboutLinks: [],
          insights:
            "## Tudo começou com uma dor recorrente no mundo B2B: processos engessados, interfaces confusas e usuários perdidos em meio a um mar de informações. Quando iniciei o desenvolvimento do Simplifica+, o objetivo era claro: criar um portal que tornasse a gestão mais ágil e intuitiva, sem que os clientes precisassem de um manual para usar a plataforma.",
          insightsImages: [],
          challenges:
            "## O primeiro desafio apareceu logo na fase de planejamento. Como estruturar um sistema que atendesse às necessidades específicas dos clientes sem perder a escalabilidade? Mergulhei em pesquisas com usuários, estudei concorrentes e defini um fluxo que equilibrasse eficiência e facilidade de uso. Foi aqui que percebi a importância de um design centrado no usuário, algo que norteou todas as decisões do projeto. Na parte técnica, precisei lidar com a complexidade das integrações. Muitos clientes utilizavam sistemas internos legados, e garantir a compatibilidade exigiu um esforço extra na arquitetura do portal. Optei por uma abordagem modular, permitindo que cada funcionalidade fosse adicionada ou removida conforme a necessidade do negócio. A interface foi um ponto de atenção especial. Queria que o usuário encontrasse tudo de forma intuitiva, sem precisar navegar por dezenas de telas. Para isso, refinei a hierarquia da informação, utilizei padrões familiares e testei cada ajuste com usuários reais. Pequenos detalhes, como um botão reposicionado ou um feedback visual claro, fizeram uma diferença enorme na experiência final. Ao longo do desenvolvimento, surgiram imprevistos. Algumas integrações exigiram soluções criativas, e a performance precisou ser otimizada para suportar grandes volumes de dados. Ajustei requisições, melhorei o cache e utilizei técnicas de lazy loading para garantir que o sistema fosse rápido e responsivo.",
          challengesImages: [],
          results:
            "## Após várias iterações e testes, o Simplifica+ foi lançado e logo demonstrou impacto. Os clientes passaram a gerenciar seus processos com mais eficiência, reduzindo o tempo gasto em tarefas operacionais. Além disso, a plataforma se tornou um diferencial competitivo para a empresa, agregando valor ao serviço oferecido. Olhando para trás, vejo o Simplifica+ não apenas como um portal, mas como um reflexo do meu amadurecimento profissional. Cada desafio superado me ensinou algo novo sobre UX, arquitetura de software e a importância de ouvir os usuários. No fim, o maior sucesso do projeto não foi apenas a entrega de um produto funcional, mas a transformação real que ele trouxe para os clientes.",
          resultsImages: [],
        },
        {
          projectId: "ee91fcfb-15d9-4e58-8cd8-84bd1a272acf",
          experienceId: "609ea6cc-dbb3-4598-869e-d764041e8c5d",
          client: "Adapcon Software & Inovação",
          duration: "2 years (2023-2025)",
          role: "UX/UI Designer",
          about: "",
          aboutLinks: [],
          insights:
            "## Quando entrei no projeto Vue Polar Bear, a biblioteca de componentes já existia, mas estava longe de ser eficiente. Os componentes haviam sido desenvolvidos em momentos diferentes, sem um padrão visual definido, o que resultou em uma coleção desorganizada, com layouts completamente distintos entre si. Não havia consistência na tipografia, nas cores ou até mesmo no espaçamento entre elementos. Cada componente parecia pertencer a um projeto diferente.",
          insightsImages: [],
          challenges:
            "## O maior desafio foi estabelecer um design system que trouxesse unidade para toda a biblioteca. Antes de criar qualquer novo componente, precisei mapear tudo o que já existia, entender as discrepâncias e definir um conjunto de regras que pudessem ser aplicadas a todos. Escolhi uma paleta de cores fixa, estabeleci espaçamentos e proporções coerentes, além de determinar guidelines claras para tipografia e interações. Uma parte essencial do processo foi a revisão dos componentes. Alguns deles haviam sido criados para atender a necessidades específicas de projetos passados e já não faziam sentido dentro da biblioteca. Outros eram quase idênticos, diferenciando-se apenas por pequenos detalhes que poderiam ser resolvidos com propriedades configuráveis. Analisar cada um e decidir o que permaneceria, o que seria reformulado e o que poderia ser descartado foi um trabalho minucioso, mas essencial para a organização do sistema. Com o design system definido, iniciei a padronização dos componentes. Ajustei botões, inputs, modais e tabelas para seguirem a mesma linguagem visual. Além disso, implementei tokens de design para garantir que todas as variáveis – como cores, bordas e fontes – fossem reutilizadas de maneira consistente, facilitando futuras manutenções. Outro ponto crítico foi a documentação da biblioteca. De que adiantaria ter componentes bem estruturados se os desenvolvedores não soubessem como usá-los? Criei uma documentação clara e objetiva, com exemplos práticos, códigos reutilizáveis e diretrizes para personalização. Isso tornou a adoção do Vue Polar Bear muito mais intuitiva e reduziu o tempo gasto com suporte e dúvidas. Durante esse processo, também me preocupei com a acessibilidade. Testei a navegação por teclado, apliquei roles ARIA para leitores de tela e ajustei contrastes para tornar a experiência mais inclusiva. Pequenos ajustes como foco visível e mensagens de erro bem descritas fizeram uma grande diferença na usabilidade dos componentes.",
          challengesImages: [],
          results:
            "## Após essa reestruturação, o Vue Polar Bear se tornou uma biblioteca coesa e confiável, eliminando redundâncias e tornando o desenvolvimento de interfaces muito mais eficiente. O design system não apenas trouxe identidade visual, mas também facilitou a manutenção e a escalabilidade do projeto. Esse processo reforçou a importância da organização e da padronização no desenvolvimento front-end. Antes, cada novo componente era um desafio imprevisível; agora, há um sistema bem definido que permite criar interfaces consistentes e escaláveis com muito mais rapidez.",
          resultsImages: [],
        },
        {
          projectId: "",
          experienceId: "",
          client: "Study case",
          duration: "1 week (2025)",
          role: "Front-end Developer",
          about: "",
          aboutLinks: [],
          insights:
            "## Criar um web app que simulasse um iFood parecia um desafio empolgante. Eu queria entender na prática como funciona um sistema de marketplace de comida, desde a seleção do restaurante até a entrega do pedido. Assim nasceu o FSW Donalds, um projeto que me levou a aprofundar conceitos como estado global, performance e integração com mapas.",
          insightsImages: [],
          challenges:
            "## No início, precisei mapear toda a jornada do usuário. Como tornar a experiência o mais próximo possível da realidade? Estudei o fluxo de aplicativos de delivery populares, identifiquei padrões e defini um design que garantisse navegação fluida e intuitiva. A implementação do carrinho de compras foi um dos primeiros desafios. Ele precisava ser dinâmico, armazenar os itens adicionados e calcular os valores em tempo real. Para isso, trabalhei com gerenciamento de estado, garantindo que a experiência fosse rápida e responsiva, independentemente do número de produtos selecionados. O sistema de pedidos em tempo real trouxe ainda mais complexidade. Como garantir que os restaurantes vissem os pedidos instantaneamente? Como atualizar o status sem forçar recargas na página? Usei WebSockets para comunicação em tempo real, permitindo que as informações fluíssem de forma instantânea entre cliente e estabelecimento. Outro ponto crítico foi a integração com mapas. O usuário precisava visualizar o trajeto da entrega de forma clara. Para isso, utilizei a API do Google Maps, personalizando os marcadores e ajustando a experiência para diferentes dispositivos. Cada detalhe foi pensado para simular a jornada de um pedido real. A otimização de performance também foi essencial. Aplicativos web exigem carregamento rápido, então reduzi chamadas à API, utilizei lazy loading para imagens e implementei cache para melhorar a experiência geral. Pequenos ajustes fizeram grande diferença na fluidez do sistema.",
          challengesImages: [],
          results:
            "## Depois de muitos testes, o FSW Donalds ficou pronto e trouxe uma visão aprofundada sobre o funcionamento de plataformas de delivery. Foi um aprendizado intenso sobre arquitetura de software, performance e experiência do usuário. Esse projeto me mostrou que desenvolver uma aplicação vai além do código. Cada decisão impacta diretamente a experiência do usuário final, e cada desafio resolvido representa um passo na minha evolução como desenvolvedora.",
          resultsImages: [],
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
