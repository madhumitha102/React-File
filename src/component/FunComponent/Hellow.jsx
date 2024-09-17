import React, { useState } from "react";

const Hellow = () => {

    const [wish, setwish] = useState("today is a beautifull day")

    const [email, setemail] = useState (["madhumitharengaraj@gmail.com", "ragaviv23@gmail.com"])

    const handleclick = () => {
        setwish("happy morning")
    }


    return (
        <div>
            <h1>hello goodmorning</h1>
            <h3>{wish}</h3>
            <h1>{email[1]}</h1>
            <button onClick={handleclick}>change</button>
        </div>
    );
}

export default Hellow;