import React from 'react'

function Left_Image({ImageLink, ProductName,ProductDescription, TryDemo, LearnMore, GooglePlay, AppleStore}) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-8'>
                    <img src={ImageLink} />
                </div>
                <div className='col-4 p-5 mt-5'>
                    <h1 >{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <div >

                    <a href={TryDemo}>Try Demo→</a>
                    <a href={LearnMore} style={{marginLeft:"40px"}}>Learn More→</a>
                    </div>
                    <div className='mt-3'>

                    <a href={GooglePlay} ><img src="/media/images/googlePlayBadge.svg"/></a>
                    <a href={AppleStore} style={{marginLeft:"40px"}}><img src="/media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left_Image;