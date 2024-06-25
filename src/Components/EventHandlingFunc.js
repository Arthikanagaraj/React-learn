import React from 'react';
function EventHandlingFunc(){
    function ClickHandler(){
        console.log("Button Clicked")
    }
    return(
        <button onClick={ClickHandler}>Click</button>
    )
}
export default EventHandlingFunc