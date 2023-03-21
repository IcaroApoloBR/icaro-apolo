import {
    web,
    mobile,
    creator,
    uiux,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    next,
    prefeitura,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Sobre",
    },
    {
        id: "work",
        title: "Carreira",
    },
    {
        id: "projects",
        title: "Projetos",
    },
    {
        id: "contact",
        title: "Contato",
    },
];

const services = [
    {
        title: "Desenvolvimento Web",
        icon: web,
    },
    {
        title: "Criação de Interfaces",
        icon: creator,
    },
    {
        title: "Consumo de APIs",
        icon: uiux,
    },
    {
        title: "Desenvolvimento Mobile",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Estagiário de Tecnologia da Informação",
        company_name: "Prefeitura Municipal de Cruzeiro",
        icon: prefeitura,
        iconBg: "#FFF",
        date: "Julho de 2021 - Dezembro de 2021",
        points: [
            "Conduzir a manutenção e organização de arquivos.",
            "Analisar e implementar roteiros de testes.",
            "Alterar login de rede intranet para usuários da corporação.",
            "Auxiliar na configuração de hardware em rede local.",
            "Acompanhar manutenção de sites e sistemas.",
        ],
    },
    {
        title: "Desenvolvedor Front-End",
        company_name: "Next Tecnologia da Informação",
        icon: next,
        iconBg: "#E6DEDD",
        date: "Março de 2022 - o momento",
        points: [
            "Desenvolvimento de interfaces de usuário com o Framework Next.js(React | JavaScript).",
            "Criação de sistema de autenticação de usuários para consumir conteúdos exclusivos com Laravel e Blade.",
            "Desenvolvimento de um ERP integrado ao Mercado Livre, gerando métricas de lucratividade e controle de estoque, implementação de gateway de pagamento",
            "Manutenção de aplicativo E-reader para distribuição de licenças digitais e leitura personalizável.",
            "Desenvolvimento e manutenção de um sistema pedagógico que realiza o controle de aulas para instituição de aulas particulares.",
            "Construção de um e-commerce com Woocommerce no ramo de agronegócios para soluções de melhores cultivos.",
            "Metodologia ágil Scrum e Kanban.",
            "Calls de alinhamento com clientes para apresentar demandas desenvolvidas e alinhar próximos passos da sprint e do backlog.",
            "Utilização de ferramentas Trello, Jira e Notion para realizar o controle de projetos.",
        ],
    },
];

const projects = [
    {
        name: "Rocket Help",
        description:
            "Aplicativo de chamados internos de uma empresa, solicitações de manutenção e suporte de equipamentos, gerência de chamados em tempo real.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/IcaroApoloBR/RocketHelp",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

const socials = [
    {
        name: 'linkedin',
        url: '/src/assets/linkedin.svg',
    },
    {
        name: 'instagram',
        url: '/src/assets/instagram.svg',
    },
    {
        name: 'whatsapp',
        url: '/src/assets/whatsapp.svg',
    },
];

export { services, technologies, experiences, projects, socials };