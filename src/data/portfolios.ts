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
  //   {
  //     name: "KodeCrew Mobile",
  //     id: "13",
  //     company: "Kodebaze",
  //     year: "2022",
  //     description: "Developer evaluation platform on blockchain.",
  //     thumbnail: "/images/portfolios/kodecrew-mobile/kodecrew-mobile1.webp",
  //     images: [
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile1.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile2.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile3.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile4.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile5.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile6.webp",
  //       "/images/portfolios/kodecrew-mobile/kodecrew-mobile7.webp",
  //     ],
  //     categories: [MOBILE],
  //     link: "https://apps.apple.com/us/app/kodecrew/id6444017012",
  //     note: "Developed using React Native and Expo.",
  //     result: "I worked on implementing new features and design changes.",
  //   },
  //   {
  //     name: "GoKudos",
  //     id: "10",
  //     company: "GoKudos Sdn Bhd",
  //     year: "2022",
  //     description:
  //       "GoKudos provides a project management solution for all divisions and a collaborative tool for businesses that want to focus on what matters and automate operational processes.",
  //     thumbnail: "/images/portfolios/gokudos/screen-10.webp",
  //     images: [
  //       "/images/portfolios/gokudos/screen-1.webp",
  //       "/images/portfolios/gokudos/screen-2.webp",
  //       "/images/portfolios/gokudos/screen-3.webp",
  //       "/images/portfolios/gokudos/screen-4.webp",
  //     ],
  //     categories: [MOBILE],
  //     link: "https://play.google.com/store/apps/details?id=io.gokudos.app",
  //     note: "Developed using React Native and Expo.",
  //     result:
  //       "I worked on implementing invoices, OTA Updates among many other features.",
  //   },

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
    ],
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
  },
  // {
  //   id: "4",
  //   company: "",
  //   year: "2021",
  //   name: "Pomodoro",
  //   description: "A simple pomodoro web app with timer",
  //   thumbnail: "/images/portfolios/pomodoro/portfolio-Pomodoro.webp",
  //   note: "",
  //   result: "",
  //   images: ["/images/portfolios/pomodoro/portfolio-Pomodoro.webp"],
  //   categories: WEB_PROJECTS,
  //   link: "",
  // },
  // {
  //   id: "5",
  //   company: "",
  //   year: "2021",
  //   name: "Todo",
  //   description: "A simple todo app with localstorage used for persistence.",
  //   thumbnail: "/images/portfolios/todo/portfolio-Todo.webp",
  //   images: ["/images/portfolios/todo/portfolio-Todo.webp"],
  //   categories: WEB_PROJECTS,
  //   link: "https://vino-todo.netlify.app/",
  //   note: "",
  //   result: "",
  // },
  // {
  //   id: "6",
  //   company: "",
  //   year: "2021",
  //   name: "Calculator",
  //   description: "A simple calculator web app",
  //   thumbnail: "/images/portfolios/calculator/portfolio-Calculator.webp",
  //   images: [],
  //   categories: WEB_PROJECTS,
  //   link: "",
  //   note: "",
  //   result: "",
  // },
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
