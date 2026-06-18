import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-5 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>

        {/* Space */}
        <div className="col-lg-1"></div>

        {/* Right Section */}
        <div className="col-lg-6">

          <h1 className="mb-4">
            Free and open market education
          </h1>

          <div className="mb-5">
            <p className="mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <Link to="" className="text-decoration-none">
              Varsity
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </Link>
          </div>

          <div>
            <p className="mb-3">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <Link to="" className="text-decoration-none">
              TradingQ&A
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;