import React from "react";
import ReactDOM from "react-dom";

import { Jumbotron } from "./jumbotron";
import { Greet } from "./greet";
import { FormContainer } from "./form-container";

export class App extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        const store = this.props.store;
        const hello = this.props.hello;

        return <div>
            <div className="container">
                <Jumbotron hello={hello} />
                <FormContainer store={store} />
                <Greet store={store} />
            </div>
        </div>
    }
}