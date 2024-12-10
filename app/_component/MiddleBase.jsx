   import Image from 'next/image'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
   
   const MiddleBase = () => {

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
    ]
     return (

     


       <div className='w-full p-2 mt-8 '>
          <div className='flex justify-between items-center'>
          <h2  className="text-2xl">Ces produits pourraient vous intéresser</h2>
          <div className='flex flex-col justify-center items-center'>

          <p className='text-sm text-gray-600'>Voir toute la collection</p>
          <hr />
          </div>
          </div>
      <div className='flex  justify-evenly'>
          {

cardUidetals&&cardUidetals.map((details,index)=>(

  <div className='w-[330px] mt-5 rounded-xl h-[438px]    '  key={index} >
  <div className="w-full p-2  rounded-xl h-[80%] bg-slate-200">
   <div className='flex justify-between  mt-3   items-center p-1'>
     <div className='  size-10  cursor-pointer hover:fill-red-500  '>{details.like}</div>
    
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

))
}
</div>
        
       </div>
     )
   }
   
   export default MiddleBase
   