import React, { useCallback, useEffect, useMemo, useState } from "react";

function UseHooks() {


    const expensiveoperation = () => {
        console.log("time taking process");

    }

    let memo = useMemo(() => {
        expensiveoperation()
    }, [])

    useCallback(()=>{
        expensiveoperation() 
    },[])


    const [count, setcount] = useState(null)

    const handleclick = () => (
        setcount(count + 1)
    )

    useEffect = (() => {
        console.log("show first")
    })


    return (
        <div>

            <h1>hooks concept: {count}</h1>
            <button onClick={handleclick}> add</button>

        </div>
    )
}

export default React.memo (UseHooks);