'use client'
export default function DeleteUser({id}){
    const deteteUser=async ()=>{
        let result = await fetch("/api/users/"+id,{
            method:"delete"
        })
        result = await result.json();
        if(result.success){
            alert("User deleted")
        }
    }
    return(
        <button onClick={deteteUser}>Delete</button>
    )
}