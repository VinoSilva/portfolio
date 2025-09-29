const StorySection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        My Story<span className="text-primary">.</span>
      </h2>
      <div className="mt-10 flex flex-col gap-4">
        <p>
          I was a game programmer at Streamline Studios early in my career
          before transitioning into web dev, creating dashboards and virtual
          events such as MYDCF 2021 and Level Up KL 2020.
        </p>
        <p>
          {" "}
          I moved on at GoKudos to get into mobile development and now am at
          KodeBaze where I deal with custom dashboards and platforms for
          Kodecrew, Drakkar and Aarsleff.
        </p>

        <p>
          {" "}
          In these roles, I’ve used React, Redux, Next. js, and others modern
          tools, always with focus on clean, performant code.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
