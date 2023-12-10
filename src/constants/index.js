import {
  
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
  mern,
  android,
  blogWeb,
  portfolio,
  bootstrap,
  python,
  c,
  mysql,
  expressjs,
  snakeGame,
} from "../assets/";

export const navLinks = [
  {
    id: "",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "Express JS",
    icon: expressjs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "MySQL",
    icon: mysql,
  },
  {
    title: "C Language",
    icon: c,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "MERN Stack",
    icon: mern,
    iconBg: "#383E56",
    date: "April 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Developer",
    company_name: "Android Developer",
    icon: android,
    iconBg: "#383E56",
    date: "Dec 2023 - Learning",
    points: [
      "Lorem ipsum dolor, sit elit. Officiis quae ut labore modi consectetur iusto.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis ad est inventore pariatur totam.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
 
];

const projects = [
  {
    name: "BlogX",
    demo_link:"http://blogxweb.netlify.app",
    description:
      "It is a blog website thats helps user to find information and solutions user can also create their own blogs.For frontend we use ReactJS and for backend expressJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogWeb,
    source_code_link: "https://github.com/mohitsinghx3",
  },
  {
    name: "Portfolio",
    demo_link:"http://genzcoder.netlify.app",
    description:
      "It is a portfolio website which have some unique design and gives gamer portfolio vibe.We have used emailjs for contact page through which people cna connect from us.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mohitsinghx3",
  },
  {
    name: "Snake Game",
    demo_link:"#",
    description:
      "It is a basic snake game with some functionality, you can enjoy by playing this game.This game is made of pure HTML,CSS and JavaScript.",
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
    image: snakeGame,
    source_code_link: "https://github.com/mohitsinghx3",
  },
];

export { services, experiences, projects };
