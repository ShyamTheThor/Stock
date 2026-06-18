import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-5">
          <h1 className="mb-5">Trust with confidence</h1>

          <div className="mb-4">
            <h4>Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4>No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, gamification, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h4>Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Space Between Columns */}
        <div className="col-lg-1"></div>

        {/* Right Section */}
        <div className="col-lg-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "90%" }}
          />

          <div className="d-flex justify-content-center gap-5">
            <Link to="/product" className="text-decoration-none">
              Explore our Products{" "}
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </Link>

            <Link to="" className="text-decoration-none">
              Try Kite{" "}
              
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;