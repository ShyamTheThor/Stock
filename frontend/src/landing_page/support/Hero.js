import React from 'react'

function Hero() {
    return (
        <section className='container-fluid py-5' id='full-container'>

            <div className='p-5' id="wrapper">
                <h3>Support Portal</h3>
                <h3>Track Tickets</h3>
            </div>

            <div
                id="wrapper" 

            >
                <div className='col-6 pe-5'>
                    <h3 className='mb-4'>
                        Search for an answer or browse help Topics to create a Ticket
                    </h3>

                    <input
                        placeholder='How do i Activate F&O'
                        className='form-control p-3 mb-4'
                    />

                    <a href='' style={{ color: "white" }}>Track Account Opening</a>&nbsp;&nbsp;
                    <a href='' style={{ color: "white" }}>Track Segment Activation</a>&nbsp;&nbsp;
                    <a href='' style={{ color: "white" }}>Intraday Trading Margins</a>&nbsp;&nbsp;
                    <a href='' style={{ color: "white" }}>Kite user manual</a>
                </div>

                <div className='col-5 offset-1'>
    <h2 className='mb-4'>Featured</h2>

    <a href='' style={{ color: "white" }}>
        1. Current Takeovers and Delisting
    </a>

    <br /><br />

    <a href='' style={{ color: "white" }}>
        2. Latest Intraday leverages
    </a>
</div>
</div>

        </section>
    );
}

export default Hero;