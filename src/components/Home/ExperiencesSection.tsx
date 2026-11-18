type Role = {
  position: string;
  timeline: string;
  highlights?: string[];
};

const experiences: {
  company: string;
  position: string;
  timeline: string;
  tech: string;
  image: string;
  description: string;
  highlights?: string[];
  roles?: Role[];
  id: string | number;
}[] = [
  {
    company: "Kodebaze",
    position: "Principal Full Stack Engineer",
    timeline: "December 2022 - Present",
    tech: "React, TypeScript, ASP.NET Core (C#), Express.js (Node.js), PostgreSQL and Azure DevOps",
    image: "/images/experiences/KodeCrew.webp",
    description:
      "I am leading several projects within Drivalia's fleet and vehicle management platform, which covers quotations, fleet equipment, and vehicle operations, including a monolith-to-services migration that cut API response times by over 50%. Previously, I worked on our own developer evaluation platform, Kodecrew, and a customized dashboard for Aarsleff.",
    roles: [
      {
        position: "Principal Full Stack Engineer",
        timeline: "October 2026 - Present",
        highlights: [
          "Own full-stack architecture and technology decisions across React/TypeScript front ends, ASP.NET Core (C#) and Express.js (Node.js) services, and PostgreSQL databases.",
          "Define the technical roadmap with product and engineering leadership, prioritizing platform modernization, security, and delivery velocity.",
          "Set cross-team engineering standards for API design, code review, and CI/CD, and mentor engineers across front-end and back-end work.",
        ],
      },
      {
        position: "Senior Frontend Engineer (Acting Lead)",
        timeline: "December 2022 - October 2026",
        highlights: [
          "Led the migration of a monolithic application to a service-based architecture using ASP.NET Core (C#) and Express.js (Node.js), reducing API response times by over 50%.",
          "Designed and built RESTful APIs and background jobs for data synchronization and processing, secured with Microsoft Entra ID (Azure AD), JWT/OAuth 2.0, and role-based access control (RBAC).",
          "Designed PostgreSQL schemas, optimized queries and indexes, and managed schema migrations with Entity Framework Core, Prisma, Sequelize, and TypeORM.",
          "Spearheaded the architecture of a shared library of 30+ reusable UI components published via Azure Artifacts, using Claude to generate boilerplate and unit tests, accelerating cross-team feature delivery by 40%.",
          "Architected Azure DevOps CI/CD pipelines on Ubuntu build agents to build and deploy front-end and back-end (.NET, Node.js) applications, reducing manual deployment overhead by 15+ hours weekly.",
          "Instituted code governance across a team of 8+ developers by enforcing branch policies, Husky pre-push hooks, and AI-assisted static analysis, catching 85% of linting and security issues before PR creation.",
          "Reduced technical debt while delivering high-impact features, resolving 100+ legacy dependency alerts and maintaining zero critical vulnerabilities without impacting sprint velocity.",
        ],
      },
    ],
    id: "1",
  },
  {
    company: "GoKudos",
    position: "Mobile Developer",
    timeline: "September 2022 - December 2022",
    tech: "React Native and Expo",
    image: "/images/experiences/GoKudos.webp",
    description: "I worked on a task management platform named GoKudos.",
    id: "2",
  },
  {
    company: "NightMorning Studios",
    position: "Full Stack Developer",
    timeline: "March 2020 - March 2022",
    tech: "Express.js, Netlify, FaunaDB, Next.js, Tailwind CSS, React, Redux, GCP and Material UI",
    image: "/images/experiences/NightMorning.webp",
    description:
      "I worked on two major virtual events which are MYDCF 2021 and Level Up KL 2020. Built custom editor and dashboard which allowed clients to display their products for marketing.",
    highlights: [
      "Owned the end-to-end development lifecycle as the sole engineer, architecting and building a full-stack custom game dashboard from scratch.",
      "Partnered directly with stakeholders to gather requirements, translating complex business needs into a functional, user-friendly technical solution.",
      "Engineered a full-stack architecture using React and Redux Toolkit for front-end state management, backed by an Express.js (Node.js) and FaunaDB server environment.",
    ],
    id: "3",
  },
  {
    company: "Streamline Studios",
    position: "Junior Game Programmer",
    timeline: "May 2018 - March 2020",
    tech: "Unity 3D (C#), Express.JS and Pug.js",
    image: "/images/experiences/Streamline.webp",
    description:
      "Worked on 3 games here which are NightStream, Bake N Switch and OutRiders.",
    id: "4",
  },
  {
    company: "Steelcase Malaysia",
    position: "Jr Application Engineer Internship",
    tech: "Unity, Project Tango, InDesign Script, Excel VBA,Javascript,CSS,HTML and Java",
    image: "/images/experiences/SteelCase.webp",
    timeline: "March 2017 - June 2017",
    description:
      "Worked on the following: a mobile AR app for space visualization, InDesign plugin, Excel VBA programs, XML extraction, and building a prototype chatbot using DialogFlow.",
    id: "5",
  },
];

import Stepper from "@components/shared/Stepper";

const Highlights = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-gray-700 text-xs md:text-base font-montserrat">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ExperiencesSection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Experiences<span className="text-primary">.</span>
      </h2>
      <div className="mt-10">
        <Stepper
          steps={experiences.map((exp) => ({
            title: exp.company,
            content: (
              <div>
                <h4 className="font-semibold text-base md:text-xl">
                  {exp.position} @{" "}
                  <span className="text-primary">{exp.company}</span>
                </h4>
                <h5 className=" text-gray-600 text-xs md:text-sm">
                  {exp.timeline}
                </h5>

                <div className="text-gray-700 text-xs md:text-base font-montserrat mt-4">
                  {exp.description}
                </div>
                {exp.highlights && <Highlights items={exp.highlights} />}
                {exp.roles?.map((role) => (
                  <div key={role.position} className="mt-6">
                    <h5 className="font-semibold text-sm md:text-lg">
                      {role.position}
                    </h5>
                    <h6 className="text-gray-600 text-xs md:text-sm">
                      {role.timeline}
                    </h6>
                    {role.highlights && <Highlights items={role.highlights} />}
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default ExperiencesSection;
