import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createNote } from "./reducers/noteReducer.js";
import { configureStore } from "@reduxjs/toolkit";
import noteService from "./services/notes.js";
import noteReducer, { setNotes } from "./reducers/noteReducer.js";
import filterReducer from "./reducers/filterReducer.js";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

noteService.getAll().then((notes) => store.dispatch(setNotes(notes)));

store.subscribe(() => console.log(store.getState()));
store.dispatch(
  createNote("combineReducers forms one reducer from many simple reducers")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
