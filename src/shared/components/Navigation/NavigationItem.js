import React, { Component } from "react";
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
    const { menu, level } = this.props;
    const { isCollapsed } = this.state;

    const classes = {
      collapsed: isCollapsed ? " NavigationItem--collapsed" : "",
    };

    return (
      <li className={`NavigationItem${classes.collapsed}`}>
        <NavigationItemBlock
          menu={menu}
          onToggleCollapse={this.handleToggleCollapse}
        />
        <NavigationSet set={menu.children} level={level + 1} />
      </li>
    );
  }
}

export default NavigationItem;
