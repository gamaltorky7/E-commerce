'use client'
import React, { useContext } from 'react'
import { toast } from 'sonner';
import { addToWish} from 'src/WishlistAction/WishlistAction'
import { WishContext } from 'src/WishProvider';

export default function AddToWishlist({id}:{id:string}) {
      const {setWishCount} = useContext(WishContext)

  async  function Add(id:string){

       try{
         const data = await addToWish(id)
        if(data.status == 'success'){
            toast.success(data.message , {position:'top-center'})
            const sum = data.count;
            setWishCount(sum);
        }
        else {
            toast.error(data.message , {position:'top-center'});
        }
       }catch(error){toast.error('please log in first',{position:'top-center'})}
    }

  return (
    
      <button onClick={()=>Add(id)} className="absolute top-2 right-1 opacity-0  group-hover:opacity-100 transition duration-300 hover:cursor-pointer">
        <i className="fa-regular fa-heart  text-2xl"></i>
 
      </button>
   
  )
}
