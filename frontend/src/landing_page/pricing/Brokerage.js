import React from 'react'

function Brokerage() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-8 p-4'>
                    <a href='' style={{ textDecoration: "none" }}>
                        <h4 className='mb-4'>Brokerage Calculator</h4>
                    </a>

                    <ul className='text-muted lh-lg'>
                        <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note.</li>
                        <li>Courier charges apply for physical contract notes.</li>
                        <li>For NRI accounts, brokerage charges may differ.</li>
                    </ul>
                </div>

                <div className='col-lg-4 p-4'>
                    <a href='' style={{ textDecoration: "none" }}>
                        <h4 className='mb-4'>List of Charges</h4>
                    </a>

                    <ul className='text-muted lh-lg'>
                        <li>Account opening charges</li>
                        <li>Annual maintenance charges (AMC)</li>
                        <li>Transaction charges</li>
                        <li>Stamp duty</li>
                        <li>GST and SEBI charges</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;