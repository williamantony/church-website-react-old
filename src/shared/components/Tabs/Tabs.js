import React from "react";
import { connect } from "react-redux";
import { initTabSelection } from "../../redux/actions";
import TabLink from "../TabLink/TabLink";
import "./Tabs.css";

const Tabs = function ({ set, children, initTabSelection }) {
  const tabs = {
    links: [],
    content: [],
  };

  React.Children.forEach(children, (child) => {
    const componentName = child.type.name || child.type.WrappedComponent.name;

    if (componentName === "TabItem") {
      const { name, text } = child.props;

      initTabSelection(set, name);

      const commonProps = {
        key: name,
        set,
        name,
      };

      tabs.links.push(<TabLink {...commonProps} text={text} />);

      tabs.content.push(React.cloneElement(child, commonProps));
    }
  });

  return (
    <div className="Tabs">
      <div className="Tabs__links">{tabs.links}</div>
      <div className="Tabs__content">{tabs.content}</div>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  initTabSelection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
