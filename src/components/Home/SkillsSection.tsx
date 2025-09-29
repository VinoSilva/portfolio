const skills: { name: string; techs: { name: string; img_src: string }[] }[] = [
  {
    name: "Frontend",
    techs: [
      {
        name: "React",
        img_src: "/images/techs/FrontEnd/tech-react.webp",
      },
      {
        name: "Javascript",
        img_src: "/images/techs/FrontEnd/tech-javascript.webp",
      },
      {
        name: "Typescript",
        img_src: "/images/techs/FrontEnd/tech-typescript.webp",
      },
      {
        name: "Redux",
        img_src: "/images/techs/FrontEnd/tech-redux.webp",
      },
    ],
  },
  {
    name: "Backend",
    techs: [
      {
        name: "Postgresql",
        img_src: "/images/techs/BackEnd/postgresql.webp",
      },
      {
        name: "ASP.Net",
        img_src: "/images/techs/BackEnd/tech-asp-net.webp",
      },
      {
        name: "Postgresql",
        img_src: "/images/techs/BackEnd/tech-node-js.webp",
      },
    ],
  },
  {
    name: "Devops",
    techs: [
      {
        name: "Postgresql",
        img_src: "/images/techs/DevOps/tech-azure-devops.webp",
      },
      {
        name: "Docker",
        img_src: "/images/techs/DevOps/tech-docker.webp",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Skills<span className="text-primary">.</span>
      </h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(({ name, techs }) => {
            return (
              <div>
                <h4 className="text-3xl font-bold font-poppins">{name}</h4>
                <div className="flex flex-col gap-4 mt-5">
                  {techs.map(({ img_src, name }) => {
                    return (
                      <div className="flex items-center gap-4">
                        <img src={img_src} className="w-10 h-10 rounded-full" />
                        <p className="font-semibold font-montserrat">{name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
