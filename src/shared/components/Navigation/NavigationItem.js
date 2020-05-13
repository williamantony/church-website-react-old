import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationSet from "./NavigationSet";
import NavigationItemBlock from "./NavigationItemBlock";

class NavigationItem extends Component {
  state = {
    isCollapsed: true,
  };

  handleToggleCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    const { pageName, menu, level } = this.props;
    const { isCollapsed } = this.state;

    const classes = {
      collapsed: isCollapsed ? " NavigationItem--collapsed" : "",
      selected: pageName === menu.id ? " NavigationItem--selected" : "",
    };

    return (
      <li className={`NavigationItem${classes.collapsed}${classes.selected}`}>
        <NavigationItemBlock
          menu={menu}
          level={level}
          onToggleCollapse={this.handleToggleCollapse}
        />
        <NavigationSet
          set={menu.children}
          level={level + 1}
          isCollapsed={isCollapsed}
        />
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageName: state.page.name,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
