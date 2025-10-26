import { skills } from "@constants/skills";

const SkillsSection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Skills<span className="text-primary">.</span>
      </h2>
      <div className="mt-10">
        <div className="flex flex-col gap-6">
          {skills.map(({ name, techs }) => {
            return (
              <div key={name}>
                <h4 className="text-3xl font-bold font-poppins">{name}</h4>
                <div className="flex flex-wrap gap-4 mt-5">
                  {techs.map(({ img_src, name }) => {
                    return (
                      <div
                        key={name}
                        className="flex items-center gap-6 shadow-primary border-t-primary border-t-[1px] p-4 rounded-2xl"
                      >
                        <img
                          src={img_src}
                          className="w-10 h-10 rounded-full"
                          alt={`tech-${name}`}
                        />
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
