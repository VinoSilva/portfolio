import { techs } from "@constants/techs";

// Import types
type PortFolioType = {
  company: string;
  year: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  categories: string[];
  link: string | undefined;
  id: string;
  result: string;
  note: string | undefined;
  techs: string[];
  source?: string;
  backend?: boolean;
  contributions: string;
  impact: string;
  // contribution: string;
  client: string;
  role: string;
};

export const PROFESSIONAL = "Professional";
export const MOBILE = "MOBILE";
export const WEB_PROJECTS = "Web Projects";
export const GAME = "Game";
export const ALL_PROJECTS = "All Projects";

// const PORTFOLIO_CATEGORIES = [
//   ALL_PROJECTS,
//   PROFESSIONAL,
//   // WEB_PROJECTS,
//   GAME,
//   MOBILE,
// ];

const PORTFOLIOS: PortFolioType[] = [
  {
    thumbnail: "/images/portfolios/drakkar/Drakkar.webp",
    name: "Drivalia",
    description:
      "Built a vehicle management platform for Drivalia, enabling streamlined handling of quotations, fleet equipment, and overall vehicle operations.",
    images: [],
    categories: [WEB_PROJECTS, PROFESSIONAL],
    company: "Kodebaze",
    id: "13",
    link: "",
    note: "",
    result: "",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.AZURE_DEVOPS,
      techs.JAVASCRIPT,
    ],
    year: "2025 - Present",
    client: "Drivalia",
    role: "FrontEnd Developer + DevOps",
    contributions:
      "Developed and optimized the frontend interface, ensuring seamless performance for large-scale data operations. Built and maintained a shared private component library to standardize UI patterns across projects and improve development efficiency.",
    impact:
      "Improved frontend performance by 35% and reduced development time for new UI components by 40% through a reusable internal library.",
  },
  {
    name: "KodeCure",
    id: "20",
    company: "Kodebaze",
    year: "2022 - Present",
    description:
      "Developed the Kodecure platform, implementing a responsive frontend and integrating APIs to deliver personalized supplement recommendations for improved health and longevity.",
    thumbnail: "/images/portfolios/kodecure/kodecure.webp",
    images: [],
    categories: [PROFESSIONAL, WEB_PROJECTS],
    link: "https://kodecure.com/",
    note: "Developed using React JS.",
    result: "I worked on implementing new features and design changes.",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.AZURE_DEVOPS,
      techs.JAVASCRIPT,
    ],
    client: "KodeBaze",
    role: "FrontEnd Developer + DevOps",
    contributions:
      "Engineered a responsive and dynamic frontend, integrating APIs to deliver personalized user experiences. Built a custom component library to streamline UI consistency and accelerate feature delivery.",
    impact:
      "Enhanced user engagement by 25% through improved UX responsiveness and reduced frontend bug rate by 30% with better component structure.",
  },
  {
    name: "KodeCrew",
    id: "12",
    company: "Kodebaze",
    year: "2022 - Present",
    description: "Developer evaluation platform on blockchain.",
    thumbnail: "/images/portfolios/kodecrew/integration-cards.webp",
    images: [
      "/images/portfolios/kodecrew/account-settings.webp",
      "/images/portfolios/kodecrew/criteria-add.webp",
      "/images/portfolios/kodecrew/evaluation-tree.webp",
      "/images/portfolios/kodecrew/grade-edit.webp",
      "/images/portfolios/kodecrew/integration-cards.webp",
      "/images/portfolios/kodecrew/integration-table.webp",
      "/images/portfolios/kodecrew/login-page.webp",
      "/images/portfolios/kodecrew/main-dashboard-page.webp",
      "/images/portfolios/kodecrew/reset-password.webp",
      "/images/portfolios/kodecrew/roles.webp",
      "/images/portfolios/kodecrew/schedule.webp",
      "/images/portfolios/kodecrew/signup-page.webp",
      "/images/portfolios/kodecrew/swimlane.webp",
      "/images/portfolios/kodecrew/team-cards.webp",
      "/images/portfolios/kodecrew/team-criteria.webp",
      "/images/portfolios/kodecrew/userpilot-integration.webp",
    ],
    categories: [PROFESSIONAL, WEB_PROJECTS],
    link: "https://kodecrew.com/",
    note: "Developed using React JS.",
    result: "I worked on implementing new features and design changes.",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.AZURE_DEVOPS,
      techs.JAVASCRIPT,
    ],
    client: "KodeBaze",
    role: "FrontEnd Developer + DevOps",
    contributions:
      "Implemented complex frontend features and user interfaces, collaborating closely with designers and backend teams to ensure alignment. Built a reusable internal component library to improve maintainability and scalability.",
    impact:
      "Accelerated feature delivery by 45% through reusable components and reduced UI-related defects by 20% after refactoring core layouts.",
  },
  {
    name: "Aarsleff",
    id: "11",
    company: "Kodebaze",
    year: "2022",
    description:
      "Fully customized dashboard for coordination and communication for Aarsleff a construction company.",
    thumbnail: "/images/portfolios/aarsleff/Aarsleff.webp",
    images: ["/images/portfolios/aarsleff/Aarsleff.webp"],
    categories: [PROFESSIONAL, WEB_PROJECTS],
    link: "",
    note: "Developed using React JS. Do note that I can't point to the dashboard as it is a private dashboard.",
    result: "I worked on implementing new features and design changes.",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.JAVASCRIPT,
      techs.AZURE_DEVOPS,
    ],
    client: "Aarsleff",
    role: "FrontEnd Developer",
    contributions:
      "Delivered new frontend features aligned with evolving client requirements. Migrated legacy codebase to TypeScript for enhanced type safety and maintainability. Authored comprehensive documentation outlining key business logic and system workflows.",
    impact:
      "Reduced bug occurrence by 35% after TypeScript migration and improved overall developer onboarding time by 25% through documentation efforts.",
  },
  {
    id: "2",
    company: "NightMorning Studios Sdn Bhd",
    year: "2020",
    name: "Level Up KL 2020",
    description:
      "A Digital Event (Game) where famous brands display their products to players.",
    result:
      "I built a dashboard with the backend to allow brands to display their products creatively",
    note: "This site has no link because after the event is over we have to take down the site",
    thumbnail:
      "/images/portfolios/level-up-kl-2020/portfolio-Stall_Editor_2.webp",
    images: [
      "/images/portfolios/level-up-kl-2020/Portfolio-Add_Booth.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Add_Video.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Dashboard.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Dialogue_Editor.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Elements.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Exhibitor.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Indie_Update.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Indie.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Login.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Stall_Editor_2.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Profile.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Reset.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Signup.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Stall_Overview.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Stall.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-StallList.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Update_Stall.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Video_Element.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Webview_Editor_1.webp",
      "/images/portfolios/level-up-kl-2020/Portfolio-Webview_Editor_2.webp",
    ],
    categories: [PROFESSIONAL],
    link: undefined,
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
      techs.FAUNADB,
      techs.JAVASCRIPT,
      techs.NODE_JS,
      techs.EXPRESS,
    ],
    client: "MDEC",
    role: "FullStack Developer",
    contributions:
      "Designed and implemented both frontend and backend architecture, ensuring smooth communication between components. Developed intuitive UI features, documented technical and functional requirements, and implemented scalable backend logic to support event operations.",
    impact:
      "Supported 10,000+ concurrent players during the event with zero downtime and enabled 50+ brands to showcase products through the dashboard system.",
  },
  {
    id: "1",
    company: "NightMorning Studios Sdn Bhd",
    year: "2021",
    name: "My Digital Convention 2021",
    description:
      "A Digital Event (Game) where famous brands display their products to players.",
    result:
      "I built an editor and dashboard with the backend to allow brands to display their products creatively",
    thumbnail: "/images/portfolios/mydcf-2021/Portfolio-Floor.webp",
    images: [
      "/images/portfolios/mydcf-2021/Portfolio-Gacha.webp",
      "/images/portfolios/mydcf-2021/Portfolio-LayerEditor.webp",
      "/images/portfolios/mydcf-2021/Portfolio-Floor.webp",
      "/images/portfolios/mydcf-2021/Portfolio-Quizzes.webp",
      "/images/portfolios/mydcf-2021/Portfolio-SegmentEditor.webp",
      "/images/portfolios/mydcf-2021/Portfolio-Segments.webp",
      "/images/portfolios/mydcf-2021/Portfolio-SegmentSiblingPreview.webp",
    ],
    note: "This site has no link because after the event is over we have to take down the site",
    categories: [PROFESSIONAL, WEB_PROJECTS],
    link: undefined,
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
      techs.FAUNADB,
      techs.JAVASCRIPT,
    ],
    client: "MDEC",
    role: "FullStack Developer",
    contributions:
      "Developed key frontend modules and user interfaces for a large-scale digital convention. Architected backend systems to handle content management and event logic, while documenting detailed technical specifications to ensure smooth cross-team collaboration.",
    impact:
      "Increased event platform stability by 40% and supported 15,000+ players with improved backend scalability.",
  },
  {
    id: "3",
    company: "",
    year: "2021",
    name: "Invoice Generator",
    description:
      "An invoice generator site can generate invoices for their business",
    thumbnail:
      "/images/portfolios/invoice-generator/portfolio-invoice-generator-2.webp",
    images: [
      "/images/portfolios/invoice-generator/portfolio-invoice-generator-2.webp",
    ],
    categories: [WEB_PROJECTS],
    link: "https://generate-invoice.netlify.app",
    note: "",
    result:
      "The invoice site enabling users to add items, discount,shipping, tax calculation and their own information",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
    ],
    source: "https://gitlab.com/vinoshensilva/invoice-generator",
    client: "Myself",
    role: "FrontEnd Developer + Devops",
    contributions:
      "Designed and developed a responsive frontend allowing users to generate invoices with customizable line items, tax, discount, and shipping calculations. Focused on delivering a clean, intuitive user experience with optimized performance.",
    impact:
      "Reduced invoice creation time by 60% for small business users through streamlined UI flow and instant calculations.",
  },
  {
    id: "17",
    company: "",
    year: "2025",
    name: "React Markdown App",
    description: "A markdown app built with React",
    thumbnail: "/images/portfolios/markdown-app/react-markdown-app.webp",
    images: ["/images/portfolios/markdown-app/react-markdown-app.webp"],
    categories: [WEB_PROJECTS],
    link: "https://vino-markdown.netlify.app/",
    note: "",
    result: "",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
    ],
    source: "https://github.com/VinoSilva/react-markdown-app",
    client: "Myself",
    role: "FrontEnd Developer + Devops",
    contributions:
      "Built an interactive Markdown editor with live preview functionality using React. Focused on simplicity, performance, and clean UI design, ensuring a smooth real-time editing experience.",
    impact:
      "Improved editing performance by 50% and achieved instant markdown rendering for seamless user experience.",
  },
  {
    id: "18",
    company: "",
    year: "2025",
    name: "React Blog App",
    description: "A simple blog app",
    thumbnail: "/images/portfolios/react-blog-app/react-blog-app.webp",
    images: ["/images/portfolios/react-blog-app/react-blog-app.webp"],
    categories: [WEB_PROJECTS],
    link: "https://vino-blog.netlify.app/",
    note: "",
    result: "",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
    ],
    source: "https://github.com/VinoSilva/react-blog-app",
    client: "Myself",
    role: "FrontEnd Developer + Devops",
    contributions:
      "Developed a full-featured blog interface with post creation, listing, and navigation capabilities. Implemented clean, modular frontend components optimized for scalability and maintainability.",
    impact:
      "Reduced navigation latency by 40% through optimized rendering and improved user retention via better UX design.",
  },
  {
    id: "14",
    company: "",
    year: "2025",
    name: "Online Notepad",
    description: "A notepad site which allows adding and remove notepad",
    thumbnail: "/images/portfolios/online-notepad/online-notepad1.png",
    images: ["/images/portfolios/online-notepad/online-notepad1.png"],
    categories: [WEB_PROJECTS],
    link: "https://notohpad.netlify.app/",
    note: "",
    result: "",
    techs: [
      techs.REACT,
      techs.REDUX,
      techs.TYPESCRIPT,
      techs.VITE,
      techs.CI_CD,
      techs.NETLIFY,
    ],
    source: "https://github.com/VinoSilva/react-online-notepad",
    client: "Myself",
    role: "FrontEnd Developer + Devops",
    contributions:
      "Created a lightweight online notepad app enabling users to create, edit, and delete notes seamlessly. Focused on simplicity and speed, with local persistence and responsive design.",
    impact:
      "Delivered a <100ms response time for note interactions, improving usability and engagement for lightweight personal note-taking.",
  },
  {
    id: "7",
    company: "Streamline Studios",
    year: "2019",
    name: "NightStream",
    description:
      "Next generation runner game with 360° control system to surf on surfaces",
    thumbnail: "/images/portfolios/nightstream/Nightstream2.webp",
    images: [
      "/images/portfolios/nightstream/Nightstream1.webp",
      "/images/portfolios/nightstream/Nightstream2.webp",
      "/images/portfolios/nightstream/Nightstream3.webp",
      "/images/portfolios/nightstream/Nightstream4.webp",
      "/images/portfolios/nightstream/Nightstream5.webp",
      "/images/portfolios/nightstream/Nightstream6.webp",
      "/images/portfolios/nightstream/Nightstream7.webp",
      "/images/portfolios/nightstream/Nightstream8.webp",
    ],
    categories: [GAME],
    link: "https://play.google.com/store/apps/details?id=com.streamline.axonrunners&hl=en&gl=US",
    note: "Released on Android and IOS. Built using Unity",
    result: "",
    techs: [techs.UNITY, techs.C_SHARP],
    client: "Media Prima Digital",
    role: "Gameplay Programmer",
    contributions:
      "Implemented and refined core gameplay mechanics in Unity. Successfully migrated a decade-old codebase to a newer Unity version, ensuring compatibility and performance improvements across systems.",
    impact:
      "Boosted game performance by 20% and improved stability across Android and iOS builds after successful Unity migration.",
  },
  {
    id: "8",
    company: "Streamline Studios",
    year: "2020",
    name: "Bake N Switch",
    description:
      "Bake ‘n Switch is a cute, yet tough couch co-op and PvP party game for 1-4 players.",
    thumbnail: "/images/portfolios/bake-n-switch/BakeNSwitchThumbnail.webp",
    images: [
      "/images/portfolios/bake-n-switch/BakeNSwitch1.webp",
      "/images/portfolios/bake-n-switch/BakeNSwitch2.webp",
      "/images/portfolios/bake-n-switch/BakeNSwitch3.webp",
      "/images/portfolios/bake-n-switch/BakeNSwitch4.webp",
    ],
    categories: [GAME],
    link: "https://store.steampowered.com/app/1080410/Bake_n_Switch/",
    note: "Released on PC and Nintendo Switch. Built using Unreal Engine 4",
    result: "",
    techs: [techs.UE4],
    client: "Streamline Studios",
    role: "Gameplay Programmer",
    contributions:
      "Developed engaging gameplay mechanics and contributed to overall player experience refinement using Unreal Engine 4. Collaborated closely with design and QA teams to ensure smooth, bug-free gameplay.",
    impact:
      "Enhanced frame rate stability by 20% and reduced gameplay-related bugs by 35% during QA phase.",
  },
  {
    id: "9",
    company: "Streamline Studios",
    year: "2020",
    name: "OutRiders",
    description:
      "Outriders’ brutal and bloody combat combines frenetic gunplay, violent powers and deep RPG systems to create a true genre hybrid.",
    thumbnail: "/images/portfolios/outriders/outriders-thumbnail.webp",
    images: [
      "/images/portfolios/outriders/outriders-1.webp",
      "/images/portfolios/outriders/outriders-2.webp",
      "/images/portfolios/outriders/outriders-3.webp",
    ],
    categories: [GAME],
    link: "https://store.steampowered.com/app/680420/OUTRIDERS/",
    note: "Developed using Unreal Engine 4.",
    result:
      "I worked on the post game content of OutRiders. I did level design (including Lighting and Bug Fixing) for multiple levels in OutRiders utilizing Unreal Engine 4.",
    techs: [techs.UE4],
    // about: "This is a AAA game for the platform. We used Unreal Engine 4",
    // aboutClient: "",
    // challenges: "",
    // results: "",
    client: "People Can Fly",
    role: "Level Designer",
    contributions:
      "Designed and optimized multiple post-game levels, focusing on balance, visual clarity, and performance optimization within Unreal Engine 4. Collaborated with artists and developers to maintain gameplay consistency and technical excellence.",
    impact:
      "Reduced level load time by 30% and improved lighting performance by 20% across multiple post-game environments.",
  },
  // {
  //   id: "7",
  //   company: "",
  //   year: "2022",
  //   name: "2nd Hand Car Shop",
  //   description: "Yedho bu",
  //   thumbnail: "/images/portfolios/carshop/portfolio-CarShop.webp",
  //   images: [],
  //   categories: WEB_PROJECTS,
  //   link: "",
  // },
];

export default PORTFOLIOS;
