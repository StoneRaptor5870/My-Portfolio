import {
  logo,
  backend,
  web,
  github,
  menu,
  close,
  python,
  wallet,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  geniegig,
  gromo,
  fightinggame,
  weather,
  videochat,
  tripsntours,
  forkify,
  mysql,
  mapworkout,
  udteschool,
  nextjs,
  prisma,
  docker,
  kubernetes,
  cicd,
  postgres,
  aws,
  redis
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Designer",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "CI/CD",
    icon: cicd,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Redis",
    icon: redis,
  }
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "GenieGig",
    icon: geniegig,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Conceptualised and implemented a freelancing platform with Node.js. It was able to manage an average daily traffic of 150+ users.",
      "Got an opportunity to work on the business development front and boosted the monthly revenue by 18%.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "GroMo",
    icon: gromo,
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: [
      "Worked on the Full Stack Development of Management Information System (MIS) application and enhanced the payout process.",
      "Developed Point of Sale (POS) Exam microservice in Typescript.",
      "Implemented the stories microservice to be used by gromo app users, it increased the DAU by 20%.",
      "Conceptualised and implemented the lead rejection mechanism for gromo users.",
      "Ideated the product development for insurance automation by working on APIs, database documentation and user journey for various insurances.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "UDT eSchool",
    icon: udteschool,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Technology stack: Javascript, React.js, Node.js, Python, SQL, MongoDB, Amazon Web Services (AWS), CI/CD.",
      "Accelerated the notification service with AWS Lambda to continuously send notification pings to more than 40 partner schools resulting 20% increase in partner retention and 45% increase in service uptime.",
      "Produced various reports generation services increasing the efficiency of partner schools by 23%.",
      "Executed the transition of frontend code from vanilla JavaScript to React.js and Redux.js, leading to a 50% reduction in code complexity, which streamlined future feature development and improved overall maintainability.",
      "Established automated testing protocols within the CI/CD pipelines, resulting in a decrease of critical bugs by 40% in production releases; the new process is now utilized by over 15 developers in the tech department.",
      "Revamped backend services to align with specific school requirements, resulting in a 40% reduction in response time for administrative queries and enhancing user satisfaction among 1,000+ students and faculty"
    ],
  },
];

const projects = [
  {
    name: "Wallet Application",
    description:
      "Engineered an intuitive wallet app featuring seamless peer-to-peer and peer-to-merchant transfers, incorporating bank transfers alongside transaction trend visualisations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "green-text-gradient",
      },
    ],
    image: wallet,
    source_code_link: "https://github.com/StoneRaptor5870/wallet-app",
    source_proj_link: "https://wallet-app-user-app.vercel.app/signup",
  },
  {
    name: "Trips n Tours",
    description:
      "A travel agency web application with user authorization and authentication, payments gateway with stripe, geolocation with leaflet, brevo for emails.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripsntours,
    source_code_link: "https://github.com/StoneRaptor5870/tours-n-trip",
    source_proj_link: "https://tours-n-trip.vercel.app/",
  },
  {
    name: "Les Connect",
    description:
      "Video calling web application with bi directional real time communication using PeerJS, socket.io and Web RTC.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "PeerJS API",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: videochat,
    source_code_link: "https://github.com/StoneRaptor5870/VideoChat",
    source_proj_link: "https://video-chat-nv.netlify.app/",
  }
];

const moreProj = [
  {
    name: "Check Weather",
    description:
      "An API based weather app that forecasts weather condition on hourly and daily basis by fetching your current location. It has a search functionality to show you the weather condition of any place on the globe.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "OpenWeatherMap API",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/StoneRaptor5870/weatherapp",
    source_proj_link: "https://weatherapp-ochre-eight.vercel.app/",
  },
  {
    name: "Recipe Application",
    description:
      "An API based recipe application that searches and renders recipe, with the function that allows for uploading the recipes and bookmarking favourites.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/StoneRaptor5870/recipe-application",
    source_proj_link: "https://recipe-application-nischay.netlify.app/",
  },
  {
    name: "Map Workouts",
    description:
      "a web app in which you can add your workout on your designated location pin. Used geolocation, local storage API and leaflet/open street view library for map.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: mapworkout,
    source_code_link: "https://github.com/StoneRaptor5870/Map-your-workout",
    source_proj_link: "https://mapyourworkout.netlify.app/",
  },
  {
    name: "2 Player Fighting Game",
    description:
      "A web game in which 2 players fight and perform actions to deprive each other’s health bar in the given time limit.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: fightinggame,
    source_code_link: "https://github.com/StoneRaptor5870/FightingGame",
    source_proj_link: "https://fighting-game-nv.netlify.app/",
  },
];
export { services, technologies, experiences, projects, moreProj };
