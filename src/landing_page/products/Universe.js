import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 text-center'>
            <div className='row'>
                <h1 className='mb-3'>The Zerodha Universe</h1>

                <p className='text-muted mb-5'>
                    Extend your trading and investment experience even further with our partner platforms.
                </p>

                <div className='col-4 p-4 mb-5'>
                    <img src='media/images/streakLogo.png' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>

                <div className='col-4 p-4 mb-5'>
                    <img src='media/images/sensibullLogo.svg' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className='col-4 p-4 mb-5'>
                    <img src='media/images/dittoLogo.png' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>

                <div className='col-4 p-4'>
                    <img src='media/images/smallcaseLogo.png' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.
                    </p>
                </div>

                <div className='col-4 p-4'>
                    <img src='media/images/zerodhaFundhouse.png' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className='col-4 p-4'>
                    <img src='media/images/goldenpiLogo.png' className='img-fluid mb-3' style={{height:"60px"}} />
                    <p className='text-muted small px-4'>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <button className=' p-2 btn btn-primary mt-5 mb-5' style={{width:"20%",margin:"0px auto"}}>Sign Up for free</button>
            </div>
        </div>
    );
}

export default Universe;