"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LiaLightbulbSolid } from "react-icons/lia";
import { SearchIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const menuList = [
    "ART DELA TABLE",
    "MOBILIER",
    "NAPPAGE",
    "MATERIAL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "PODIUM-PISTE DE DANSE",
    "PACKS",
    "CONSAMMABLES",
  ];

  const [selected , setSelected]=useState(null)
  return (
    <div className="w-full h-[168px]flex flex-col  z-10   inline-block  fixed bg-white  shadow-sm">
      <div className=" w-full h-[70%] p-1 flex items-center">
        <div className="gap-2 p-4 px-5 flex  w-[60%] items-center">
          <div className="flex  gap-1 top-33 left-29 flex-col justify-center  w-[133px] h-[65px]   items-center">
            <Image src={"/logo1.png"} alt="logo" width={70} height={70} />
            <Image src={"/logo2.png"} alt="logo" width={150} height={40} />
          </div>

          <div className="w-[70%] border p-2  rounded-md  flex   bg-slate-50 ">
            <input
              className=" border-none outline-none w-full  p-1 text-sm bg-gray-50"
              type="text"
              placeholder="Rechercher un produit"
            />
            <SearchIcon className=" text-gray-400 mt-1" />
          </div>
        </div>
        <div className=" flex  gap-2   p-1">
          <div className="flex gap-1 items-center">
            <LiaLightbulbSolid size={25} />
            <h2 className="text-sm">Inspirations</h2>
          </div>

          <div className="flex  items-center gap-1">
            <CiHeart size={25} />
            <h2>Mes favoris</h2>
            <div className="w-10 h-6 text-sm rounded-full flex items-center justify-center py-2 px-4 bg-gray-100">
              24
            </div>
          </div>
        </div>

        <div className="flex  items-center p-3 gap-4 ">
          <button className="w-[105px] h-[40px] items-center justify-center rounded-md bg-blue-500 text-white py-6 px-15 flex gap-2 ">
            <FiShoppingCart className="text-white" />
            <h3>Panier</h3>
          </button>

          <div className="w-10 h-10 rounded-full bg-slate-200"></div>
          <h2>FR</h2>
          <IoIosArrowDown className=" cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex text-sm  flex-row p-2  items-center justify-evenly ">
        {menuList.map((list, index) => (
          <div className={`hover:border-b-2 border-blue-600 group p-3 ${selected==index&& "border-b-2 cursor-pointer border-blue-600 p-3 group" }`} key={index}
          onClick={()=>setSelected(index)}
          >

            <li className={`flex ${selected==index&&"text-blue-600"} group-hover:text-blue-600  text-gray-500 cursor-pointer  font-medium  text-sm list-none`}>{list}</li>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Navbar;
