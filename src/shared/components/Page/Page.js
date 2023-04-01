import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { setPageName, closeDrawer } from "../../redux/actions";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import "./Page.css";

const Page = function ({
  name,
  isActive,
  isScrollable,
  setPageName,
  children,
}) {
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    setPageName(name);

    window.scrollTo(0, 0);

    setTimeout(() => {
      // props.closeDrawer();
      setLoadStatus(true);
    }, 250);
  }, []);

  if (isScrollable) document.body.classList.remove("no-scroll");
  else document.body.classList.add("no-scroll");

  const PageClass = classNames(
    "Page",
    `Page--${name}`,
    `Page--${isActive ? "active" : "inactive"}`,
    {
      "Page--loaded": isLoaded,
    }
  );

  return (
    <div className="wrapper wrapper--outer">
      <div className={PageClass}>
        <Drawer />
        <div className="Page__content">
          {children}
          <Footer />
        </div>
        <div className="Page__overlay"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isActive, isScrollable } = state.page;
  return {
    isActive,
    isScrollable,
  };
};

const mapDispatchToProps = {
  setPageName,
  closeDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
