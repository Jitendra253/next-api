'use client'
import { use, useEffect, useState } from "react"
import Link from "next/link"
import "./../../style.css"
import { useRouter } from "next/navigation";
export default function Page({params}){
    const router = useRouter();
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [color,setColor] = useState("")
    const [company,setCompany] = useState("")
    const [category,setCategory] = useState("")

    const {editproduct} = use(params);
  
    useEffect(()=>{
        getProductDetails()
    },[])

    const getProductDetails = async()=>{
        let productData = await fetch("http://localhost:3000/api/products/"+editproduct);
        productData = await productData.json();
        if(productData.success){
            let result = productData.result
            setName(result.name)
            setPrice(result.price)
            setColor(result.color)
            setCategory(result.category)
            setCompany(result.company)
        }
    }
    const updateProduct =async () =>{
        let data = await fetch("http://localhost:3000/api/products/"+editproduct,{
            method:"PUT",
            body:JSON.stringify({name,price,color,category,company})
        }); 
        let  result = await data.json();
        if(result.success){
            alert("data updated");
            router.push("/products")
        }

    }
    return(
        <div>
            <h1>Update Products</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name " className="input"/>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price " className="input"/>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter Product Color " className="input"/>
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company " className="input"/>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category " className="input"/>
            <button className="btn" onClick={updateProduct}>Add Product</button>
            <Link href={"/products"}>Go to ProductList</Link>
        </div>
    )
}