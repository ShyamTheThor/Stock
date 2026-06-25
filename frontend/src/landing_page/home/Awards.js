import React from "react";

function Awards() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Space Column */}
        <div className="col-lg-1"></div>

        {/* Right Side */}
        <div className="col-lg-6">
          <h1 className="mb-4">Largest Stock Broker in India</h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;