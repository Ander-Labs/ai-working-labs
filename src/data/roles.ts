// data/roles.ts

import { Role } from "@/types/RolType";

export const roles: { [key: string]: Role[] } = {
  software: [
    {
      name: "Frontend Developer",
      subroles: [
        "React Developer",
        "Angular Developer",
        "Vue.js Developer",
        "Astro Developer",
        "React and Angular Developer",
      ],
    },
    {
      name: "Backend Developer",
      subroles: ["Node.js Developer", "Python Developer", "Java Developer"],
    },
    {
      name: "Fullstack Developer",
      subroles: ["MERN Stack Developer", "MEAN Stack Developer"],
    },
  ],
  it: [
    { name: "SysAdmin", subroles: ["Linux SysAdmin", "Windows SysAdmin"] },
    {
      name: "Network Engineer",
      subroles: ["Network Architect", "Network Analyst"],
    },
  ],
  data: [
    {
      name: "Data Scientist",
      subroles: ["Junior Data Scientist", "Senior Data Scientist"],
    },
    {
      name: "Data Analyst",
      subroles: ["Business Data Analyst", "Operations Data Analyst"],
    },
  ],
  ux: [
    {
      name: "UX Designer",
      subroles: ["UX Researcher", "Interaction Designer"],
    },
    { name: "UI Designer", subroles: ["Visual Designer", "Graphic Designer"] },
  ],
  cybersecurity: [
    {
      name: "Security Analyst",
      subroles: ["SOC Analyst", "Incident Responder"],
    },
    {
      name: "Penetration Tester",
      subroles: ["Red Team Member", "Ethical Hacker"],
    },
  ],
  cloud: [
    { name: "Cloud Architect", subroles: ["AWS Architect", "Azure Architect"] },
    {
      name: "Cloud Engineer",
      subroles: ["DevOps Engineer", "Cloud Developer"],
    },
  ],
  ml: [
    {
      name: "Machine Learning Engineer",
      subroles: ["ML Researcher", "ML Developer"],
    },
    {
      name: "Data Scientist",
      subroles: ["ML Data Scientist", "Applied Data Scientist"],
    },
  ],
};
