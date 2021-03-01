import React from "react";
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home(){

    const url = `https://6038aad04e3a9b0017e93a1c.mockapi.io/api/v1/products/`
    
    let products = useAxiosGet(url)

    let content = null
    
    //에러
    if(products.error)
    {
        content = <p>
            plz refresh or try again later
        </p>
    }

    //로딩
    if(products.loading)
    {
        content = <Loader />
    }

    //content
    if(products.data)
    {
        content=
        products.data.map((product,key)=>
        <div key={product.id}>
            <ProductCard product = {product} />
        </div>
        )
    }



    return (
    <div>
        <h1 className="font-bold text-2xl"> 
            this is home page !
        </h1>
        {content}
    </div>
    )
    
}

export default Home