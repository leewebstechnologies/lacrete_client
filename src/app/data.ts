import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import banner3 from "../images/banner-3.jpg";
import avatar from "../images/avatar.png";
import member from "../images/testimonial3.jpg";
import portfolio1 from "../images/1.png";
import portfolio2 from "../images/2.png";
import portfolio3 from "../images/3.png";
import portfolio4 from "../images/4.png";
import portfolio5 from "../images/5.png";

import { hero, testimonial, team, category } from "@/utils/type"; //Destructuring

export const sliderData = [
  {
    id: 1,
    title: "Welcome to Lacrete Concept Limited",
    text: "Where Vision Meets Structure.",
    image: "/images/banner-1.jpg",
  },
  {
    id: 2,
    title: "Welcome to Lacrete Concept Limited",
    text: "Strength in Every Structure.",
    image: "/images/banner-2.jpg",
  },
  {
    id: 3,
    title: "Welcome to Lacrete Concept Limited",
    text: "Solid Foundations, Lasting Impressions.",
    image: "/images/banner-3.jpg",
  },
];

export const heroData: hero[] = [
  {
    id: 1,
    image: banner1,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "We build top-notch projects",
  },
  {
    id: 2,
    image: banner2,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "We use high-quality materials",
  },
  {
    id: 3,
    image: banner3,
    title: "Welcome to Lacrete Concept Construction Company",
    subtitle: "Your Vision, Our Mission",
  },
];

export const testimonialData: testimonial[] = [
  {
    id: 1,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Ademola Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 2,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Adeola Fayemi",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 3,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Sharon Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
];

export const teamData: team[] = [
  {
    id: 1,
    image: member,
    name: "Azeez Adeyemi",
    position: "Founder & CEO",
  },
  {
    id: 2,
    image: member,
    name: "Ali Ajibade",
    position: "Head of Architecture",
  },
  {
    id: 3,
    image: member,
    name: "Adedotun Ajibade",
    position: "Construction Manager",
  },
];

// export const services = [
//   {
//     id: 1,
//     title: "Building / Civil Designs (Building Plan & Structural Drawings)",
//     desc: "For trips within a city or town",
//     video: "/video/one.mp4",
//     photo: "/images/1.png",
//   },

//   {
//     id: 2,
//     name: "building&civilconstruction",
//     title: "Building & Civil Construction Services",
//     desc: "For trips within a city or town",
//     video: "/video/two.mp4",
//     photo: "/images/2.png",
//   },

//   {
//     id: 3,
//     name: "buildingrenovation&maintenance",
//     title: "Building Renovation & Maintenance",
//     desc: "For trips within a city or town",
//     video: "/video/two.mp4",
//     photo: "/images/3.png",
//   },

//   {
//     id: 4,
//     name: "steelworks&planning",
//     title: "Steel Works & Planning",
//     desc: "For trips within a city or town",
//     video: "/video/two.mp4",
//     photo: "/images/4.png",
//   },
// ];

export const categoryData: category[] = [
  {
    id: 1,
    title: "Mansion",
    desc: "Mansion at Ikoyi, Lagos",
    category: "Residential",
    image: portfolio1,
  },
  {
    id: 2,
    title: "School",
    desc: "Primary School at Ikoyi, Lagos",
    category: "Educational",
    image: portfolio2,
  },
  {
    id: 3,
    title: "Health Center",
    desc: "Modern Health Center at Ikoyi, Lagos",
    category: "Healthcare",
    image: portfolio3,
  },
  {
    id: 4,
    title: "Founadtion",
    desc: "Mansion at Ikoyi, Lagos",
    category: "Foundation",
    image: portfolio4,
  },
  {
    id: 5,
    title: "Mansion",
    desc: "Mansion at Ikoyi, Lagos",
    category: "Residential",
    image: portfolio5,
  },
];


export const blogData = [
  {
    id: "1",
    slug: "beautiful-nextjs-blog",
    title: "How to Build a Beautiful Blog in Next.js 15",
    description:
      "Learn how to use Next.js 15 and CSS Modules to create a stunning blog page.",
    image: "/images/blog/collapse.jpg",
    content: `## Full Blog Content\n\nThis is a detailed guide on building blogs using Next.js 15.`,
    date: "2025-06-15",
  },
  {
    id: "2",
    slug: "css-module-animation",
    title: "Add Smooth Animations with CSS Modules",
    description: "Make your blog UI smooth and attractive with animation.",
    image: "/images/blog/wall.png",
    content: `## Animations with CSS\n\nUse transitions, transforms and keyframes to enhance experience.`,
    date: "2025-06-14",
  },
];

export const videoPlayerData = [
  {
    id: 1,
    video: "/videos/1.mp4",
  },
  {
    id: 1,
    video: "/videos/2.mp4",
  },
];

export const filterData = [
  {
    id: 1,
    title: "Mansion",
    category: "Completed",
    image: "/images/portfolio/1.png",
  },
  {
    id: 2,
    title: "Office",
    category: "Ongoing",
    image: "/images/portfolio/7.png",
  },
  {
    id: 3,
    title: "Health Center",
    category: "Completed",
    image: "/images/portfolio/3.png",
  },
  {
    id: 4,
    title: "School",
    category: "Completed",
    image: "/images/portfolio/4.png",
  },
  {
    id: 5,
    title: "Mansion",
    category: "Ongoing",
    image: "/images/portfolio/5.png",
  },
  {
    id: 6,
    title: "Mansion",
    category: "Completed",
    image: "/images/portfolio/6.png",
  },
  {
    id: 7,
    title: "Duplex",
    category: "Design",
    image: "/images/portfolio/11.png",
  },
  {
    id: 8,
    title: "Office",
    category: "Design",
    image: "/images/portfolio/design1.jpeg",
  },
];
