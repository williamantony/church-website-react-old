import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { focusSearchInput, unfocusSearchInput } from "../../redux/actions";
import "./SearchBox.css";

const SearchBox = function (props) {
  const inputElement = useRef();

  useEffect(() => {
    autoFocus();
  }, []);

  const autoFocus = () => {
    if (!props.autofocus) return false;

    setTimeout(() => {
      inputElement.current.focus();
    }, 1000);
  };

  const { isFocused, focusSearchInput, unfocusSearchInput } = props;

  const SearchBoxClass = classNames("SearchBox", {
    "SearchBox--focused": isFocused,
  });

  return (
    <div className={SearchBoxClass}>
      <div
        className="SearchBox__overlay"
        onMouseDown={unfocusSearchInput}
      ></div>
      <div className="SearchBox__block" onMouseDown={focusSearchInput}>
        <div className="SearchBox__input">
          <input
            ref={inputElement}
            type="text"
            className="SearchBox__input-element"
            onFocus={focusSearchInput}
          />
        </div>
        <div className="SearchBox__icon"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFocused: state.search.isFocused,
  };
};

const mapDispatchToProps = {
  focusSearchInput,
  unfocusSearchInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
