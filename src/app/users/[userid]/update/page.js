'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import "./../../../style.css"

export default function Page(){
    const {userid} = useParams()
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    useEffect(()=>{
        getUserDetails();
    },[])
    const getUserDetails= async ()=>{
        let data = await fetch("http://localhost:3000/api/users/"+userid);
        data = await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }
    const updateUser=async ()=>{
        let result = await fetch("http://localhost:3000/api/users/"+userid,{
            method:"PUT",
            body:JSON.stringify({name,age,email})
        })
        result = await result.json();
        console.log(result)
        if(result.success){
            alert("User updated Success Fully")
        }else{
            alert("Please Try with valid input")
        }
    }
    return(
        <div className="container">
            <h1>Update User Details</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} className="input-field"/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}className="input-field"/>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}className="input-field"/>
            <button onClick={updateUser}>Update User</button>
        </div>
    )

}