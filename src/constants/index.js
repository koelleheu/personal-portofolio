import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    bootstrap5,
    postgre,
    elhurr,
    mahle,
    flink,
    threejs,
    portofolio,
    binarcare,
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
      title: "Research & Development",
      icon: web,
    },
    {
      title: "3D Models",
      icon: mobile,
    },
    {
      title: "Frontend",
      icon: backend,
    },
    {
      title: "Backend",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap5,
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
      name: "PostgreSQL",
      icon: postgre,
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
  ];
  
  const experiences = [
    {
      title: "R&D Engineer",
      company_name: "MAHLE Behr GmbH & Co. KG - Germany",
      icon: mahle,
      iconBg: "#E6DEDD",
      date: "September 2020 - August 2021",
      points: [
        "CAD design and validation of products component,  ensuring compliance with specifications and regulations.",
        "Collaborate with cross-functional teams to streamline production processes and optimize product design for efficieny and performance.",
        "Plan and execute validations tests, analyzing result to identify design improvements and enhance overall product quality.",
        "Present test findings and data-driven recommendations to project leaders for informed decision-making.",
      ],
    },
    {
      title: "Inventory Manager",
      company_name: "FLINK GmbH - Germany",
      icon: flink,
      iconBg: "#383E56",
      date: "September 2021 - February 2023",
      points: [
        "Establish and mantain accurate inventory records, which enables efficient management of stock levels.",
        "Conduct daily checks to ensure product freshness, minimizing losses from spoilage or theft.",
        "Monitor inventory inventory levels and indetify area of overstock and understock, resulting in better inventory management.",
        "Maintain regular communication with suppliers to ensure timely replenishment and quality control, optimizing inventory levels and product availability.",
      ],
    },
    {
      title: "Board Member",
      company_name: "Yayasan Pendidikan Islam El-Hurriyah",
      icon: elhurr,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Develop and execute long-term strategic plans aligned with the school's mission and goals.",
        "Contribute to financial decision-making, budgeting, and resource allocation to support the school's growth while ensuring fiscal responsibility and sustainability.",
        "Actively engaged with the school community and parents to foster a positive and inclusive environment, addressing concerns and promoting transparency.",
        "Support initiatives to enhance educational quality, curriculum development, and enrichment programs for students' holistic growth.",
      ],
    },
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
      name: "Personal Portofolio",
      description:
        "A dynamic personal portfolio website utilizing React for seamless functionality, Tailwind for sleek and responsive design, and Three.js to integrate captivating animations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portofolio,
      source_code_link: "https://github.com/koelleheu/personal-portofolio",
    },
    {
      name: "Doctor Appointment",
      description:
        "A web-based platform empowering users to easily locate nearby doctors and schedule appointments with a streamlined booking system.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: binarcare,
      source_code_link: "https://gitlab.com/binar-klp1-fsw36/frontend-binarcare-platinum/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };