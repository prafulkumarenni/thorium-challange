"use client";
import React from "react";
import { navLinks } from "./constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <div role="navigation" className="lg:flex md:block">
      {navLinks.map((link, index) => (
        <div key={index} className="ml-6 flex items-baseline space-x-4">
          <Link
            href={link.path}
            className={`text-black px-3 py-2 rounded-md text-sm font-large hover:underline hover:font-bold
                  ${pathName === link.path ? "font-extrabold" : "font-normal"}`}
          >
            {link.linkText}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
