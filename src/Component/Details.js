import React from 'react';
import Marks from './Marks';
const Details = (props) => {
    return (
        <div>
            <p>Department:{props.dept}</p>
            <Marks mark="92" />
        </div>
    );

}
export default Details;