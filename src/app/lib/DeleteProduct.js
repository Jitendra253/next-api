'use client'

import { useRouter } from "next/navigation";

export default function DeleteProduct({id}){
    const router = useRouter()
   const deleteRecord = async () =>{
        let response = await fetch("http://localhost:3000/api/products/"+id,{
            method:"Delete",

        })
        response = await response.json();
        if(response.success){
            alert("Product Deleted");
            router.push("/products")

        }
    }
    
    return <button onClick={deleteRecord}>Delete</button>
}