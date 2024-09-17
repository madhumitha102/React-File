import React, { useState } from "react";

function InputComp() {


    const [inname, setinname] = useState("")
    const [inemail, setinemail] = useState("")
    const [innum, setinnum] = useState("")
    const [inpass, setinpass] = useState("")
    const [inconfo, setinconfo] = useState("")


    const [islog, setislog] = useState(false)

    const handlename = (e) => {
        setinname(e.target.value)
    }

    const handleemail = (e) => {
        setinemail(e.target.value)
    }

    const handlephone = (e) => {
        setinnum(e.target.value)
    }

    const handlepassword = (e) => {
        setinpass(e.target.value)
    }

    const handleconfirm = (e) => {
        setinconfo(e.target.value)
    }

    const handleshow = () => {
        setislog(true)
    }


    return (
        <div>


            {!islog ?
                <div>
                    <input onChange={handlename} placeholder="enter ur name" /><br />

                    <br />

                    <input onChange={handleemail} placeholder="enter ur mail id" /> <br />

                    <br />

                    <input onChange={handlephone} placeholder="enter ur phone number" /> <br />

                    <br />

                    <input onChange={handlepassword} type="password" placeholder="enter ur password" /> <br />

                    <br />

                    <input onChange={handleconfirm} type="password" placeholder="reenter your password" /> <br />

                    <br />

                    <button onClick={handleshow}>submit</button>

                </div>
                :
                <div>
                    <h1>Input</h1>
                    <h3> name: {inname}</h3>
                    <h2> email:{inemail}</h2>
                    <h3> phone:{innum}</h3>
                    <h4> password:{inpass}</h4>
                    <br />

                </div>
            }
        </div>
    )
}


export default InputComp