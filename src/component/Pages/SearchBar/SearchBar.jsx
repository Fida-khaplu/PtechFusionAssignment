import React from "react";
import iconImg from '../../../assets/SearchBar/icon.png'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="container-fluid">
      <div className="row mainSearchBar">
        {/**Select class */}
        <div className="selectClass col-lg-2">
          <select
            className="form-select form-select-sm searchSelectClass"
            aria-label=".form-select-sm example"
          >
            <option selected>Hot</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/**Search class */}
        <div className="SearchClass col-lg-6">
        <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
