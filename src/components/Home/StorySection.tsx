const StorySection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        My Story<span className="text-primary">.</span>
      </h2>
      <div className="mt-10 flex flex-col gap-4">
        <p>
          I was a game programmer at Streamline Studios early in my career
          before transitioning into web dev, creating dashboards for virtual
          events & games such as MYDCF 2021 and Level Up KL 2020.
        </p>
        <p>
          I moved on to GoKudos to get into mobile development and joined
          Kodebaze, where I grew from Senior Frontend Engineer and acting lead
          to Principal Full Stack Engineer, building platforms for Kodecrew,
          Drivalia and Aarsleff.
        </p>

        <p>
          Today I work across the stack with React, TypeScript, ASP.NET Core,
          Node.js and PostgreSQL, always with a focus on clean and performant
          code.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
