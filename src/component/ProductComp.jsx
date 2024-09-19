import React from "react";
import useFetchApi from "./useFetchApi";

function ProductComp(){

    const{data}=useFetchApi("https://fakestoreapi.com/products")

    return(
        <div>
            <h1>product page</h1>

            <div className="row">
            {data.map((da)=>(
                <div class="card col-3" style={{width: "18rem"}}>
                <img src={da.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">{da.title}---{da.price}</p>
                </div>
              </div>
            ))}
            </div>
            
            
        </div>
    )
}


export default ProductComp