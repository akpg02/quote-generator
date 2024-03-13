import React from "react";
import PropTypes from "prop-types";

import { categories } from "../../data";
import "./Category.css";

const categoryArr = categories.concat().sort();

function Category({ category, onChange }) {
  return (
    <select className="categories" value={category} onChange={onChange}>
      {categoryArr.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

Category.propTypes = {
  category: PropTypes.string,
  onChange: PropTypes.func,
};

export default Category;
