import Image from "next/image";
import React, { useState } from "react";

import Analytic from "../asset/png/analytic.png";
import AreaChart from "../components/Chart/AreaChart";
import Layout from "../components/Layout";
import DoughnutChart from "../components/Chart/Doughnut";
import VerticalBar from '../components/Chart/VerticalBar'
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tab, setTab] = useState(0);
 
  return (
    <Layout>
      <div>
        <div id="title-page">
          <h1 className="font-bold text-[24px]">Dashbaord</h1>
          <p className="text-gray-400 text-[14px]">
           See analytics with chart
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
            Orders
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
            Profit
          </div>
        </div>
        <div class="grid grid-cols-5 mt-3 gap-4">
          <div className="md:col-span-4 col-span-5">
            <AreaChart />
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4  ">
              <div className="">
              <DoughnutChart />
              </div>
              <div>
                <VerticalBar />
              </div>
            </div>
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
