import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createNote } from "./reducers/noteReducer.js";
import { filterChange } from "./reducers/filterReducer.js";

import noteReducer from "./reducers/noteReducer.js";
import filterReducer from "./reducers/filterReducer.js";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(filterChange("IMPORTANT"));
store.dispatch(
  createNote("combineReducers forms one reducer from many simple reducers")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <div />
//   </Provider>
// );
