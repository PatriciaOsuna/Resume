import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Patricia Amahirany Osuna Sarmiento",
  initials: "PO",
  location: "Mazatlan, Sinaloa, Mexico",
  locationLink: "https://www.google.com/maps/place/Mazatl%C3%A1n,+Sinaloa,+Mexico",
  about: "Junior Full Stack Web Developer - Building responsive web and scalable web applications",
  summary: (
    <>
      Junior Full Stack Developer with 1 year of experience working with React, JavaScript, Node.js, 
      and modern frontend and backend tools. I enjoy building clean, functional, and user-friendly 
      interfaces while implementing efficient server-side logic and APIs. I’m continuously improving 
      my skills and contributing to projects where I can deliver value and grow professionally.
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "https://resume-patricia-osuna.vercel.app/",
  contact: {
    email: "amahiranysarmiento@gmail.com",
    tel: "+52 6692236808",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PatriciaOsuna",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amahirany-sarmiento/",
        icon: "linkedin",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/patrixiasarmiento?igsh=YXVwZGFxa3BlNzF3&utm_source=qr",
        icon: "instagram",
      },
    ],
  },
  education: [
    {
      school: "Universidad Autonoma de Sinaloa",
      degree: "Bachelor's Degree in Information Systems Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  certifications: [
    {
      company: "Udemy",
      title: "React 18 Course 2024",
      badges: ["React", "Web Developer", "JavaScript", "Reusable Components"],
      end: "2024",
      description: 
        "Completed a comprehensive React 18 course covering functional components, hooks, state and props management, reusable component design, and modern JavaScript practices. Gained hands-on experience building responsive and dynamic web applications.",
    }, 
    {
      company: "Simplilearn",
      title: "TypeScript Basic",
      badges: ["TypeScript", "Code Reviews", "JavaScript", "Git/Github"],
      end: "2025",
      description: 
        "Completed a foundational TypeScript course, learning type annotations, interfaces, classes, and basic object-oriented programming concepts. Gained hands-on experience integrating TypeScript with JavaScript projects and following best practices for clean and maintainable code.",
    },
    {
      company: "Simplilearn",
      title: "Angular Basic",
      badges: ["Angular", "JavaScript", "Clean Code", "Git/Github", "Semantic Versioning"],
      end: "2025",
      description: 
        "Completed a foundational course on Angular, covering component-based architecture, TypeScript integration, routing, data binding, and best practices for building maintainable and scalable web applications.",
    },
    {
      company: "Desafio Latam",
      title: "Advanced CSS",
      badges: ["CSS", "JavaScript", "HTML", "Web Design", "Responsive"],
      end: "2024",
      description: 
        "Completed an in-depth CSS course covering adaptive layouts, media queries, typography, color theory, CSS variables, and modern styling techniques to create polished and professional web interfaces.",
    },
    {
      company: "Mirai Innovation Research Institute",
      title: "Emerging Future Technology Training Program",
      badges: ["Python", "Machine Learning", "C++"],
      end: "2023",
      description: 
        "Completed an intensive training program focused on emerging technologies, including Python programming, machine learning fundamentals, and C++ development. Gained hands-on experience in data analysis, algorithm implementation, and applying AI techniques to real-world projects.",
    },
    {
      company: "UNAM",
      title: "Introduction to Artificial Intelligence",
      badges: ["Python", "Basic", "Analytical Thinking"],
      end: "2020",
      description: 
        "Completed an introductory course on Artificial Intelligence, covering Python programming, fundamental AI concepts, basic machine learning algorithms, and problem-solving techniques. Gained practical experience in designing simple AI models and analyzing data to support decision-making.",
    },
  ],
  work: [
    {
      company: "QUO Logistics",
      link: "https://quologistics.com/",
      badges: ["Remote", "Responsive", "React", "JavaScript", "Tailwind CSS"],
      title: "Junior Reactjs Frontend",
      start: "May 2025",
      end: "Sept 2025",
      description: (
        <>
          Developed and maintained a responsive web application for shipment management using React, JavaScript, and Tailwind CSS.
          Built reusable and scalable front-end components, optimized application performance, and ensured cross-browser and cross-device compatibility.
          <ul className="list-inside list-disc">
            <li>Built and enhanced interactive front-end components with React and Tailwind CSS.</li>
            <li>Integrated RESTful APIs to fetch, display, and manage shipment data dynamically.</li>
            <li>Ensured responsive design and cross-browser compatibility for seamless access on multiple devices.</li>
            <li>Collaborated with backend and UX teams to implement features aligned with business requirements.</li>
            <li>Maintained clean, reusable, and scalable code following modern front-end development best practices.</li>
          </ul>
        </>
      ),
    },
    {
      company: "NimvaCloud",
      link: "https://nimva.cloud/",
      badges: ["Remote", "PHP", "Vite", "TypeScript", "PostgreSQL", "Vue.js"],
      title: "Freelancer Collaborator - Junior Full Stack",
      start: "Sept 2025",
      end: "Oct 2025",
      description: (
        <>
          Developed and maintained a responsive web application using Vue.js, TypeScript, PHP, and PostgreSQL, ensuring efficient data handling and dynamic user interfaces.
          <ul className="list-inside list-disc">
            <li>Built reusable and scalable front-end components with Vue.js and TypeScript.</li>
            <li>Integrated RESTful APIs and backend services using PHP to fetch and manage application data.</li>
            <li>Ensured responsive design and cross-browser compatibility for seamless user experience.</li>
            <li>Collaborated with designers and backend developers to implement features aligned with business requirements.</li>
            <li>Maintained clean, modular, and maintainable code following modern front-end and full-stack best practices.</li>
          </ul>
        </>
      ),
    },
    {
      company: "STWAR Studios",
      link: "",
      badges: ["Remote", "React", "JavaScript", "TypeScript", "Node.js"],
      title: "Junior Full Stack Web Developer",
      start: "Jul 2024",
      end: "Feb 2025",
      description: (
        <>
          Contributed to the development of a blockchain-based film funding platform using React, JavaScript, CSS, TypeScript, and Node.js.
          <ul className="list-inside list-disc">
            <li>Developed and maintained responsive front-end components and interfaces with React and TypeScript</li>
            <li>Integrated backend services and RESTful APIs using Node.js to manage platform data</li>
            <li>Collaborated with senior developers to implement new features and resolve bugs</li>
            <li>Assisted in testing and debugging to ensure application performance and reliability</li>
            <li>Followed best practices for clean, maintainable, and scalable code across the stack</li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "React", "JavaScript", "TypeScript", "Figma", "Tailwind CSS", "UX/UI", "Design Web", "CSS", "Firebase", "PostgreSQL",
    "Vercel", "Git / GitHub", "JSON", "Chatbots", "Error Handling", "PHP", "HTML", "Reusable Components",
    "Docker", "Postman", "Code Reviews", "Python", "Mongo DB", "n8n", "Lazy Loading", "Supabase", "Performance Optimization", "Node.js", 
    "Vite.js", "SQL", "Motion", "Clean Code", "Express.js", "AI Integration", "RESTful API", 
    "C#", "Machine Learning", "Scripts"
  ],
  projects: [
    {
      title: "Test Movie Web",
      techStack: ["React", "React Hooks", "Redux", "PostgreSQL", "API Fetch", "JavaScript", "Responsive", "CSS"],
      description:
        "This site allows you to browse the most popular movies and actors from the public tmdb API. You can also get to know each of the above better on the details pages.",
      link: {
        label: "Test Movie Web",
        href: "https://github.com/PatriciaOsuna/Test",
      },
    },
    {
      title: "Rick and Morty App",
      techStack: ["React", "React Hooks", "React Context", "Axios", "JavaScript", "Tailwind CSS", "PostgreSQL", "API Fetch"],
      description:
        "This site allows you to browse the most popular characters from the public Rick and Morty API. You can also get to know each character better on their detailed card.",
      link: {
        label: "Rick and Morty App",
        href: "https://github.com/PatriciaOsuna/Context",
      },
    },
    {
      title: "Minimalist Portfolio",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly portfolio template with a focus on readability and clean design.",
      link: {
        label: "Minimalist Portfolio",
        href: "https://github.com/PatriciaOsuna/Resume",
      },
    },
  ],
} as const;
