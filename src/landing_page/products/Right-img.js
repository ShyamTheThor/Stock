import React from 'react'

function Right_img({ImageLink,ProductName,ProductDescription,LearnMore}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
               
                <div className='col-4 p-5 mt-5 pe-5' >
                    <h1>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                        <a href={LearnMore}>Learn More →</a>
                    </div>

                </div>

                <div className='col-8 ps-5'>
                    <img
                        src={ImageLink}
                        className="img-fluid ps-5"
                    />
                </div>

            </div>
        </div>
     );
}

export default Right_img