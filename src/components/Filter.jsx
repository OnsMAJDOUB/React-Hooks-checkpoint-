import React from "react";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        max={5}
        placeholder="Search by rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
