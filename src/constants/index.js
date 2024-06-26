import { pro1, pro2, pro3, pro4 } from "../assets/images";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaFigma,
  FaLaptopCode,
  FaDatabase,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact-us", label: "Contact" },
];

export const socialLinks = [
  {
    href: "https://github.com/kaleb110",
    icon: AiFillGithub({ size: 24 }),
    id: 0,
  },
  {
    href: "https://github.com/kaleb110",
    icon: AiFillLinkedin({ size: 24 }),
    id: 1,
  },
  {
    href: "https://github.com/kaleb110",
    icon: AiFillTwitterCircle({ size: 24 }),
    id: 2,
  },
];

export const Progress = [
  {
    text: "Html",
    label: "80%",
  },
  {
    text: "Css",
    label: "70%",
  },
  {
    text: "Javascript",
    label: "55%",
  },
];



export const projects = [
  {
    title: "React Portfolio",
    description:
      "Discover our sleek portfolio project built with React, HTML, and Tailwind CSS. It's a modern showcase of creativity and functionality. Explore dynamic content, structured with HTML, and styled beautifully with Tailwind CSS. It's your go-to platform for presenting your work in style.",
    image: pro1,
    tags: ["React", "html", "tailwind"],
    code: "https://github.com/kaleb110",
    live: "https://github.com/kaleb110",
    id: 0,
  },
  {
    title: "Login Page",
    description: `
Introducing our login page project created with React, HTML, and Tailwind CSS. It's a user-friendly interface designed for seamless authentication. With HTML's structure and Tailwind CSS's styling, it offers a sleek and intuitive login experience. 
`,
    image: pro2,
    tags: ["React", "JavaScript"],
    code: "https://github.com/kaleb110",
    live: "https://github.com/kaleb110",
    id: 1,
  },
  {
    title: "Weather app",
    description: `Check out our Weather App project, built with React, HTML, and Tailwind CSS. It's a simple and interactive app that gives you instant weather updates for any city. With React for quick updates and HTML for structure, it's easy to use and understand.`,
    image: pro3,
    tags: ["Javascript", "React"],
    code: "https://github.com/kaleb110",
    live: "https://github.com/kaleb110",
    id: 2,
  },
  {
    title: "To do app",
    description: `
Check out our To Do list project, built with React, HTML, and Tailwind CSS. It's a simple and interactive app that helps you manage your to-do list effortlessly. With React for quick updates and HTML for structure, it's easy to use and understand.`,
    image: pro4,
    tags: ["tailwind", "javascript"],
    code: "https://github.com/kaleb110",
    live: "https://github.com/kaleb110",
    id: 3,
  },
];

export const Service = [
  {
    icon: FaFigma({ size: 32 }),
    text: "Web Design",
    label: "We Create And Design Beutiful User Interface Designes.",
  },
  {
    icon: FaLaptopCode({ size: 32 }),
    text: "Web Development",
    label: `Experiances With Technologies Such As html, css,
            JS And More.`,
  },
  {
    icon: FaDatabase({ size: 32 }),
    text: "Database",
    label: "Works With Databases Like MongoDB and SQL.",
  },
];

export const Contacts = [
  {
    icon: FaPhoneSquareAlt({ size: 38 }),
    text: "+251-111-111-111",
  },
  {
    icon: MdEmail({ size: 38 }),
    text: "Kalebo2023@gmail.com",
  },
  {
    icon: FaLocationDot({ size: 38 }),
    text: "Bahir Dar, Ethiopia",
  },
];




