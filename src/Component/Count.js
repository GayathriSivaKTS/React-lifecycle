import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counts: 2 };
    }
    //to increase the value
    handleClick() {
        // this.setState({ counts: document.getElementById("num1").value });
        // this.setState({ count: document.getElementById("num2").value });

        return (
            this.setState({ counts: this.state.counts + 1 }));
    }

    //to double the value
    handle1Click() {
        return (
            this.setState({ counts: this.state.counts * 2 }));
    }

    //to  reduce the value
    handle2Click() {
        return (
            this.setState({ counts: this.state.counts - 1 }));
    }

    render() {
        return (
            <div>

                <h1>Initial value:{this.state.counts}</h1>
                {/*to get the values from the input field*/}
                {/*  <div>
                    <label for="number">Give me number</label>
                    <input type="number" id="num1"></input></div>
                <div>
                    <label for="number">Give me number</label>
                    <input type="number" id="num2"></input></div> */}

                <div><button onClick={this.handleClick.bind(this)}>Increase value</button></div>
                <div><button onClick={this.handle1Click.bind(this)}>Double the value</button></div>
                <div><button onClick={this.handle2Click.bind(this)}>Reduce the value</button></div>


            </div>);
    }
}
export default Count;