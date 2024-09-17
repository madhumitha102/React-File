import React, { useEffect, useState } from "react";

function Effect() {

    const [apidata, setapidata] = useState([])
    const [count, setcount] = useState(0)

    const handlefetch = async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        setapidata(data)

    }

    useEffect(() => {
        handlefetch()

        return () => {
            console.log("unmounting");

        }

    }, [count])

    const refresh = () => {
        setcount(count + 1)
    }

    return (

        <div className="mt-5 ms-3">
            <h1 onClick={refresh}>Effect{count}</h1>
            {apidata.map((da) => (
                <div>
                    <img src={da.image} height={200} width={200} />
                    <h1>{da.title}</h1>
                    <h2>{da.price}</h2>
                </div>


            ))}

            {/* <button onClick={handlefetch}>ApiCall</button> */}


        </div>
    )
}

export default Effect;