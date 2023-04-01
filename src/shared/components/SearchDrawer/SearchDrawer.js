import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./SearchDrawer.css";

const SearchDrawer = function (props) {
  return (
    <div className="SearchDrawer">
      <div className="wrapper wrapper--800px">
        <div className="SearchDrawer__holder">
          <SearchBox autofocus={true} />
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
