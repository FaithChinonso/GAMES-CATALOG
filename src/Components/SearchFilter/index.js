import "./style.css";

const SearchFilter = (props) => {
  const groupDropDownHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  // const levelDropDownHandler = (e) => {
  //   props.onFilterChange(e.target.value);
  // };

  return (
    <div className="search-filter">
      <div className="search-filter__control">
        <label>Filter By Group</label>
        <select value={props.selected} onChange={groupDropDownHandler}>
          <option value="Academic">Academic</option>
          <option value="Financial Literacy">Financial</option>
        </select>
      </div>
      <div className="search-filter__control">
        <label>Filter By Level</label>
        <select value={props.levelSelected}>
          <option value="stage1">Key Stage 1</option>
          <option value="stage2">Key Stage 2</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
