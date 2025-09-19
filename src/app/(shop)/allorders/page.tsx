'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { getUserOrders } from 'src/app/OrdersAction/OrdersAction'
import { Ordersdata } from 'src/types/orders.type'


export default function Allorders() {
  const [data , setdata] = useState<Ordersdata>({} as Ordersdata)
  const [orderloading , setorderloading] = useState(true)


  useEffect(()=>{
    fetchOrders()
  },[])
 async function fetchOrders(){
    setorderloading(true)
   const data:Ordersdata = await getUserOrders()
  console.log(data);
  if(!data){
    toast.error('some thing went wrong' , {position:'top-center'}) }
    else toast.success('your orders is ready', {position:'top-center'})
   setdata(data)
   setorderloading(false)
 }


  

  return (
   <div>
         {
           orderloading ? 
           <div className='flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-300/50 backdrop-blur-sm z-50'>
             <span className="loader"></span>
           </div>
           : 
           <>
           <div className='container max-w-6xl mx-auto my-5'>
             <h1 className='text-3xl font-bold my-5 '>Your Orders </h1>
             {
               data.cartItems?.map((item)=>{
                 const {count, _id , price , product:{imageCover,title,ratingsAverage}} = item
                 return (
                   <div key={_id} className='grid grid-cols-12 gap-10 items-center my-5 border-b pb-5'>
                     <div className='col-span-4'>
                       
                      <Image src={imageCover} alt={title} width={200} height={200} />
                     </div>
                     <div className='col-span-8'>
                       <h1 className='text-3xl font-bold'>{title}</h1>
                       <p className='text-lg py-2 text-main'>{count}</p>
   
                       <div className='flex justify-between items-center my-5'>
                         <span className='text-2xl font-bold'>{price} EGP</span>
                         <span className='text-lg'><i className="fa-solid fa-star rating-color"></i> {ratingsAverage}</span>
                       </div>
                       
                     </div>
                   </div>
                 )
               })
             }
   
   
           </div>
           </>
         }
       </div>
  )
}
