import React from 'react';
import ReactDOM from 'react-dom';
import ChildDept from './ChildDept';
import Count from './ChildDept';

class ParentDept extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <ChildDept />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Department</button>
            </div>
        );
    }
}
export default ParentDept;