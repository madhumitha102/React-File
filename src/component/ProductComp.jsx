import React from "react";
import useFetchApi from "./useFetchApi";

function ProductComp(){

    const{data}=useFetchApi("https://fakestoreapi.com/products")

    return(
        <div>
            <h1>product page</h1>
        </div>
    )
}


export default ProductComp