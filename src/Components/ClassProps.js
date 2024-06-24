import React from 'react';
class ClassProps extends React.Component{
    render()
    {
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
export default ClassProps