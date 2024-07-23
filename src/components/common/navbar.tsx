import React from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

const links = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 max-w-screen-xl mx-auto bg-white backdrop-blur-sm flex items-center justify-between p-4 sm:px-8 z-50 ">
      <Link to="/" className="text-xl font-bold uppercase">
        AT
      </Link>

      <ul className="hidden sm:flex items-center gap-4">
        {links.map(({ label, href }, idx) => (
          <li key={idx}>
            <Link
              to={href}
              className="text-lg font-medium capitalize hover:text-indigo-700 [&.active]:text-indigo-700 [&.active]:font-bold transition-colors duration-150"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Drawer>
        <DrawerTrigger className="sm:hidden text-indigo-700 hover:text-indigo-600 duration-150">
          <Menu className="h-8 w-8" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Navigation menu</DrawerTitle>
            <DrawerDescription>Navigate to.</DrawerDescription>
          </DrawerHeader>
          <ul className="px-4 pb-4 space-y-2">
            {links.map(({ label, href }, idx) => (
              <li key={idx}>
                <Link
                  to={href}
                  className="text-lg font-medium capitalize hover:text-indigo-700 [&.active]:text-indigo-700 [&.active]:font-bold transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
