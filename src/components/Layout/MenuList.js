import { useRouter } from "next/router";
import React from "react";
import {
  HomeIcon,
  StockIcon,
  PeopleIcon,
  BellIcon,
  SettingsIcon,
  ReportIcon,
  DrawerIcon,
} from "@/asset/config-icons";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/asset/svg/Logo.svg'

function MenuList() {
  const { pathname, push } = useRouter();

  const pagesActive = (currentPathname) => {
    if (currentPathname === pathname) {
      return ` w-full mt-7 flex justify-betweeen items-center gap-3 text-[14px] leading-[150%] font-bold block rounded-md text-indigo-700 `;
    }
    return `mt-7 flex justify-betweeen items-center gap-3 text-[14px] leading-[150%] font-bold block rounded-md hover:text-indigo-700`;
  };

 
  const submenu = ({ menus, name }) => {
    return (
      <div className="mt-7">
        <span className="text-[10px]">{name}</span>
        {menus.map((menu) => (
          <Link
            key={menu.route}
            href={menu.route}
            className={pagesActive(menu.route)}
          >
            {menu.icon}
            <p>{menu.title}</p>
            <p className="text-white text-center bg-gradient-yellow rounded-full w-[24px] ml-[32%]">
              {menu.count}
            </p>
          </Link>
        ))}
      </div>
    );
  };
  return (
    <nav className="text-gray-400 mt-10 py-2.5 px-8 h-[80%]  overflow-y-scroll">
      <Image src={Logo} alt="logo" />
      {submenu({
        menus: [
          {
            route: "/",
            title: "Dashboard",
            icon: <HomeIcon />,
            count: 4,
          },
          {
            route: "/stock",
            title: "Stock",
            icon: <StockIcon />,
          },
          {
            route: "/customer",
            title: "Customer",
            icon: <PeopleIcon />,
          },
          {
            route: "/restaurant",
            title: "Restaurant",
            icon: <BellIcon />,
          },
          {
            route: "/design",
            title: "Design",
            icon: <DrawerIcon />,
          },
          {
            route: "/report",
            title: "Report",
            icon: <ReportIcon />,
          },
          {
            route: "/settings",
            title: "Settings",
            icon: <SettingsIcon />,
          },
        ],
        name: "Home",
      })}
      {submenu({
        menus: [
          {
            route: "/stock",
            title: "Stock",
            icon: <HomeIcon />,
          },
          {
            route: "/supply",
            title: "Supply",
            icon: <HomeIcon />,
          },
        ],
        name: "Intregation",
      })}
      <button></button>
    </nav>
  );
}

export default MenuList;
