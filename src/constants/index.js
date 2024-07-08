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
    threejs,
    next,
    prefeitura,
    bean,
    tbb
} from "../assets";

import rockethelp from "../assets/projects/rockethelp.jpg";
import waiterapp from "../assets/projects/waiterapp.jpg";
import reactprime from "../assets/projects/reactprime.png";
import letmeask from "../assets/projects/letmeask.png";
import proffy from "../assets/projects/proffy.png";
import podcastrnext from "../assets/projects/podcastrnext.png";
import ignitelab from "../assets/projects/ignitelab.png";
import ignitegym from "../assets/projects/ignitegym.png";
import apoloflix from "../assets/projects/apoloflix.png";
import discord from "../assets/projects/discord.png";

import crud from "../assets/projects/crud.jpeg";
import pokedex from "../assets/projects/pokedex.gif";
import ecommerce from "../assets/projects/ecommerce.gif";

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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
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
        title: "Desenvolvedor Web",
        company_name: "Next Tecnologia da Informação",
        icon: next,
        iconBg: "#E6DEDD",
        date: "Março de 2022 - Dezembro de 2023",
        points: [
            "Desenvolvimento de um ERP integrado ao Mercado Livre para vendedores gerenciarem suas métricas de lucratividade e controle de estoque, além de implementação de gateway de pagamento por assinatura.",
            "Desenvolvimento e manutenção de um sistema pedagógico para franquias, responsável por realizar o controle de aulas para instituição de aulas particulares.",
            "Criação de uma plataforma administrativa, que promove a ligação eficiente entre clientes e uma ampla gama de prestadores de serviços, abrangendo diversos setores e especializações, e incorporando um sistema de marketing multinível.",
            "Construção de um sistema para controle de gerenciamento de estoque e realização de vendas para Hortifruti, com exportação de recibos e variedade de gráficos para melhor visualização de dados e análise comparativa.",
            "Construção de um e-commerce com Woocommerce no ramo de agronegócios para soluções de melhores cultivos.",
            "Manutenção de aplicativo E-reader para distribuição de licenças digitais e leitura personalizável, utilizando Google Firebase como armazenamento e consultas dos dados e e-books.",
        ],
    },
    {
        title: "Desenvolvedor Pleno",
        company_name: "Bean Softwares",
        icon: bean,
        iconBg: "#FFFFFF",
        date: "Dezembro de 2023 - Março de 2024",
        points: [
            "Desenvolvimento de sistema de Logística Reversa para empresa Grendene (detentora das marcas Melissa, Rider, Ipanema, Grendha, Zaxy, Cartago, Pega Forte e Grendene Kids,), utilizando Framework Next.js 14 (React | TypeScript), TailwindCSS e Hasura GraphQL API.",
            "Objetivo de fazer descarte de um produto não utilizado mais, assim, o material será enviado para recicladores parceiros e poderá virar um novo item. Portanto, contribuirá a prolongar o ciclo de vida dos materiais e reduz o impacto para o planeta.",            "Desenvolvimento de um ecossistema envolvendo consumidores, lojistas, administradores e recicladores para controle de materiais reciclados.",
            "Funcionalidades incluem autenticação via Magic Link, níveis de permissões por usuários baseado em middleware, cadastro e agendamento de devolução, acompanhar status em tempo real da coleta, relatórios de status final com avaliações e dashboard administrativa com gráficos informativos de produtos reciclados e coletas concluídas por pontos de coleta.",
            "Desenvolvimento de um programa integrado para previsão de vendas, consolidar dados e quantidades realizadas a partir de pedidos no banco de dados do FoccoERP.",
            "Facilitou o gerenciamento em tempo real, eliminando atualizações manuais e permitindo análises imediatas na mesma tela, assim, transformando o processo manual de análise que anteriormente era realizado em planilhas eletrônicas."
        ],
    },
    {
        title: "Desenvolvedor Pleno",
        company_name: "The Brooklyn Brothers",
        icon: tbb,
        iconBg: "#000000",
        date: "Março de 2024 - Até o momento",
        points: [
            "Desenvolver novos websites da Unilever na plataforma Adobe Experience Manager SaaS (AEM).",
            "Integrante do Squad de Inovação, responsável por desenvolver sites com foco em fluidez, atratividade, performance e acessibilidade, atendendo otimização no geral do produto.",
            "Levantamento de requisitos para construção de componentes.",
            "Prestar suporte aos clientes internacionais, compreendendo às expectativas e fornecendo suporte durante todo o processo de desenvolvimento do software."
        ],
    },
];

const projects = [
    {
        name: "FrontEnd Test - The Brooklyn Brothers",
        description:
            "Desafio Técnico The Brooklyn Brothers - Front end Developer React",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "jest",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/IcaroApoloBR/TBB-frontend-challenge",
    },
    {
        name: "FrontEnd Test - Bean Softwares",
        description:
            "Desafio Técnico Bean Softwares - Front end Developer React",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "docker",
                color: "green-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-pink-text-gradient",
            },
        ],
        image: pokedex,
        source_code_link: "https://github.com/IcaroApoloBR/pokedex-test-frontend",
    },
    {
        name: "FrontEnd Test - Trinca",
        description:
            "Desafio Técnico Trinca Softwares - Front end Developer React",
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
                name: "nextjs",
                color: "green-pink-text-gradient",
            },
        ],
        image: crud,
        source_code_link: "https://github.com/IcaroApoloBR/trinca-frontend-test",
    },
    {
        name: "Ignite Gym React-Native",
        description:
            "Aplicativo voltado para o universo fitness que oferece recursos de registro de usuários, rastreamento de exercícios e histórico de execução.",
        tags: [
            {
                name: "react-native",
                color: "green-pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "mobile",
                color: "orange-text-gradient",
            },
        ],
        image: ignitegym,
        source_code_link: "https://github.com/IcaroApoloBR/igniteGym-mobile",
    },
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
            "Aplicação voltada a garçons, permitindo lançar, fechar pedidos e alteração nos status conforme o andamento do pedido, acompanhamento em tempo real através do dashboard de administrador.",
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
        href: 'https://www.linkedin.com/in/icaroapolo/'
    },
    {
        name: 'instagram',
        url: instagram,
        href: 'https://www.instagram.com/icaro.apolo/'
    },
    {
        name: 'whatsapp',
        url: whatsapp,
        href: 'https://api.whatsapp.com/send?phone=5512981434005&text=Bom%20dia%20%C3%8Dcaro,%20tudo%20bem?%0AAo%20observar%20seu%20portf%C3%B3lio,%20notei%20que%20o%20WhatsApp%20era%20um%20meio%20de%20contato%20e%20gostaria%20conversar%20com%20voc%C3%AA%20sobre%20...'
    },
];

export { services, technologies, experiences, projects, socials };