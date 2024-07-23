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
    name: "Jobs",
    href: "/jobs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Admin",
    href: "/admin",
  },
];

export default NavType;
