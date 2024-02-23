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
import Logo from "@/asset/png/logo.jpeg";
import { HiTemplate } from "react-icons/hi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { RiOrderPlayFill } from "react-icons/ri";
function MenuList() {
  const { pathname, push } = useRouter();

  const pagesActive = (currentPathname) => {
    if (currentPathname === pathname) {
      return ` w-full mt-7 flex justify-between items-center gap-3 text-[14px] leading-[150%] font-bold block rounded-md text-indigo-700 `;
    }
    return `mt-7 flex justify-between items-center gap-3 text-[14px] leading-[150%] font-bold block rounded-md hover:text-indigo-700`;
  };

  const submenu = ({ menus, name }) => {
    return (
      <div className="mt-7">
        <span className="text-[10px]">{name}</span>
        {menus.map((menu) => (
          <Link key={menu.route} href={menu.route}>
            <div className={pagesActive(menu.route)}>
              <div className="flex items-center gap-4">
                {menu.icon}
                <p className="text-">{menu.title}</p>
              </div>
              <p className="text-white text-center bg-gradient-yellow rounded-full w-[25px] ">
                {menu.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav className="text-gray-400 mt-10 py-2.5 px-8 h-[80%]  overflow-y-scroll">
      <div className="flex justify-center">
        <Image width={100} src={Logo} alt="logo" />
      </div>
      {submenu({
        menus: [
          {
            route: "/",
            title: "Dashboard",
            icon: <HomeIcon />,
            count: 4,
          },
          {
            route: "/products",
            title: "Product",
            icon: <HiTemplate />,
          },
          {
            route: "/orders",
            title: "Orders",
            icon: <RiOrderPlayFill />,
            count: 3,
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
            route: "/vendor",
            title: "Vendor",
            icon: <BiPurchaseTagAlt />,
          },
          {
            route: "/settings",
            title: "Settings",
            icon: <IoMdSettings />,
          },
          // ... rest of your code ...
        ],
        name: "Integration",
      })}
    </nav>
  );
}

export default MenuList;
