  import Image from 'next/image';
import React from 'react'
  import { GoDotFill } from "react-icons/go";
  import { CiHeart } from "react-icons/ci";
  const Headers = () => {
    return (
      <div className="w-full  mt-40  p-3">
       <div className="flex items-center  gap-1 ">
        <h2 className='text-slate-700  font-medium'>Home  </h2>
        <h2><GoDotFill  className="text-gray-400" size={10}/> </h2>
       <h2 className="text-sm   text-gray-500"> Art de la table</h2>
       </div>


     <div className="flex gap-4">

      
     <div className=" w-[50%]    flex p-3 bg-gray-200">

      <div className='flex flex-col   w-[20%] h-full  '>
       <div className="    flex flex-col ">
           <div className="w-[50px] h-[50px] cursor-pointer bg-white border flex justify-center item-center group">
            <Image src={"/chair.png"} alt='item' width={30} height={30} className='group-hover:scale-105 transition-all duration-200'/>
           </div>
           <div className="w-[50px] h-[50px] cursor-pointer bg-gray-50 border flex justify-center item-center group">
           <Image src={"/chair.png"} alt='item' width={30} height={30} className='group-hover:scale-105 transition-all duration-200'/>
           </div>
           <div className="w-[50px] h-[50px] cursor-pointer bg-gray-100 border flex justify-center item-center group">
           <Image src={"/chair.png"} alt='item' width={30} height={30} className='group-hover:scale-105 transition-all duration-200'/>
           </div>
           <div className="w-[50px] h-[50px] cursor-pointer bg-gray-100 border flex justify-center item-center group">
           <Image src={"/chair.png"} alt='item' width={30} height={30} className='group-hover:scale-105 transition-all duration-200'/>
           </div>
       </div>
      </div>

      <div className=" w-[80%] h-full group  ">

          <Image src={"/item2.png"} alt='item' width={400} height={400} className='bg-gray-200 cursor-pointer      mt-9 group-hover:scale-105 transition-all duration-200'/>
      </div>
      </div>

    

     <div className=" w-[50%]  flex flex-col  ">
         
           <div className="w-full flex justify-between">
            <h1 className=" text-2xl ">Cheese - appareil a raclette 1/2 roue</h1>
            <CiHeart size={30} className='cursor-pointer hover:fill-red-500 ' />
           </div>
           <div className="w-full flex items-center p-2 gap-2  ">
            <h1 className=" text-2xl ">39,50€ </h1>
            <h3 className=" text-gray-500 text-sm ">/piece </h3>
           </div>
          <hr  className='border-gray-300'/>
           <div className="flex items-center justify-between  gap-2 mt-4 p-1">

            <div className='flex items-center'>
           <Image src={"/Capa_1.png"} alt="logo" width={20}  height={20}/>
           <h2>20 <sup>cm</sup></h2>

           <Image src={"/Frame.png"} alt="logo" width={20}  height={20} className='ml-3'/>
           <h2>50 <sup>cm</sup></h2>
           </div>
           <div>
            <h2 className='text-gray-400 text-sm'>RÉF : VABGN5</h2>
           </div>
           </div>

           <hr  className='border-gray-300 mt-3'/>
     <p className='text-gray-600  text-sm  '> Location appareil à raclette - Raclette traditionnelle 1/2 roue 
</p>
<p className='text-gray-600  text-sm  '>Réglable en hauteur</p>
<p className='text-gray-600  text-sm  '>Appareil à raclette professionnel</p>
<p className='text-gray-600  text-sm  '>Boîtier de chauffe horizontal réglable en hauteur</p>
<div className=" mt-10 flex flex-col">

<h1 className='text-gray-600 '>220V</h1>
<h1  className='text-gray-600 '>900W</h1>

<div className="  w-full gap-2   mt-8 p-3 h-full  flex  flex-col  ">
    <hr  className='mt-5 w-full mb-4 border-gray-300' />
    <div className='p-2 flex   gap-4'>
 <button variant="outline"  className='flex  gap-5   mt-6   justify-evenly   text-gray-400  items-center   border  border-gray-400   rounded-sm cursor-pointer hover:bg-gray-100 h-[47px] w-[153px]'> 
  <p  className="text-gray-600">-</p>
  <p className="text-black">1</p>
  <p  className='text-gray-600'>+</p>
  
 </button>
 <button  className='w-full   mt-6 text-white h-[47px] cursor-pointer hover:shadow-md  rounded-sm   bg-sky-400'> AJOUTER AU PANIER</button>
 </div>
</div>
</div>
     </div>
     </div>

      </div>
    )
  }
  
  export default Headers
  
