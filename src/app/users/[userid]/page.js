
async function getUsers(id) {
    let data = await fetch( `http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data
}
export default async function Page({params}){
    const {userid} = await params;
    const details = await getUsers(userid)
    return(
        <div>
            <h1>user Details</h1>
            <h4>{details.result.name}</h4>
            <h4>{details.result.id}</h4>
            <h4>{details.result.email}</h4>
        </div>
    )
}