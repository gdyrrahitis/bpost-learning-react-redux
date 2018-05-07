import React from "react";
import ReactDOM from "react-dom";

export class Greet extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    sayHi(props) {
        if (!props.value || props.value.length < 3) {
            return <h4 className="text-danger">
                Please enter a name so I can greet you properly!
            </h4>;
        }

        return <h4>{props.value} says hi!</h4>;
    }

    render() {
        const store = this.props.store;
        const value = store.getState();
        return <div className="row">
            <div className="col-md-12">
                <this.sayHi value={value} />
            </div>
        </div>
    }
}