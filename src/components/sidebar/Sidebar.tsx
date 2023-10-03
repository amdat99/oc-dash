"use client";
import React from "react";

import {
  HomeIcon,
  UserCircleIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  StarIcon,
  CogIcon,
  HeartIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  ShoppingBagIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

import styles from "./sidebar.module.css";

//use bootstrap css for styling
function Sidebar({ selectedItem = "dashboard" }: { selectedItem: string }) {
  const sidebarItems = [
    {
      title: "Dashboard",
      href: "dashboard",
      icon: <HomeIcon />,
    },
    {
      title: "Users",
      href: "users",
      icon: <UserCircleIcon />,
    },
    {
      title: "Users",
      href: "users",
      icon: <UserCircleIcon />,
    },
    {
      title: "Groups",
      href: "groups",
      icon: <UserGroupIcon />,
    },
    {
      title: "Badges",
      href: "badges",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Quests",
      href: "quests",
      icon: <StarIcon />,
    },
    {
      title: "Settings",
      href: "settings",
      icon: <CogIcon />,
    },
    {
      title: "Favorites",
      href: "favorites",
      icon: <HeartIcon />,
    },
    {
      title: "Calendar",
      href: "calendar",
      icon: <CalendarIcon />,
    },
    {
      title: "Chat",
      href: "chat",
      icon: <ChatBubbleBottomCenterIcon />,
    },
    {
      title: "Shop",
      href: "shop",
      icon: <ShoppingBagIcon />,
    },
    {
      title: "Wallet",
      href: "wallet",
      icon: <WalletIcon />,
    },
  ];

  return (
    <div className={styles.sidebarContainer}>
      {sidebarItems.map((item) => {
        return (
          <div className="d-flex align-items-center" key={item.href}>
            <div className={`${styles.sidebarIcon} ${selectedItem === item.href ? styles.selectedItem : ""}`}>{item.icon}</div>
            <span className={styles.sidebarTitle}> {item.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
