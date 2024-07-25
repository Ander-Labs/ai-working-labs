// src/types/NavType.ts
export interface NavItems {
  name: string;
  href: string;
}

const NavType: NavItems[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Job Generator",
    href: "/job-generator-ai",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default NavType;
