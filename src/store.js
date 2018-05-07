import { createStore } from "redux";

export const names = (state = "", action) => {
    if (action.type === "NAME_CHANGE") {
        state = action.value;
    }

    return state;
};

export const store = createStore(names);