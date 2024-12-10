   import React from 'react'
   
   const Description = () => {
     return (
       <div  className='w-full  p-2  flex    justify-between '>
           <div className='w-[50%] h-full flex flex-col '>
              <h1 className="text-salte-700">Description produit</h1>
              <p className="text-gray-600 text-sm">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table"</p>
           </div>
           <div className='w-[50%] flex flex-col   p-4 '>
            <button className='w-full  h-[50px] p-5 items-center   flex justify-between bg-gray-100'>
              <h1>LIVRAISONS</h1>
              <h1>+</h1>
            </button>
            <button className='w-full h-[50px] p-5  items-center flex justify-between bg-gray-100'>
              <h1>QUESTIONS</h1>
              <h1>+</h1>
            </button>
           </div>
       </div>
     )
   }
   
   export default Description
   