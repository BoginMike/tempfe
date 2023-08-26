import React, { useEffect, useState, Fragment } from "react";
import HPBWLaser from "../Index/webimages/HPLaserJetEntM605NBW.png";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../../shared/api-utils";
import Header from "../../shared/components/Header";

function BwPrinter() {
  const [printers, setPrinters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // on page load this code will ge execute
    // componentDidMount()

    getApiCall("/bwprinters").then((response) => {
      if (response?.status === false) {
        // redirect to login
        localStorage.clear();
        navigate("/login");
      } else {
        setPrinters(response);
      }
    });
  }, []);

  return (
    <Fragment>
      <Header />

      <font size="6" color="#0000FF">
        <img
          border="0"
          src={HPBWLaser}
          width="653"
          height="556"
          alt="Phila Philly Philadelphia"
        />
      </font>
      {printers.map((x) => (
        <div className="ptr-item">
          {/* <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + x.albumCover}/> */}
          {/* <span>
            <img src={x.copierurl} alt="copier" />{" "}
          </span> */}
          <span>
            <pre>{x.description}</pre>
          </span>
        </div>
      ))}
    </Fragment>
  );
}

export default BwPrinter;
