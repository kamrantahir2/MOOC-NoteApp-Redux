import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

function App() {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote />

      <div>
        <div>
          <input
            type="radio"
            name="filter"
            onChange={() => filterSelected("ALL")}
          />{" "}
          all
        </div>

        <div>
          <input
            type="radio"
            name="filter"
            onChange={() => filterSelected("IMPORTANT")}
          />
          important
        </div>

        <div>
          <input
            type="radio"
            name="filter"
            onChange={() => filterSelected("NOTIMPORTANT")}
          />
          not important{" "}
        </div>
      </div>

      <Notes />
    </div>
  );
}

export default App;
