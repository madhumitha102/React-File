import React, { useState } from "react";


function CounterFun() {


    const [count, setcount] = useState(0)

    const [inputdata, setinputdata] = useState(0)


    const handleadd = () => {
        setcount(count + 1)
    }

    const handlesub = () => {
        // if (count == 0) {
        //     setcount(0)
        // }

        // else {

        setcount(count - 1)
        // }
    }

    const handlechange = (e) => {
        setinputdata(e.target.value);


    }
    return (
        <div>

            <input onChange={handlechange} className="m-5" placeholder="Enter a number" />
            <h1>{inputdata}</h1>

            <button className="btn btn-primary m-5" >Add Input</button>
            <h1 className="m-5">count:{count}</h1>

            <button onClick={handleadd} className="btn btn-primary m-5">add</button>

            {count == 0 ? "" :
                <button onClick={handlesub} className="btn btn-danger m-3">sub</button>

            }

        </div>
    );
}


export default CounterFun;