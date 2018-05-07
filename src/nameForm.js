import React from "react";
import ReactDOM from "react-dom";

export class NameForm extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        const store = this.props.store;
        const value = store.getState();

        return <form>
            <div className="form-group">
                <input placeholder="Enter your name"
                    className="form-control" type="text"
                    value={value}
                    onChange={(event) => {
                        store.dispatch({
                            type: "NAME_CHANGE",
                            value: event.target.value
                        })
                    }} />
            </div>
        </form>
    }
}