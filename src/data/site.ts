export type EventStatus = "Featured" | "Upcoming" | "Recruiting";

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
  { value: "25-30", label: "events each year" },
  { value: "2017", label: "founded at UMD" },
];

export const events: EventItem[] = [
  {
    title: "Welcome Back Game Night",
    date: "September 2026",
    time: "Evening",
    location: "UMD campus",
    status: "Featured",
    description:
      "A low-pressure kickoff for new and returning members to meet the community, find friends, and learn what Code: BLACK is building this year.",
  },
  {
    title: "Technical Interview Lab",
    date: "Fall 2026",
    time: "TBA",
    location: "Iribe Center",
    status: "Upcoming",
    description:
      "Hands-on LeetCode practice, mock interviews, and peer coaching for internship and full-time recruiting season.",
  },
  {
    title: "Sponsor Tech Talk",
    date: "Fall 2026",
    time: "TBA",
    location: "UMD campus",
    status: "Recruiting",
    description:
      "A professional development session connecting members with engineers, recruiters, and early-career opportunities.",
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
    name: "Prince Aguguo",
    role: "Co-President",
    focus:
      "Senior Computer Science major pursuing software engineering, with interests in music manipulation, basketball, and running.",
    linkedin: "https://www.linkedin.com/in/princeobiuto-aguguo/",
  },
  {
    name: "Peter Njoroge",
    role: "Co-President",
    focus:
      "Junior Computer Science major interested in full-stack software engineering, sports, the gym, and music.",
    linkedin: "https://www.linkedin.com/in/peter-njoroge13/",
  },
  {
    name: "Ayomiposi Ajayi",
    role: "Vice President",
    focus:
      "Senior Computer Science major focused on software engineering with an ML/AI lens, plus flute, journaling, design, and crafting.",
    linkedin: "https://www.linkedin.com/in/ayomiposi-ajayi/",
  },
  {
    name: "Ann-Audrey Ezi",
    role: "Secretary",
    focus:
      "Senior Computer Engineering major with a Korean Studies minor pursuing embedded systems engineering.",
    linkedin: "http://www.linkedin.com/in/ann-audrey-ezi",
  },
  {
    name: "Felix Ogordi",
    role: "Treasurer",
    focus:
      "Senior Computer Science major interested in innovation in tech, fitness, shows, and music.",
    linkedin: "https://www.linkedin.com/in/ogordi-felix/",
  },
  {
    name: "Maurice Barksdale",
    role: "Corporate Outreach Coordinator",
    focus:
      "Senior Computer Science major interested in software engineering, machine learning, startups, movies, anime, and photography.",
    linkedin: "https://www.linkedin.com/in/maurice-barksdale/",
  },
  {
    name: "Jincy Njenga",
    role: "Co-Mentorship Program Coordinator",
    focus:
      "Senior Information Science major pursuing data analysis, with interests in reading, museums, and new activities.",
    linkedin: "https://www.linkedin.com/in/jincynjenga/",
  },
  {
    name: "Ruba Ibrahim",
    role: "Co-Mentorship Program Coordinator",
    focus:
      "Senior Information Science major focused on data analysis and using insights to drive positive social change.",
    linkedin: "https://www.linkedin.com/in/rubaibrahim0/",
  },
  {
    name: "Daniel Odetoye",
    role: "Co-Event Coordinator",
    focus:
      "Junior Computer Science major interested in software development, UI/UX design, photography, basketball, and games.",
    linkedin: "https://www.linkedin.com/in/danielodetoye/",
  },
  {
    name: "Emmanuel Michael",
    role: "Co-Event Coordinator",
    focus:
      "Senior Computer Science major with a General Business minor pursuing software engineering and cybersecurity.",
    linkedin: "https://www.linkedin.com/in/emmanuel-m-michael/",
  },
  {
    name: "Kaelyn Naih",
    role: "Co-Graphic Designer",
    focus:
      "Sophomore Information Science major pursuing data analysis, with interests in dance, graphic design, and travel.",
    linkedin: "https://www.linkedin.com/in/kaelyn-naih-5a8bb2338/",
  },
  {
    name: "Hannah Williams",
    role: "Co-Graphic Designer",
    focus:
      "Senior pursuing Psychology and Information Science with interests in marketing data analysis and UI/UX design.",
    linkedin: "https://www.linkedin.com/in/hannah-williams-88a25b267/",
  },
  {
    name: "Emmanuel Adedeji",
    role: "Professional Development Coordinator",
    focus:
      "Professional development lead supporting member career growth, opportunity sharing, and recruiting readiness.",
    linkedin: "https://www.linkedin.com/in/e-adedeji/",
  },
  {
    name: "Eniola Aloba",
    role: "Program Coordinator",
    focus:
      "Sophomore Computer Science major exploring software in fintech, with interests in arts and crafts, crocheting, and cooking.",
    linkedin: "https://www.linkedin.com/in/eniolaloba/",
  },
  {
    name: "Toyin Olaniyi",
    role: "Social Media Coordinator",
    focus:
      "Sophomore Computer Science major and brand owner exploring the intersection of technology, business, and finance.",
    linkedin: "https://www.linkedin.com/in/toyin-olaniyi-52378b27a/",
  },
  {
    name: "Lynnet Opara",
    role: "Historian",
    focus:
      "Senior double majoring in Social Data Science and Public Health with a Spanish Language and Literature minor.",
    linkedin: "https://www.linkedin.com/in/lynnet-opara/",
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
