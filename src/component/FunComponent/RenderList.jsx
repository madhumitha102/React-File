import React, { useState } from "react";
import "./RenderList.css"

function RenderList() {

    const [namelist, setnamelist] = useState(
        [
            { id: 1, name: "madhumitha", add: "trichy" },
            { id: 2, name: "ragavi", add: "kulithalai" },
            { id: 3, name: "parthiban", add: "panayakurichy" },
            { id: 4, name: "zasha", add: "namakkal" }
        ]
    )


    return (

        <div className="emp">

            <h1>Namelist</h1>
            {namelist.map((li,i) => (
                <div key={i}>
                    {li.name}- {li.add}
                </div>

            ))}
        </div>
    )
}

export default RenderList;