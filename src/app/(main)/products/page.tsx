import React from 'react'
import ProductCard from 'src/app/_Components/ProductCard/ProductCard'
import { product, ProductData } from 'src/types/products.type'




export default async function page() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`)
  const data:ProductData = await res.json()
  const ProductList:product[] = data.data

  return (

   <>

   <h1 className='text-3xl font-bold my-8'>Products</h1>
   
   <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
    
      {
      ProductList.map((item)=>{
        return <ProductCard key={item._id} item={item}/>
      })
    }
   
   </div>
   
   </>
  )
}
