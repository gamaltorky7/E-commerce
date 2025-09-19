import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { product } from "../../../types/products.type";
import Link from "next/link";
import AddCartBtn from "./AddCartBtn";
import AddToWishlist from "./AddToWishlist";



export default function ProductCard({item}:{item:product}) {
  const {title,price,imageCover,category:{name} , ratingsAverage, _id} = item


  return (
    <Card className="relative border bg-gray-300 group dark:bg-gray-800 hover:scale-102 transition-transform duration-300">
      <AddToWishlist id={_id}/>

         <Link href={"/products/"+_id}>
        <CardHeader>
        <Image
          src={imageCover}
          alt={title}
          width={200}
          height={200}
          className="w-full rounded-2xl object-cover"
        />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-main">{name}</CardTitle>
          <CardTitle className="py-2 dark:text-gray-400">{title.split(' ').slice(0,2).join(' ')}</CardTitle>

          <div className="flex justify-between items-center my-1">
            <span className="dark:text-gray-400">{price}  EGP</span>
            <span className="dark:text-gray-400"><i className="fa-solid fa-star rating-color"></i> {ratingsAverage}</span>
          </div>
        </CardContent>
    </Link>
        <CardFooter>
          <AddCartBtn  id={_id}/>
        </CardFooter>
    </Card>
  );
}
