import React, { useEffect, useState } from "react";
import PropsComp from "./PropsComp";


function LifeCycleFun(props){

    const[count,setcount] = useState(0)

    const handleclick = ()=>{
        setcount(count+1)

    }

    useEffect(() => {
        console.log("madhu");

        return()=>{
            console.log("logged out");
            
        }

 

    },[count])


    return(

        <div>
        <h1>apicall-{count}</h1>
        <h2>{props.name} - {props.age}</h2>


        {/* <PropsComp names = {["zasha","butter","coco",]}/> */}


        <button onClick={handleclick}>add</button>
        </div>
    )
}

export default LifeCycleFun