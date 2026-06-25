import React from 'react'

function RaiseTicket() {
    return (
       <div className="container py-5">
    <div className="row mb-5">
        <h1 className="mb-0">
            To Create a Ticket, select a relevant topic
        </h1>
    </div>

    {/* First Row */}
    <div className="row g-5 mb-5">

        <div className="col-md-4 px-4">
            <h4 className="mb-4">
                <i className="fa-solid fa-circle-plus me-2"></i>
                Account Opening
            </h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Online Account</a>
                <a href="" style={{ textDecoration: "none" }}>Offline Account</a>
                <a href="" style={{ textDecoration: "none" }}>Account Opening</a>
                <a href="" style={{ textDecoration: "none" }}>Partnership and HUF</a>
                <a href="" style={{ textDecoration: "none" }}>NRI Account</a>
                <a href="" style={{ textDecoration: "none" }}>Opening Charges</a>
                <a href="" style={{ textDecoration: "none" }}>First Bank 3-in-1 Account</a>
            </div>
        </div>

        <div className="col-md-4 px-4">
            <h4 className="mb-4">Your Zerodha Account</h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Login Credentials</a>
                <a href="" style={{ textDecoration: "none" }}>Account Modification</a>
                <a href="" style={{ textDecoration: "none" }}>DP ID and Bank Details</a>
                <a href="" style={{ textDecoration: "none" }}>Your Profile</a>
                <a href="" style={{ textDecoration: "none" }}>Transfer and Conversion of Shares</a>
            </div>
        </div>

        <div className="col-md-4 px-4">
            <h4 className="mb-4">
                <i className="fa-solid fa-circle-plus me-2"></i>
                Trading & Platforms
            </h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Margin/Leverage</a>
                <a href="" style={{ textDecoration: "none" }}>Kite Web and Mobile</a>
                <a href="" style={{ textDecoration: "none" }}>Trading FAQs</a>
                <a href="" style={{ textDecoration: "none" }}>Corporate Actions</a>
                <a href="" style={{ textDecoration: "none" }}>Sentinel</a>
                <a href="" style={{ textDecoration: "none" }}>Kite API</a>
                <a href="" style={{ textDecoration: "none" }}>Pi and Other Platforms</a>
                <a href="" style={{ textDecoration: "none" }}>GTT</a>
            </div>
        </div>

    </div>

    {/* Second Row */}
    <div className="row g-5 mt-5">

        <div className="col-md-4 px-4">
            <h4 className="mb-4">
                <i className="fa-solid fa-circle-plus me-2"></i>
                Funds
            </h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Add Money</a>
                <a href="" style={{ textDecoration: "none" }}>Withdraw Funds</a>
                <a href="" style={{ textDecoration: "none" }}>Fund Transfer Status</a>
                <a href="" style={{ textDecoration: "none" }}>Payment Issues</a>
                <a href="" style={{ textDecoration: "none" }}>Bank Account Mapping</a>
            </div>
        </div>

        <div className="col-md-4 px-4">
            <h4 className="mb-4">
                <i className="fa-solid fa-chart-column me-2"></i>
                Console
            </h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Tax P&L Report</a>
                <a href="" style={{ textDecoration: "none" }}>Trade History</a>
                <a href="" style={{ textDecoration: "none" }}>Portfolio Reports</a>
                <a href="" style={{ textDecoration: "none" }}>Ledger Statement</a>
                <a href="" style={{ textDecoration: "none" }}>Download Reports</a>
            </div>
        </div>

        <div className="col-md-4 px-4">
            <h4 className="mb-4">
                <i className="fa-solid fa-coins me-2"></i>
                Coin
            </h4>

            <div className="d-flex flex-column gap-2">
                <a href="" style={{ textDecoration: "none" }}>Mutual Funds</a>
                <a href="" style={{ textDecoration: "none" }}>SIP Setup</a>
                <a href="" style={{ textDecoration: "none" }}>Redeem Investments</a>
                <a href="" style={{ textDecoration: "none" }}>Portfolio Tracking</a>
                <a href="" style={{ textDecoration: "none" }}>Coin FAQs</a>
            </div>
        </div>

    </div>
</div>
    );
}

export default RaiseTicket;