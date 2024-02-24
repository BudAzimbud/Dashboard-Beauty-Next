import Image from "next/image";
import React, { useState } from "react";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  EditShieldIcon,
  FilterIcon,
  PrintIcon,
  RefreshIcon,
  SearchIcon,
} from "../../asset/config-icons";
import Analytic from "../../asset/png/analytic.png";

import { useRouter } from "next/router";
import DataTable from "../../components/Table";
import Layout from "../../components/Layout";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tab, setTab] = useState(0);
  const onChangeTab = (tab) => {
    setTab(tab);
  };

  const setStyleLevel = (level) => {
    if (level === "Warga") {
      return "font-bold bg-orange-50 text-orange-600 text-center rounded p-1";
    }
    if (level === "Juragan") {
      return "font-bold bg-cyan-50 text-cyan-600 text-center rounded p-1";
    }
    if (level === "Konglomerat") {
      return "font-bold bg-purple-50 text-purple-600 text-center rounded p-1";
    }
    if (level === "Sultan") {
      return "font-bold bg-green-50 text-green-600 text-center rounded p-1";
    }
  };

  const data = [
    {
      id: 1,
      customerName: "Odis Rhinehart",
      favouriteMenu: "Chicken & Ribs Combo",
      level: "Warga",
      totalTransaction: "IDR 194,700",
    },
    {
      id: 1,
      customerName: "Kris Roher",
      favouriteMenu: "Surf & Turf Gift Basket",
      level: "Warga",
      totalTransaction: "IDR 631,200",
    },
    {
      id: 1,
      customerName: "Serenity Fisher",
      favouriteMenu: "Fried Chicken Dinnet",
      level: "Juragan",
      totalTransaction: "IDR 1,040.920",
    },
    {
      id: 1,
      customerName: "Brooklyn Warren",
      favouriteMenu: "Surf & Turf Gift Basket",
      level: "Sultan",
      totalTransaction: "IDR 730,500",
    },
    {
      id: 1,
      customerName: "Franco Delort",
      favouriteMenu: "Chicken & Ribs Combo",
      level: "Juragan",
      totalTransaction: "IDR 96,000",
    },
    {
      id: 1,
      customerName: "Saul Geoghegan",
      favouriteMenu: "Surf & Turf Gift Basket",
      level: "Juragan",
      totalTransaction: "IDR 590,080",
    },
    {
      id: 1,
      customerName: "Alfredo Vetrovs",
      favouriteMenu: "Dark & Stormy",
      level: "Juragan",
      totalTransaction: "IDR 590,080",
    },
    {
      id: 1,
      customerName: "Cristofer Vetrovs",
      favouriteMenu: "Shaking Beef Tri-Tip",
      level: "Konglomerat",
      totalTransaction: "IDR 782,600",
    },
    {
      id: 1,
      customerName: "Calvin Steward",
      favouriteMenu: "BBQ Rib Dinner",
      level: "Konglomerat",
      totalTransaction: "IDR 467,500",
    },
    {
      id: 1,
      customerName: "Calvin Steward",
      favouriteMenu: "BBQ Rib Dinner",
      level: "Konglomerat",
      totalTransaction: "IDR 467,500",
    },
  ];

  const columns = [
    {
      Header: "Customer Name",
      accessor: "customerName",
      Cell: ({ value }) => {
        return <div className="font-bold text-black/80">{value ?? "-"}</div>;
      },
    },
    {
      Header: "Level",
      accessor: "level",
      Cell: ({ value }) => {
        return <div className={setStyleLevel(value)}>{value ?? "-"}</div>;
      },
    },
    {
      Header: "Favourite Menu",
      accessor: "favouriteMenu",
      Cell: ({ value }) => {
        return <div className="font-bold text-black/80">{value ?? "-"}</div>;
      },
    },
    {
      Header: "Total Transaction",
      accessor: "totalTransaction",
      Cell: ({ value }) => {
        return <div className="font-bold text-black/80">{value ?? "-"}</div>;
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ value }) => {
        return (
          <div className="flex gap-4">
            <button className="bg-gray-50 flex gap-2 items-center rounded-md px-3 py-2">
              <EditShieldIcon size={15} />
              Detail
            </button>
            <button className="bg-gray-50 rounded-md px-3 py-2">
              <EditIcon />
            </button>
            <button className="bg-red-50 text-red-400 rounded-md px-3 py-2">
              <DeleteIcon />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <Layout>
      <div>
        <div id="title-page">
          <h1 className="font-bold text-[24px]">Customer</h1>
          <p className="text-gray-400 text-[14px]">
            You can manage and organize your customer and other things here
          </p>
        </div>
        <div
          id="submenu"
          className="w-full border border-0 border-b-2 border-gray-100 flex md:justify-end md:mt-[-10px] mt-5"
        >
          <div
            onClick={() => {
              setTab(0);
            }}
            className={`md:px-[80px] md:w-[20%] w-full text-center pb-2 border-0 border-b-2 ${
              tab === 0 ? "text-indigo-600 border-indigo-600" : ""
            }`}
          >
            Inventory
          </div>
          <div
            onClick={() => {
              setTab(1);
            }}
            className={`md:px-[80px] md:w-[20%] w-full text-center pb-2 border-0 border-b-2 ${
              tab === 1 ? "text-indigo-600 border-indigo-600" : ""
            }`}
          >
            Purchasing
          </div>
          <div
            onClick={() => setTab(2)}
            className={`md:px-[80px] md:w-[20%] w-full text-center pb-2 border-0 border-b-2 ${
              tab === 2 ? "text-indigo-600 border-indigo-600" : ""
            }`}
          >
            Produk
          </div>
        </div>
        <div class="grid grid-cols-5 mt-3 gap-4">
          <div className="md:col-span-4 col-span-5">
            <div className="cover-customer p-4">
              <div>
                <h1 className="font-bold text-[24px] text-white">Customer</h1>
                <p className="w-[50%] text-white text-[12px]">
                  On this menu you will be able to create, edit, and also delete
                  the customer. Also you can manage it easily.
                </p>
              </div>

              <div className="mt-1 md:flex hidden gap-3 text-[14px]">
                <button className="flex bg-indigo-400 text-white p-2 md:py-3 md:gap-1 rounded-md items-center focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <AddIcon />
                  Add new customer
                </button>
                <div className="flex gap-2 py-1 rounded-md items-center w-[48%] bg-white">
                  <SearchIcon className="text-gray-400 ps-1" size={28} />
                  <input
                    type="text"
                    className="w-full rounded-r-md focus:outline-none focus:border-none"
                    placeholder="Username"
                  />
                  <button className="p-1 bg-indigo-500 text-white rounded-md px-4 mr-2">
                    Search
                  </button>
                </div>
                <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <FilterIcon color="white" />
                  Filter
                </button>
                <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <RefreshIcon />
                  Refresh
                </button>
                <button class="bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <PrintIcon />
                </button>
              </div>
            </div>
            <div className="md:hidden  p-3 bg-indigo-500  ">
              <div className="flex mt-2 gap-2 py-1 rounded-md items-center w-full bg-white">
                <SearchIcon className="text-gray-400 ps-1" size={28} />
                <input
                  type="text"
                  className="w-full rounded-r-md focus:outline-none focus:border-none"
                  placeholder="Username"
                />
                <button className="p-1 bg-indigo-500 text-white rounded-md px-4 mr-2">
                  Search
                </button>
              </div>
              <div className="flex mt-2 gap-4 h-[40px] justify-center ">
                <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <AddIcon />
                </button>
                <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <FilterIcon color="white" />
                </button>
                <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <RefreshIcon />
                </button>
                <button class="bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  <PrintIcon />
                </button>
              </div>
            </div>
            <DataTable columns={columns} data={data} />
          </div>
          <div className="md:col-span-1 col-span-5">
            <div className="flex  flex-col gap-2 ">
              <Image src={Analytic} alt="analytic" />
              <div
                className="h-[530px] p-4 overflow-y-auto  rounded-md bg-no-repeat bg-auto bg-bottom"
                style={{
                  backgroundColor: "#FAFAFA",
                  backgroundImage: "url(/image/graphic.svg)",
                }}
              >
                <h2 className="text-[24px] text-medium tracking-[-0.02em]">
                  Top Menu
                </h2>
                <h2 className="text-orange-500 text-[24px] text-medium tracking-[-0.02em]">
                  This Week
                </h2>
                <span className="text-[12px] tracking-[0.015em] text-gray-500">
                  10 - 12 Agustus 2023
                </span>
                <div className="bg-white shadow-xl p-3 mt-4  rounded-md relative">
                  <span className="font-bold text-black">
                    Nasi Goreng Jamur Special Resto Pak Min
                  </span>
                  <div
                    style={{ boxShadow: " 3px 2px 0 0 #000000" }}
                    className="absolute top-[-10px] rotate-[10deg] end-[0] bg-orange-500 w-[23px] h-[23px] text-center text-white"
                  >
                    1
                  </div>
                </div>
                <div className="flex flex-col px-2 mt-4 gap-4">
                  <span className="text-[12px] tracking-[0.015em] text-gray-500">
                    2. Tongseng Sapi Gurih
                  </span>
                  <span className="text-[12px] tracking-[0.015em] text-gray-500">
                    3. Nasi Gudeg Telur Ceker
                  </span>
                  <span className="text-[12px] tracking-[0.015em] text-gray-500">
                    4. Nasi Ayam serundeng
                  </span>
                  <span className="text-[12px] tracking-[0.015em] text-gray-500">
                    5. Nasi Goreng Seafood
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
