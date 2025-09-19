'use server'

import { getUserId, getUserToken } from "src/getToken"

export async function creditOrder(cartId: string, shippingData: {details:string , phone:string , city: string}) {

    const token = await getUserToken()
    if(token){
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXT_URL}`, {
        method: 'POST',
        headers:{
            token: token as string,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           shippingData
        })
        })
        const data = await res.json()
        return data 
    }
}
export async function cashOrder(cartId: string, shippingData: {details:string , phone:string , city: string}) {

    const token = await getUserToken()
    if(token){
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/${cartId}`, {
        method: 'POST',
        headers:{
            token: token as string,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           shippingData
        })
        })
        const data = await res.json()
        return data 
    }
}

export async function getUserOrders(){
    const userId = await getUserId()
    if(userId){
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/user/${userId}`, {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"}
        })
        const data = await res.json()
        
        return data 
    }
}