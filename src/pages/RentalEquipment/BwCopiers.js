import React, { Fragment } from "react";
import brochmp7001a from "../Index/webimages/brochmp7001a.png";
import brochmp7001b from "../Index/webimages/brochmp7001b.png";
import brochmp7001c from "../Index/webimages/brochmp7001c.png";
import brochmp7001d from "../Index/webimages/brochmp7001d.png";

import Header from "../../shared/components/Header";
function Copiers() {
  return (
    <Fragment>
      <Header />

      <font size="6" color="#0000FF">
        <img
          border="0"
          src={brochmp7001a}
          width="713"
          height="856"
          alt="Phila Philly Philadelphia"
        />
      </font>
      <font size="6" color="#0000FF">
        <img
          border="0"
          src={brochmp7001b}
          width="713"
          height="956"
          alt="Phila Philly Philadelphia"
        />
      </font>
      <font size="6" color="#0000FF">
        <img
          border="0"
          src={brochmp7001c}
          width="713"
          height="956"
          alt="Phila Philly Philadelphia"
        />
      </font>
      <font size="6" color="#0000FF">
        <img
          border="0"
          src={brochmp7001d}
          width="713"
          height="956"
          alt="Phila Philly Philadelphia"
        />
      </font>
    </Fragment>
  );
}

export default Copiers;
