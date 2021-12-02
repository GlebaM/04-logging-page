import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["wrap-header"]}>
        <h1>A Typical Page</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default MainHeader;
