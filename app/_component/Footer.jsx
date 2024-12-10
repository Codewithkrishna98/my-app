   import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
   
   const Footer = () => {
     return (
       <div className='w-full bg-gray-100 p-5'>
           <div className='flex gap-1 w-full justify-center  '>
            <h1 className='text-2xl'>On</h1>
            <h1 className='text-2xl'>s'occupe</h1>
            <h1 className='text-2xl' >de</h1>
            <h1 className='text-sky-400  text-2xl font-bold'>tout</h1>
           </div>

           <div className='flex mt-5  justify-center item-center'>
             <Image src={"/footer.png"} width={700} height={200} alt='logo' className='bg-cover'/>
           </div>

           <div className="mt-10 w-full p-2 gap-3 flex ">
               <div className="w-[50%] h-[300px] ">
                   <Image src={'/sofa.png'} alt='logo' width={300} height={300} className='bg-cover w-full h-full'/>
               </div>
               <div className="w-[50%] h-full bg-gray-200 rounded-xl p-5 ">
                  <div className='flex gap-2'>
                    <h1 className="text-3xl">S'inscrire</h1>
                    <h1 className="text-3xl">&</h1>
                    <h1 className="text-3xl">economiser</h1>
                    <h1 className="text-3xl text-sky-400">10%</h1>
                  </div>
                  <p className="text-gray-500  mt-4 text-sm">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
                  <div className="flex  mt-8 justify-evenly  item-center">
                     <input className="w-[70%] outline-none p-4 rounded-xl border-none bg-white" placeholder='john@doe.com'/>
                     <button className='p-1 px-4  flex  rounded-xl  justify-center items-center text-white bg-violet-950'>
                      <p>S'INSCRIRE</p>
                      <ArrowRight/></button>
                  </div>
               </div>
           </div>


     <div className='flex gap-5   mt-3'>
           <div className='w-[200px] flex flex-col  justify-center items-center border-black  h-[400px]'>
           <Image src={"/logo1.png"} width={100} height={100} alt='logo'/>
           <Image src={"/logo2.png"} width={100} height={100} alt='logo'/>
           </div>
           <div className='w-[200px]  gap-2 flex flex-col h-[400px]'>
             <h1>  INFOS PRATIQUES </h1>
             <p className='text-sm'>A propos</p>
             <p  className='text-sm'   >Livraisons &  Reprises</p>
             <p  className='text-sm'   >LMode d’emploi</p>
             <p  className='text-sm'   >FAQ</p>
           </div>
           <div className='w-[200px] flex flex-col   h-[400px]'>
             <h1>  INFOS PRATIQUES </h1>
             <p className='text-sm'>A propos</p>
             <p  className='text-sm'   >Livraisons &  Reprises</p>
             <p  className='text-sm'   >LMode d’emploi</p>
             <p  className='text-sm'   >FAQ</p>
           </div>
           <div className='w-[200px]  flex flex-col   h-[400px]'>
             <h1>  INFOS PRATIQUES </h1>
             <p className='text-sm'>A propos</p>
             <p  className='text-sm'   >Livraisons &  Reprises</p>
             <p  className='text-sm'   >LMode d’emploi</p>
             <p  className='text-sm'   >FAQ</p>
           </div>
          

     </div>

       </div>
     )
   }
   
   export default Footer
   