import React from "react";
import ReactDOM from "react-dom";
import { NameForm } from "./nameForm";

export class FormContainer extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        const store = this.props.store;

        return <div className="row">
            <div className="col-md-2">
                <NameForm store={store} />
            </div>
        </div>;
    }
}
