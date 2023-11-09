import {
  iphone,
  gpt,
  three,
  firebase,
  npm,
  sass,
  bootstrap,
  code,
  eng,
  edu,
  mobile,
  frontend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive & Modern Design",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Sass CSS",
    icon: sass,
  },
  {
    name: "NPM",
    icon: npm,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // }
];

const experiences = [
  {
    title: "High School",
    company_name: "Menteşe Anadolu Lisesi",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "2006 - 2010",
    points: [
      "Science"
  
    ],
  },
  {
    title: "University",
    company_name: "Süleyman Demirel University",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Sep 2011 - Feb 2017",
    points: [
      "Environmental Engineering"
    ],
  },
  {
    title: "Environmental Engineer",
    company_name: "Aytuğ Geri Dönüşüm",
    icon: eng,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Feb 2020",
    points: [
      "Operating a recycling facility in accordance with the standards of the Ministry of Environment",
      "Raw material research and product sales",
      "Preliminary Accounting"
    ],
  },
  {
    title: "Environmental Engineer",
    company_name: "Bodrum Water Purification",
    icon: eng,
    iconBg: "#E6DEDD",
    date: "May 2020 - Aug 2022",
    points: [
      "Quality and control of companies' water treatment systems",
      "Marketing and Sales"
    ],
  },
  {
    title: "Software Learning Process",
    company_name: "the Magical World of the Internet 🌎",
    icon: code,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "",
      ""
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Visuals",
    description:
      "It is built with ThreeJS, a powerful 3D graphics library used to create and animate the 3D model. React Three Fiber and Framer Motion libraries were used.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: three,
    source_code_link: "https://github.com/ozgeonline/3d_portfolio",
    live_demo_link: "https://portfolio-react-three.netlify.app/"
  },
  {
    name: "Modern UI & UX Design",
    description:
      "Practice writing clean code with React functional components and their reusability was practiced. Made responsive to all devices with flex and grid structure",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "flex & grid",
        color: "green-text-gradient",
      },
      {
        name: "components",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/ozgeonline/gpt3",
    live_demo_link:"https://gpt-4-react-project.netlify.app/"
  },
  {
    name: "3D iPhone",
    description:
      "Created 3D animation in React using technologies such as WebGi (supported by Three.js) and GSAP. Optimized for mobile devices.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "webgi",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/ozgeonline/3d-website/tree/main",
    live_demo_link:"https://3d-iphone14.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };