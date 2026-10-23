export type EventStatus = "Tabling Event" | "Corporate Event" | "Social Event" | "Professional Development";

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  description: string;
};

export type PostItem = {
  title: string;
  category: string;
  summary: string;
};

export type Leader = {
  name: string;
  role: string;
  focus: string;
  linkedin: string;
};

export type SponsorLevel = {
  name: string;
  price: string;
  features: string[];
};

export type EventPhoto = {
  src: string;
  alt: string;
  label: string;
};

export const stats = [
  { value: "315+", label: "undergrad members" },
  { value: "1,160+", label: "members in network" },
  { value: "35-40", label: "events each year" },
  { value: "2017", label: "founded at UMD" },
];

export const events: EventItem[] = [
  {
    title: "FreshCon",
    date: "August 29th",
    time: "2:00PM-5:00PM",
    location: "UMD campus",
    status: "Tabling Event",
    description:
      "Stop by the Code: BLACK table to meet the community, learn about upcoming events, and get connected before the semester gets moving.",
  },
  {
    title: "Code: BLACK Welcome Back Social",
    date: "September 8th",
    time: "TBA",
    location: "UMD campus",
    status: "Social Event",
    description:
      "A low-pressure social for new and returning members to reconnect, meet friends, and start the semester with the Code: BLACK community.",
  },
  {
    title: "First Look Fair",
    date: "September 10th",
    time: "10:00AM-3:00PM",
    location: "UMD campus",
    status: "Tabling Event",
    description:
      "Find Code: BLACK at the First Look Fair to meet board members, ask questions, and join the organization for the year.",
  },
  {
    title: "Code: BLACK x Bloomberg Technical Workshop",
    date: "September 18th",
    time: "TBA",
    location: "UMD campus",
    status: "Corporate Event",
    description:
      "A corporate technical workshop with Bloomberg focused on practical engineering skills, career insight, and member development.",
  },
  {
    title: "TTP Kickoff",
    date: "September 21st",
    time: "TBA",
    location: "UMD campus",
    status: "Professional Development",
    description:
      "A professional development kickoff for members preparing for technical programs, recruiting season, and career growth.",
  },
  {
    title: "Code: BLACK x Amazon BEN 2 in 1 Gen AI + Cloud Workshop",
    date: "October 6th",
    time: "6:00PM-8:00PM",
    location: "UMD campus",
    status: "Corporate Event",
    description:
      "A hands-on corporate workshop with Amazon BEN focused on generative AI, cloud fundamentals, and practical technical learning.",
  },
];

export const posts: PostItem[] = [
  {
    title: "Jane Street IN FOCUS Program",
    category: "Opportunity",
    summary:
      "A highlighted early-career program for students exploring quantitative finance and technical problem solving.",
  },
  {
    title: "Coding it Forward Fellowship",
    category: "Fellowship",
    summary:
      "A civic tech fellowship opportunity for students interested in software, data, product, and public impact.",
  },
  {
    title: "Engage Program @ Pinterest",
    category: "Career",
    summary:
      "A recruiting opportunity shared with the Code: BLACK community for students exploring product, design, and engineering careers.",
  },
];

export const leaders: Leader[] = [
  {
    name: "Peter Njoroge",
    role: "President",
    focus:
      "Senior Computer Science major interested in full-stack software engineering, sports, the gym, and music.",
    linkedin: "https://www.linkedin.com/in/peter-njoroge13/",
  },
  {
    name: "Emmanuel Michael",
    role: "Vice President",
    focus:
      "Senior Computer Science major focused on software engineering, with interests in basketball, public service, and movies.",
    linkedin: "https://www.linkedin.com/in/emmanuel-mm/",
  },
  {
    name: "Daniel Odetoye",
    role: "Treasurer",
    focus:
      "Junior Computer Science major interested in software development, UI/UX design, photography, basketball, and games.",
    linkedin: "https://www.linkedin.com/in/danielodetoye/",
  },
  {
    name: "Eniola Aloba",
    role: "Co-Event Coordinator",
    focus:
      "Sophomore Computer Science major exploring software in fintech, with interests in arts and crafts, crocheting, and cooking.",
    linkedin: "https://www.linkedin.com/in/eniolaloba/",
  },
  {
    name: "Audrey Nguezet Gouanet",
    role: "Co-Event Coordinator",
    focus:
      "Junior pursuing software engineering and AI, with interests in dancing, working out, and reading.",
    linkedin: "https://www.linkedin.com/in/audrey-nguezet-gouanet",
  },
  {
    name: "Oluwatoyin Olaniyi",
    role: "Secretary",
    focus:
      "Sophomore Computer Science major and brand owner exploring the intersection of technology, business, and finance.",
    linkedin: "https://www.linkedin.com/in/oluwatoyin-olaniyi/",
  },
  {
    name: "Omotayo Alle",
    role: "Corporate Outreach Coordinator",
    focus:
      "Senior pursuing product management, with interests in pool, basketball, soccer, and dancing.",
    linkedin: "https://www.linkedin.com/in/omotayo-alle/",
  },
  {
    name: "Kaelyn Naih",
    role: "Co-Graphic Designer",
    focus:
      "Junior pursuing software development, with interests in traveling, graphic design, and dance.",
    linkedin: "https://www.linkedin.com/in/kaelyn-naih-5a8bb2338",
  },
  {
    name: "Nzinga Philbert",
    role: "Co-Graphic Designer",
    focus:
      "Junior pursuing cybersecurity, with interests in dancing, drawing, the gym, and TV shows.",
    linkedin: "https://www.linkedin.com/in/nzinga-philbert",
  },
  {
    name: "Gabrielle Annan",
    role: "Social Media Coordinator",
    focus:
      "Sophomore pursuing cybersecurity and data analytics, with interests in photography and building Lego sets.",
    linkedin: "https://www.linkedin.com/in/gabrielle-annan",
  },
  {
    name: "Victor Olatunji",
    role: "Historian",
    focus:
      "Sophomore pursuing software engineering, with interests in football, sports, and the gym.",
    linkedin: "https://www.linkedin.com/in/victor-olatunji-914320345/",
  },
  {
    name: "Promise Adekusibe",
    role: "Co-Programming Coordinator",
    focus:
      "Sophomore pursuing software engineering and data analytics, with interests in modeling, weightlifting, drumming, cooking, running, Bible studies, music, and content creation.",
    linkedin: "https://www.linkedin.com/in/promise-adekusibe",
  },
  {
    name: "Maia K. Bell",
    role: "Co-Programming Coordinator",
    focus:
      "Junior pursuing cybersecurity, with interests in lifting weights, yoga, and anime.",
    linkedin: "https://www.linkedin.com/in/maiakbell",
  },
  {
    name: "Grace Audu",
    role: "Co-Mentorship Coordinator",
    focus:
      "Sophomore pursuing machine learning, with interests in softball, guitar, and sewing.",
    linkedin: "https://www.linkedin.com/in/graceaudu",
  },
  {
    name: "Jason Christopher",
    role: "Co-Mentorship Coordinator",
    focus:
      "Senior interested in product management, tech consulting, solutions architecture, and data analysis, with interests in sports, TV, and parlays.",
    linkedin: "https://www.linkedin.com/in/jason-chid-christopher/",
  },
  {
    name: "Duke Boateng",
    role: "Co-Professional Development Coordinator",
    focus:
      "Sophomore pursuing software engineering and product management, with interests in sports and traveling.",
    linkedin: "https://www.linkedin.com/in/duke-boateng",
  },
  {
    name: "Emmanuel Adedeji",
    role: "Co-Professional Development Coordinator",
    focus:
      "Senior pursuing software engineering, with interests in soccer and drumming.",
    linkedin: "https://www.linkedin.com/in/e-adedeji/",
  },
];

export const eventPhotos: EventPhoto[] = [
  {
    src: "/assets/events/event-img-4196.jpg",
    alt: "Code Black members collaborating around a table at an event",
    label: "Community game night",
  },
  {
    src: "/assets/events/event-img-4200.jpg",
    alt: "Code Black event participant standing in front of a presentation screen",
    label: "Icebreaker session",
  },
  {
    src: "/assets/events/event-img-4205.jpg",
    alt: "Code Black members gathered in a room for a social event",
    label: "Member meetup",
  },
  {
    src: "/assets/events/event-img-4233.jpg",
    alt: "Students attending a Code Black workshop",
    label: "Workshop audience",
  },
  {
    src: "/assets/events/event-img-4245.jpg",
    alt: "Students seated in a lecture hall during a Code Black event",
    label: "Tech talk",
  },
  {
    src: "/assets/events/event-img-4260.jpg",
    alt: "Large classroom filled for a Code Black technical event",
    label: "Campus session",
  },
];

export const sponsorLevels: SponsorLevel[] = [
  {
    name: "Platinum",
    price: "$1,750",
    features: [
      "Unlimited events with members",
      "Dedicated BlackFest booth space",
      "Access to resume book",
      "Diamond and Pearl benefits included",
    ],
  },
  {
    name: "Diamond",
    price: "$1,250",
    features: [
      "Four events with members",
      "Access to attendee information for sponsored events",
      "Premium sponsor recognition",
      "Pearl benefits included",
    ],
  },
  {
    name: "Pearl",
    price: "$750",
    features: [
      "Two events with members",
      "Sponsor event promotion in GroupMe and Instagram",
      "Monthly newsletter feature",
      "Brand visibility across member channels",
    ],
  },
];
