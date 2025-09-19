import React from 'react'
import { Branddata, data } from 'src/types/brand.type'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default async function page() {

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`)
const data:Branddata = await res.json()
const BrandList:data[] = data.data


  return (
    <>
    <h1 className='text-3xl my-5 font-bold'>Brands</h1>

    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
      

      {
        BrandList.map((item)=>{
          const {name ,slug,image,_id} = item
          return <Card key={_id} className="border bg-gray-300">
              
                  <CardHeader>
                  <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="w-full rounded-2xl object-cover"
                  />
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center my-3">
                      <span className='text-2xl font-bold text-gray-950'>{name}</span>
                      <span className='text-sm font-bold text-white bg-main p-1 rounded-xl'> {slug}</span>
                    </div>
                  </CardContent>
              
                  
    </Card>
        })
      }
    </div>
    </>
  )
}
