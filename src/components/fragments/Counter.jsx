import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

componentDidMount() {
    this.setState({count: this.state.count + 1});
    console.log("componentDidMount");
}

componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
        this.setState({count: 5});
}
}   

    render () {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button className="bg-black text-white p-5" onClick={() => this.setState({count: this.state.count + 2})}>+</button>
        </div>
        );
    }
}

export default Counter;