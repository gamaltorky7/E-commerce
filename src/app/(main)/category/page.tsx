import React from 'react'
import { Branddata, data } from 'src/types/brand.type'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function page() {

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`)
const data:Branddata = await res.json()
const CategoryList:data[] = data.data


  return (
    <>
    <h1 className='text-3xl my-5 font-bold'>Categories</h1>

    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
      

      {
        CategoryList.map((item)=>{
          const {name ,slug,image,_id} = item
          return <Card key={_id} className="border bg-gray-300 dark:bg-gray-800">
             
                  <CardHeader>
                  <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="w-full rounded-2xl object-cover h-48"
                  />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className='text-l font-bold text-gray-950 my-3 dark:text-gray-400'>{name}</CardTitle>
                    <CardTitle className='text-sm font-bold text-white bg-gray-950  p-1 rounded-xl text-center'>{slug}</CardTitle>
                    
                  </CardContent>
                  
    </Card>
        })
      }
    </div>
    </>
  )
}
