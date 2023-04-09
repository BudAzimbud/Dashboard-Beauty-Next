import Image from "next/image";
import React from "react";
import {
  AddIcon,
  FilterIcon,
  PrintIcon,
  RefreshIcon,
  SearchIcon,
} from "../asset/config-icons";
import Analytic from "../asset/png/analytic.png";
import Topmenu from "../asset/png/topmenu.png";
function index() {
  return (
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
        <div className="px-[80px] pb-2 border-0 border-b-2 text-indigo-600 border-indigo-600">
          Customer
        </div>
        <div className="px-[80px] pb-2 border-0 border-b-2 ">Promo</div>
        <div className="px-[80px] pb-2 border-0 border-b-2 ">Voucher</div>
      </div>
      <div class="grid grid-cols-5 mt-3 gap-4">
        <div className="md:col-span-4 col-span-5">
          <div className="cover-customer p-4">
            <h1 className="font-bold text-[24px] text-white">Customer</h1>
            <p className="w-[50%] text-white text-[12px]">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </p>
            <div className="mt-2 flex gap-3 text-[14px]">
              <button className="flex bg-indigo-400 text-white p-2 py-3 gap-1 rounded-md items-center">
                <AddIcon /> Add new customer
              </button>
              <div className="flex gap-2 rounded-md items-center w-[48%] bg-white">
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
              <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                <FilterIcon color="white" />
                Filter
              </button>
              <button class="flex items-center gap-1 bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                <RefreshIcon />
                Refresh
              </button>
              <button class="bg-white backdrop-filter p-1 px-5 rounded-md backdrop-blur-sm bg-opacity-20 text-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                <PrintIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={Analytic} alt="analytic" />
          <div
            className="h-[530px] p-4 overflow-y-auto mt-4 rounded-md bg-no-repeat bg-auto bg-bottom"
            style={{
              backgroundColor: "#FAFAFA",
              backgroundImage: "url(/image/graphic.svg)",
            }}
          >
            <h2 className="text-[24px] text-medium tracking-[-0.02em]">
              Top Menu
            </h2>
            <h2 className="text-orange-500 text-[24px] text-medium tracking-[-0.02em]">
              This weak
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
  );
}

export default index;
