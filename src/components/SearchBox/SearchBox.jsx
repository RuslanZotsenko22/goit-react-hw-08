import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.search}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
