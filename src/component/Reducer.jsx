import React, { useReducer } from "react";



function Reducer() {

    function operator(state, action) {
        if (action.type == "increment") {
            return {count: state.count + 1};
        }
        if (action.type == "decrement") {
            return{count: state.count - 1}
        }

        if (action.type == "reset"){
            return{count:0}
        }

    }

    const [state, dispatch] = useReducer(operator, { count: 0 })
    
    
    const handleadd = ()=> {
        dispatch({type:"increment"})
    }

    const handlesub = ()=>{
        dispatch({type:"decrement"})
    }

    const handlereset =()=>{
        dispatch({type:"reset"})
    }
    
    
    
    
    
    
    return (
        <div>

            <h1>count:{state.count}</h1>
            <button onClick={handleadd}>Add</button>
            <button onClick={handlesub}>sub</button>
            <button onClick={handlereset}>reset</button>

        </div>
    )
}


export default Reducer