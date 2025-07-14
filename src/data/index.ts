export interface Experience {
  title: string;
  company: string;
  date: string;
  duties?: string[];
  technologies?: string[];
}
export const workExperience: Experience[] = [
  {
    title: "Software Developer (Fullstack)",
    company: "Elisa",
    date: "June 2025 - Present",
    duties: [],
  },
  {
    title: "Software Developer",
    company: "Trivore",
    date: "September 2024 - January 2025",
    duties: [
      "Developed responsive websites for client based basis.",
      "Developing software depending in Nextjs architecture.",
      "Collaborated with design team on UI/UX improvements.",
    ],
  },
  {
    title: "Front-end developer and SCRUM master",
    company: "Marimekko",
    date: "February 2019 - April 2024",
    duties: [
      "In-house Frontend developer and collboration with backend development. ",
      "Development of key features for online store resulting in user growth over 5 years.",
      "Scrum master of developers across multiple projects.",
    ],
  },
  {
    title: "Front-end developer",
    company: "Nokia",
    date: "August 2017 - February 2019",
    duties: ["UI development for telecommunications and network services."],
  },
  {
    title: "UI developer",
    company: "Virta",
    date: "November 2016 - August 2017",
    duties: ["UI design and development for electric vehicles users platform."],
  },
];
