const getProducts = async () =>{
    let data =await fetch("http://localhost:3000/api/products");
    data =await data.json();
    if(data.success){
        return data.result;
    }else{
        return {success:false}
    }
}
export default async function Page(){
    let products =await getProducts();
    console.log(products)
    return(
        <div>
            <h1>ProductList</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item)=>(
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
               
            </table>
        </div>
    )
}