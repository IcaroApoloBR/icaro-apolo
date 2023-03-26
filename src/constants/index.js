import {
    web,
    mobile,
    creator,
    uiux,
    // javascript,
    // typescript,
    // html,
    // css,
    // reactjs,
    // redux,
    // tailwind,
    // nodejs,
    // mongodb,
    // git,
    // figma,
    // docker,
    // threejs,
    next,
    prefeitura,
} from "../assets";

import rockethelp from "../assets/projects/rockethelp.jpg";
import waiterapp from "../assets/projects/waiterapp.jpg";
import reactprime from "../assets/projects/reactprime.png";
import letmeask from "../assets/projects/letmeask.png";
import proffy from "../assets/projects/proffy.png";
import podcastrnext from "../assets/projects/podcastrnext.png";
import ignitelab from "../assets/projects/ignitelab.png";
import apoloflix from "../assets/projects/apoloflix.png";
import discord from "../assets/projects/discord.png";

import linkedin from "../assets/socials/linkedin.svg";
import instagram from "../assets/socials/instagram.svg";
import whatsapp from "../assets/socials/whatsapp.svg";

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

// const technologies = [
//     {
//         name: "HTML 5",
//         icon: html,
//     },
//     {
//         name: "CSS 3",
//         icon: css,
//     },
//     {
//         name: "JavaScript",
//         icon: javascript,
//     },
//     {
//         name: "TypeScript",
//         icon: typescript,
//     },
//     {
//         name: "React JS",
//         icon: reactjs,
//     },
//     {
//         name: "Redux Toolkit",
//         icon: redux,
//     },
//     {
//         name: "Tailwind CSS",
//         icon: tailwind,
//     },
//     {
//         name: "Node JS",
//         icon: nodejs,
//     },
//     {
//         name: "MongoDB",
//         icon: mongodb,
//     },
//     {
//         name: "Three JS",
//         icon: threejs,
//     },
//     {
//         name: "git",
//         icon: git,
//     },
//     {
//         name: "figma",
//         icon: figma,
//     },
//     {
//         name: "docker",
//         icon: docker,
//     },
// ];

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
        name: "Ignite Lab React",
        description:
            "O projeto consiste em um clone da plataforma de eventos da Rocketseat, integração com CMS e APIs GraphQL.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "graphql",
                color: "green-pink-text-gradient",
            },
        ],
        image: ignitelab,
        source_code_link: "https://github.com/IcaroApoloBR/igniteLabReact",
    },
    {
        name: "Rocket Help",
        description:
            "Aplicativo de chamados internos de uma empresa, solicitações de manutenção e suporte de equipamentos, gerência de chamados em tempo real.",
        tags: [
            {
                name: "react-native",
                color: "green-pink-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
        ],
        image: rockethelp,
        source_code_link: "https://github.com/IcaroApoloBR/RocketHelp",
    },
    {
        name: "PodcastNext",
        description:
            "Uma plataforma construída para transmissão de podcast do âmbito de programação e desenvolvimento web.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: podcastrnext,
        source_code_link: "https://github.com/IcaroApoloBR/podcastrnext",
    },
    {
        name: "Waiter App",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "styled-components",
                color: "pink-text-gradient",
            },
        ],
        image: waiterapp,
        source_code_link: "https://github.com/IcaroApoloBR/WaiterApp_FullStack",
    },
    {
        name: "React Prime",
        description:
            "Um aplicativo onde você pode pesquisar filmes que estão em exibição, em alta ou com melhor classificação, descrição do filme, link do filme para assistir ao trailer e salvá-los em seus favoritos.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "expo",
                color: "green-text-gradient",
            },
            {
                name: "axios",
                color: "pink-text-gradient",
            },
        ],
        image: reactprime,
        source_code_link: "https://github.com/IcaroApoloBR/MoviesApp_ReactNative",
    },
    {
        name: "Proffy",
        description:
            "A plataforma que conecta professores e alunos para uma melhor experiência de estudo online.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "react-native",
                color: "green-pink-text-gradient",
            },
        ],
        image: proffy,
        source_code_link: "https://github.com/IcaroApoloBR/Proffy",
    },
    {
        name: "LetMeAsk",
        description:
            "Central de Perguntas idealizado para responder perguntas de alunos em tempo real, elaborado para professores interagirem com estudantes, gerar conteúdo pré-live ou reuniões e reunir dúvidas durante as aulas.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: letmeask,
        source_code_link: "https://github.com/IcaroApoloBR/LetmeaskEStudos",
    },
    {
        name: "Apoloflix",
        description:
            "Projeto clone da netflix desenvolvido em react, cadastro de categorias e exibição por tópicos.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "styled-components",
                color: "green-text-gradient",
            },
        ],
        image: apoloflix,
        source_code_link: "https://github.com/IcaroApoloBR/ApoloFlix",
    },
    {
        name: "Discord",
        description:
            "Projeto baseado no funcionamento de um chat em tempo real, utilizando como referência a interface gráfica e funcionalidades do Discord.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "skynexui",
                color: "pink-text-gradient",
            },
        ],
        image: discord,
        source_code_link: "https://github.com/IcaroApoloBR/discordProject",
    },
];

const socials = [
    {
        name: 'linkedin',
        url: linkedin,
    },
    {
        name: 'instagram',
        url: instagram,
    },
    {
        name: 'whatsapp',
        url: whatsapp,
    },
];

export { services, experiences, projects, socials };