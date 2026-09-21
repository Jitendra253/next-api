'use client'
import { useState } from 'react'
import  './../style.css'
export default function Page(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const addUser=async()=>{
        let response = await fetch('http://localhost:3000/api/users',{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response =await response.json();
        if(response.success){
            alert("new user added")
        }
        else{
            alert("some error occured")
        }
        console.log(response);
    }
    return(
        <div className='container'>
            <h1>Add New User</h1>
            <input type="text" placeholder="Enter Name" value={name}  onChange={(e)=>setName(e.target.value)} className="input-field" />
            <input type="text" placeholder="Enter Age" value={age}  onChange={(e)=>setAge(e.target.value)} className="input-field" />
            <input type="text" placeholder="Enter Email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="input-field" />
            <button onClick={addUser} className='btn'>Add User</button>
        </div>
    )
}