import React from "react";
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product(){
    //동적 url은 백틱
    const {id} = useParams()

    const url = `https://6038aad04e3a9b0017e93a1c.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content= null

    //에러
    if(product.error)
    {
        content = <p>
            plz refresh or try again later
        </p>
    }

    //로딩
    if(product.loading)
    {
        content = <Loader />
    }

    if(product.data)
    {
        content=
        <div>
            <h1 className="test-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src = {product.data.images[0].imageUrl}
                    alt = {product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )    
}
export default Product