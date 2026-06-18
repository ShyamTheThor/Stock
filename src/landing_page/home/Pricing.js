import React from 'react'
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>
                        Unbeatable pricing
                    </h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <Link to="/pricing" className="text-decoration-none">
              See Pricing{" "}
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </Link>
                </div>
                <div className='col-2'>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1><i className="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1><i className="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
     );
}

export default Pricing;