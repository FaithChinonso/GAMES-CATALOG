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
          <option value="academic">Academic</option>
          <option value="financial">Financial Literacy</option>
        </select>
      </div>
      <div className="search-filter__control">
        <label>Filter By Level</label>
        <select value={props.levelSelected} onChange={levelDropDownHandler}>
          <option value="stage1">Key Stage 1</option>
          <option value="stage2">Key Stage 2</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
