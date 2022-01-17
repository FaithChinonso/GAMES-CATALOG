import "./style.css";
const SearchFilter = (props) => {
  const groupDropDownHandler = (e) => {
    props.onFilterChange(e.target.value);
  };
  const levelDropDownHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className=".search-filter">
      <div className="search-filter__control">
        <label>Filter By Group</label>
        <select value={props.groupSelected} onChange={groupDropDownHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className="search-filter__control">
        <label>Filter By Level</label>
        <select value={props.levelSelected} onChange={levelDropDownHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
