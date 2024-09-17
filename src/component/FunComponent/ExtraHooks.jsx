import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function ExtraHooks(){

    const inputref = useRef(null)

    useEffect(()=>{
        inputref.current.focus()

        console.log("useeffect");
        
    },[])


    useLayoutEffect(()=>{

        console.log("uselayout");
        

    },[])

    return(

        <div>
            <h1>userref</h1>
            <input ref={inputref} placeholder="Enter your name" />

            <button>add</button>
        </div>
    )
}
export default ExtraHooks;