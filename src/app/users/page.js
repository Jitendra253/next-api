import Link from "next/link";
import "./../style.css"
async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data
}
export default async function Page(){
    const users = await getUsers();
    console.log(users)
    return(
        <div>
            <h1>
                user list
            </h1>
            {
                users.map((user) => (
                    <div key={user.id} className="user-item">
                    <h2>
                        <Link href={`/users/${user.id}`}> {user.name} </Link>
                        <span>
                            <Link href={`/users/${user.id}/update`}>  Edit  </Link>
                        </span>
                    </h2>
                    </div>
                ))
                }
        </div>
    )
}