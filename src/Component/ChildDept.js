import React from 'react';
import reactDom from 'react-dom';

export default class ChildDept extends React.Component {
    // constructor method initializes the object
    constructor(props) {
        super(props);
        this.state = { Dept: "Software trainee" };
    }



    handleClick = () => {
        this.setState({ Dept: "Research and Development" });
    }
    // render the elements to DOM
    render() {
        return (
            <div>
                <h1>My department is {this.state.Dept}</h1>
                <div><button onClick={this.handleClick}>Update</button></div>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>

        )
    }

    // After render to change the state and to use the API
    componentDidMount() {

        this.setState({ Dept: "HR" })

    }

    // Method Decides whether the state allowed to update or not
    shouldComponentUpdate() {
        return true;
    }

    // To get the state value before updation
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "My previous Department is " + prevState.Dept;
    }

    //Updated state
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "My current Department is " + this.state.Dept;
    }

    // To remove the DOM elemets
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }



}
