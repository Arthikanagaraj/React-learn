import React,{Component} from 'react'
class EventHandlingClass extends React.Component{
    ClickHandler()
   {
    console.log(" Clicked")
   }
    render(){
        return(
            <button onClick={this.ClickHandler}>Click</button>
        )
    }
}
export default EventHandlingClass