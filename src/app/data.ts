import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import banner3 from "../images/banner-3.jpg";
import avatar from "../images/avatar.png";
import avatar6 from "../images/avatar6.png";
import member from "../images/testimonial3.jpg";
import portfolio1 from "../images/1.png";
import portfolio2 from "../images/2.png";
import portfolio3 from "../images/3.png";
import portfolio4 from "../images/4.png";
import portfolio5 from "../images/5.png";

import { hero, testimonial, team, category } from "@/utils/type"; //Destructuring

// export const sliderData = [
//   {
//     id: 1,
//     title: "Welcome to Lacrete Concept Limited",
//     text: "Where Vision Meets Structure.",
//     image: "/images/banner-1.jpg",
//   },
//   {
//     id: 2,
//     title: "Welcome to Lacrete Concept Limited",
//     text: "Strength in Every Structure.",
//     image: "/images/banner-2.jpg",
//   },
//   {
//     id: 3,
//     title: "Welcome to Lacrete Concept Limited",
//     text: "Solid Foundations, Lasting Impressions.",
//     image: "/images/banner-3.jpg",
//   },
// ];

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
      "The service was absolutely fantastic! I was amazed by the attention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Alhaji Ibrahim",
  },
  {
    id: 2,
    comment:
      "They use quality materials and their team is very professional. I am extremely satisfied with the results of my project.",
    image: avatar6,
    name: "Kemi",
  },
  {
    id: 3,
    comment:
      "I would recommend them to anyone looking for a reliable construction company. They were transparent throughout the process and delivered on time.",
    image: avatar,
    name: "Demola",
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

export const videoSectionData = [
  {
    id: 1,
    video: "/videos/1.mp4",
  },
  {
    id: 2,
    video: "/videos/2.mp4",
  },
  {
    id: 3,
    video: "/videos/3.mp4",
  },
  {
    id: 4,
    video: "/videos/4.mp4",
  },

  {
    id: 5,
    video: "/videos/5.mp4",
  },
  {
    id: 6,
    video: "/videos/6.mp4",
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

export const blogData = [
  {
    id: 1,
    slug: "why-buildings-collapse",
    title: "Why Do Buildings Collapse?",
    desc: "Understanding the causes of building collapse and how to prevent them.",
    image: "/images/blog/collapse.jpg",
    content: `Building collapses are tragic events that often leave communities shocked and grieving. While some disasters result from natural causes like earthquakes or floods, many occur without any obvious warning signs. Here’s why buildings sometimes collapse unexpectedly:
    \n\n1. Poor Construction Practices
    \n\nMany collapses stem from substandard materials, rushed construction, or failure to follow engineering guidelines. Weak foundations, inadequate reinforcement, and poor workmanship can lead to sudden structural failure.
    \n\n2. Lack of Maintenance
    \n\nOver time, buildings deteriorate due to weathering, rust, and material fatigue. If cracks, water damage, or corrosion go unnoticed or unrepaired, the structure can weaken until it gives way without visible warning.
    \n\n3. Illegal Modifications
    \n\nUnauthorized renovations—such as removing load-bearing walls or adding extra floors—can destabilize a building. Without proper engineering oversight, these changes can lead to catastrophic failure.
    \n\n4. Hidden Structural Flaws
    \n\nSome defects, like internal corrosion in steel beams or hidden foundation shifts, aren’t easily detectable. By the time signs appear (such as cracks or leaning), it may be too late.
    \n\n5. Regulatory Failures
    \n\nIn some cases, weak enforcement of building codes or corruption in permitting processes allows unsafe structures to remain standing until disaster strikes.
    \n\nPreventing Future Tragedies:
    \n\n✅ Enforce strict construction standards
    \n\n✅ Conduct regular structural inspections
    \n\n✅ Educate the public on reporting warning signs
    \n\n✅ Punish negligence and corruption
    \n\nBuilding collapses shouldn’t happen without warning—proper oversight and proactive maintenance can save lives.`,
  },
  {
    id: 2,
    slug: "modern-architecture",
    title: "Why wall cracks?",
    desc: "Understanding the causes of wall cracks",
    image: "/images/blog/wall.png",
    content: `Building cracks can occur due to various reasons, often related to structural stress, material properties, environmental factors, or poor construction practices. Here are the main causes:
    \n\n1. Shrinkage Cracks
    \n\nConcrete Drying Shrinkage: Fresh concrete loses moisture as it cures, causing slight shrinkage and fine cracks (common in slabs and walls).
    \n\nThermal Expansion/Contraction: Temperature changes cause materials to expand or contract, leading to stress cracks.
    \n\n2. Settlement & Foundation Issues
    \n\nUneven Soil Settlement: Weak or improperly compacted soil can cause the foundation to sink unevenly, leading to cracks in walls and floors.
    \n\nExpansive Clay Soils: Soil that swells when wet and shrinks when dry can shift the foundation.
    \n\n3. Structural Overloading
    \n\nExcessive weight (e.g., heavy machinery, improper design) can exceed the building’s load capacity, causing cracks in beams, columns, or slabs.
    \n\n4. Poor Construction Practices
    \n\nInsufficient Curing: Concrete that dries too quickly can weaken and crack.

\n\nLow-Quality Materials: Substandard concrete, weak mortar, or inadequate reinforcement (e.g., insufficient rebar) increase cracking risk.

\n\nImproper Joints: Lack of control joints in concrete slabs leads to uncontrolled cracking.
\n\n5. Environmental Factors
\n\nFreeze-Thaw Cycles: Water seeps into cracks, freezes, expands, and worsens cracks (common in colder climates).
\n\nEarthquakes & Ground Movement: Seismic activity or nearby excavation can shift foundations.
    `,
  },
];
