export const skills: {
  name: string;
  techs: { name: string; img_src?: string }[];
}[] = [
  {
    name: "Languages",
    techs: [
      { name: "C#" },
      {
        name: "Javascript",
        img_src: "/images/techs/FrontEnd/tech-javascript.webp",
      },
      {
        name: "Typescript",
        img_src: "/images/techs/FrontEnd/tech-typescript.webp",
      },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React", img_src: "/images/techs/FrontEnd/tech-react.webp" },
      {
        name: "Redux / Redux Toolkit",
        img_src: "/images/techs/FrontEnd/tech-redux.webp",
      },
      { name: "Responsive Design" },
      { name: "Component Libraries" },
    ],
  },
  {
    name: "Backend",
    techs: [
      {
        name: "ASP.NET Core",
        img_src: "/images/techs/BackEnd/tech-asp-net.webp",
      },
      { name: "ASP.NET Core Web API" },
      { name: ".NET" },
      { name: "Node JS", img_src: "/images/techs/BackEnd/tech-node-js.webp" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "Background Jobs" },
      { name: "Serverless" },
    ],
  },
  {
    name: "Databases & ORMs",
    techs: [
      { name: "PostgreSQL", img_src: "/images/techs/BackEnd/postgresql.webp" },
      { name: "Entity Framework Core" },
      { name: "Prisma" },
      { name: "Sequelize" },
      { name: "TypeORM" },
      { name: "FaunaDB" },
      { name: "Query Optimization" },
    ],
  },
  {
    name: "Security & Auth",
    techs: [
      { name: "Microsoft Entra ID (Azure AD)" },
      { name: "OAuth 2.0" },
      { name: "JWT" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    name: "Cloud & DevOps",
    techs: [
      {
        name: "Azure Devops",
        img_src: "/images/techs/DevOps/tech-azure-devops.webp",
      },
      { name: "Azure Pipelines" },
      { name: "Azure Artifacts" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    name: "Practices & Tools",
    techs: [
      { name: "System Design" },
      { name: "Software Architecture" },
      { name: "Code Review" },
      { name: "Unit Testing" },
      { name: "AI-Assisted Development (Claude)" },
    ],
  },
  {
    name: "Soft Skills",
    techs: [
      { name: "Technical Leadership" },
      { name: "Technical Roadmapping" },
      { name: "Mentoring" },
      { name: "Stakeholder Management" },
      { name: "Collaboration" },
      { name: "Communication" },
    ],
  },
  {
    name: "Spoken Languages",
    techs: [{ name: "English (Fluent)" }, { name: "Malay (Fluent)" }],
  },
];
