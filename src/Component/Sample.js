import React from 'react';
import Details from './Details';

// function Sample(props){
//     return(
//         <div>
//<h1>Function Component using props</h1>
//             <h1>I am {props.name}</h1>
//             <h2> My ID no {props.id}</h2>
//         </div>
//     );
// }

class Sample extends React.Component {
    render() {
        return (<div><h1>Props Demo</h1>
            <p>Name:{this.props.name}</p>
            <p> ID:{this.props.id}</p>

            <Details dept="CSE" />
        </div>
        );
    }
}
export default Sample;