import React from "react";
class EventBindingHandler3 extends React.Component{
    constructor(props){
    super(props)
    this.state={
      message:"Welcome"
    }
    
    }
    changeHandler(){
        this.setState({
            message:"Bye"
        })
    }
    render(){
        return(
           <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeHandler.bind(this)}>Click</button>
           </div>
        )
    }
}
export default EventBindingHandler3