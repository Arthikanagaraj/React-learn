import React from 'react';
function WithoutJSX()
{
    return(
        React.createElement('div',null,React.createElement('h1',null,'Hello'))
    )
}
export default WithoutJSX