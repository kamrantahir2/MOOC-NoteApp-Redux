import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const VisibilityFilter = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange("ALL"))}
        />{" "}
        all
      </div>

      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange("IMPORTANT"))}
        />
        important
      </div>

      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange("NOTIMPORTANT"))}
        />
        not important{" "}
      </div>
    </div>
  );
};

export default VisibilityFilter;
