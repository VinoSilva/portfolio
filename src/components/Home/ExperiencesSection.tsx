const experiences: {
  company: string;
  position: string;
  timeline: string;
  tech: string;
  image: string;
  description: string;
  id: string | number;
}[] = [
  {
    company: "KodeBaze",
    position: "React.JS Developer",
    timeline: "December 2022 - Present",
    tech: "React JS",
    image: "/images/experiences/KodeCrew.webp",
    description:
      "I am working on our own developer evaluation platform named Kodecrew and a customized dashboard for Aarsleff.",
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
    position: "FullStack Developer",
    timeline: "April 2020 - May 2022",
    tech: "Express.js, Netlify, FaunaDB, Next.js, Tailwind CSS, React, Redux, GCP and Material UI",
    image: "/images/experiences/NightMorning.webp",
    description:
      "I worked on two major virtual events which are MYDCF 2021 and Level Up KL 2020. Built custom editor and dashboard which allowed clients to display their products for marketing.",
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
                <h4 className="font-semibold text-xl">
                  {exp.position} @{" "}
                  <span className="text-primary">{exp.company}</span>
                </h4>
                <h5 className=" text-gray-600 text-sm">{exp.timeline}</h5>

                <div className="text-gray-700 font-montserrat mt-4">
                  {exp.description}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default ExperiencesSection;
