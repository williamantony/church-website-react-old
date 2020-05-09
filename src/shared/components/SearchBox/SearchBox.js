import React, { Component } from "react";
import { connect } from "react-redux";
import { focusSearchInput, unfocusSearchInput } from "../../redux/actions";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: React.createRef(),
    };
  }

  componentDidMount() {
    this.autoFocus();
  }

  autoFocus = () => {
    if (!this.props.autofocus)
      return false;

    setTimeout(() => {
      this.state.input.current.focus();
    }, 1000);
  }

  render() {
    const {
      isFocused,
      focusSearchInput,
      unfocusSearchInput,
    } = this.props;

    const classes = {
      focus: isFocused ? ` SearchBox--focused` : "",
    };

    return (
      <div className={ `SearchBox${ classes.focus }` }>
        <div className="SearchBox__overlay" onMouseDown={ unfocusSearchInput }></div>
        <div className="SearchBox__block" onMouseDown={ focusSearchInput }>
          <div className="SearchBox__input">
            <input
              ref={ this.state.input }
              type="text"
              className="SearchBox__input-element"
              onFocus={ focusSearchInput }
              />
          </div>
          <div className="SearchBox__icon"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFocused: state.search.isFocused,
  };
};

const mapDispatchToProps = {
  focusSearchInput,
  unfocusSearchInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
