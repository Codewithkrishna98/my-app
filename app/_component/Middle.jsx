"use client"
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'
import { CiHeart } from 'react-icons/ci'
  
  const Middle = () => {

   const listRef=useRef(null)
  

    const cardUidetals=[
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
      {
        like:<CiHeart/>,
        name:"ART DELA TABLE",
        image:"/chair.png",
        title:"Title",
        rate:"O",
        currency:"€",
        amountAndpiece:"0,35€/Pièce",
        ref:"· RÉF : VABGN5",
        pieces:"20 pieces"

      },
    ]
   

   const handleRightScroll=()=>{

     if(listRef.current){
    listRef.current.scrollBy(
           {
          left:300,
          behavior: "smooth"
            }
         )
          }
          }
   const handleLeftScroll=()=>{

     if(listRef.current){
      listRef.current.scrollBy(
           {
          left:-300,
          behavior: "smooth"
            }
         )
          }
          }



    return (
      <div className=" w-full  relative  px-14  p-5 bg-gray-50 ">
        <div className='flex justify-between text-center'>
         <h1  className='text-xl'>Articles similaires</h1>
         <p className='text-slate-500  text-sm'>VOIR TOUTE LA COLLECTION</p>
        </div>

        <div className=" w-10 h-[438px]   absolute    flex-col flex justify-center items-center  rounded-md top-5 left-2  mb-10   ">
  <div className='w-10 h-10 border  group hover:bg-sky-500  rounded-xl bg-sky-300 flex items-center justify-center'>

        <MoveLeftIcon className=' group-hover:bg-sky-500  text-white  bg-sky-300 rounded-full  cursor-pointer ' size={30} onClick={()=>handleLeftScroll()} />
  </div>

</div>
        <div className='flex overflow-auto scrollbar-hide  gap-2 ' ref={listRef} >

      
{

     cardUidetals&&cardUidetals.map((details,index)=>(
       
      <div key={index}   >

<div className='w-[330px] mt-5 rounded-xl h-[438px] relative   '  >
         <div className="w-full p-2  rounded-xl h-[80%] bg-slate-200">
          <div className='flex justify-between  mt-3   items-center p-1'>
            <div className='  size-10  cursor-pointer hover:fill-red-500  '>{details.like}</div>
            {/* <CiHeart size={30} className='cursor-pointer hover:fill-red-500  '/> */}
           <div className='p-1 px-3 bg-white  rounded-xl text-black'>
           <h2 className=' text-sm '>{details.name}</h2>
           </div>
          </div>
             
             <div className=' mt-5 w-full flex justify-center items-center h-[250px] '>
                <Image src={details.image} alt='chair' width={200} height={200} className='bg-cover'/>
             </div>
           </div>
             <div className='flex mt-2 justify-between p-2 items-center'>
              <h1 className=' text-2xl '>{details.title}</h1>
              <h1 className=''>{details.rate} <sup>{details.currency}</sup></h1>
             </div>
             <div className='flex justify-between  px-2 items-center'>
             <div className='flex  gap-1 items-center'>
              <h2 className='text-gray-600'>{details.amountAndpiece}</h2>
              <h2 className='text-gray-600 text-sm'> {details.ref}</h2>
             </div>
             <div className=' px-2 bg-gray-200 rounded-xl flex items-center'>
              <h2 className='text-gray-800 text-sm'>{details.pieces}</h2>
             </div>
             </div>
        </div>


      </div>
     ))

}
</div>
<div className=" w-10 h-[438px]   absolute    flex-col flex justify-center items-center  rounded-md top-5 right-2  mb-10   ">
  <div className='w-10 h-10 border  group hover:bg-sky-500  rounded-xl bg-sky-300 flex items-center justify-center'>

        <MoveRightIcon className=' group-hover:bg-sky-500  text-white  bg-sky-300 rounded-full  cursor-pointer ' size={30} onClick={()=>handleRightScroll()}/>
  </div>

</div>
       
      </div>
    )
  }
  
  export default Middle
  