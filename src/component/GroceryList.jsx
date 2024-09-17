import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


function GroceryList() {


    const [item, setitem] = useState([])
    const [input, setinput] = useState("")

    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setitem(res.data)
    }




    useEffect(() => {
        handlefetch()

    }, [])

    const handleinput = (e) => {
        setinput(e.target.value);

    }
    const handlepost = async () => {
        let body = {
            grocery: input,
        }


        let post = await axios.post("http://localhost:3000/todoList", body);


        alert("success")
        handlefetch();
    }


    const handledelete=async(id)=>{
        let da = await axios.delete(`http://localhost:3000/todoList/${id}`) 
        handlefetch();
    }

    const handleedit= async(no)=>{
        let rs = prompt("enter item",item[no].grocery)

        let body = {
            id:item[no].id,
            grocery:rs,
        }

        let up = await axios.put(`http://localhost:3000/todoList/${item[no].id}`,body)

        handlefetch()
    }

    return (
        <div>
            <h1>GroceryList</h1>


            <input onChange={handleinput} placeholder="Enter the item" />
            <button onClick={handlepost}>submit</button>


            {item.map((da, i) => (
                <div>

                    <h2>
                        {" "}
                        {i + 1}.{da.grocery}

                        <span onClick={()=>handleedit(i)}><BiSolidEdit /></span>
                        <span onClick={()=>handledelete(da.id)}><MdDelete />
                        </span>

                    </h2>

                </div>
            ))}


        </div>
    )
}

export default GroceryList 