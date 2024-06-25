import React, {useState} from 'react'
function Counter(){
    const[count,setCount]=useState(0);
    function changeValue(){
        setCount(count+1)
    }
    return (
        <>
        <button onClick={changeValue}>Click</button>
        <h2>{count}</h2>
        </>
    )
}
export default Counter