import React from "react";
class EventBindingHandler extends React.Component{
    constructor(props){
    super(props)
    this.state={
      message:"Welcome"
    }
    this.changeHandler=this.changeHandler.bind(this)
    }
    changeHandler=()=>{
        this.setState({
            message:"Bye"
        })
    }
    render(){
        return(
           <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeHandler}>Click</button>
           </div>
        )
    }
}
export default EventBindingHandler