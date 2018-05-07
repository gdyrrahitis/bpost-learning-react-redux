import React from "react";
import ReactDOM from "react-dom";

export class Jumbotron extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        return <div className="jumbotron">
            <h3>{this.props.hello}</h3>
        </div>;
    }
}