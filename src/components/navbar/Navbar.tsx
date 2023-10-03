"use client";

import React from "react";
import Image from "next/image";
import { Squares2X2Icon, MagnifyingGlassIcon, Bars2Icon } from "@heroicons/react/24/solid";
import styles from "./navbar.module.css";
import Link from "next/link";

function Navbar({ pageTitle }: { pageTitle: string }) {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image className="mr-2" src="/next.svg" alt="Next.js Logo" width={80} height={80} priority />
        </Link>

        <h4 className="text-white pointer text-uppercase  ml-20 ">{pageTitle}</h4>
        <Squares2X2Icon className={styles.topIcon} />

        {/* NavbarItems */}
        {navbarItems.map((item) => {
          return (
            <div className={styles.navbarItem}>
              <a className="text-white pointer  ml-20 ">{item.name}</a>
              {item.children && <span className="ml-5 pointer text-white">↓</span>}
            </div>
          );
        })}
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Enter your search here..." className="bg-transparent border-0 ml-10 w-100" />
        <MagnifyingGlassIcon className={styles.searchIcon} />
      </div>

      <div>
        <MagnifyingGlassIcon className={styles.rightSearch} />
        <Bars2Icon className={styles.rightMenu} />
        <Link href="/login">
          <button className={styles.login}>Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

const navbarItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Features",
    route: "/features",
    children: [
      { name: "Features 1", route: "/features1" },
      { name: "Features 2", route: "/features2" },
    ],
  },
  {
    name: "More",
    route: "/more",
    children: [
      { name: "More 1", route: "/more1" },
      { name: "More 2", route: "/more2" },
    ],
  },
];
