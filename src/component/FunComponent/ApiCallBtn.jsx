import React, { useState } from "react";

function ApiCallBtn() {

    const [apidata, setapidata] = useState([])



    const handlefetch = async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()

        setapidata(data)
    }
    return (
        <div className="ms-5 mt-3">
            <h1>Product List</h1>


            {apidata.map((da) => (
                <div>
                    <img height={200} width={200} src={da.image}/>
                    <h1>{da.title}</h1>
                    <h2>{da.price}</h2>
                </div>
            ))}

            <button onClick={handlefetch} className="btn btn-primary">product call</button>
        </div>
    )
}

export default ApiCallBtn;