import React,{Component} from 'react';
class DestructuringClass extends React.Component{
    render(){
        const {name,age}=this.props
        return(
            <h1>Hello {name} {age}</h1>
        )
    }
}
export default DestructuringClass