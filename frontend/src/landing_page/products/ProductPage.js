import React from 'react'
import Hero from './Hero';
import LeftImage from './Left-img';
import RightImage from './Right-img';
import Universe from './Universe';


function ProductsPage() {
        return (
                <>
                        <Hero />
                        <LeftImage ImageLink="/media/images/kite.png" ProductName="Kite" ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.

" TryDemo="" LearnMore="" GooglePlay="" AppleStore="" />
                        <RightImage ImageLink="media/images/console.png" ProductName="Console" ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." LearnMore="" />
                        <LeftImage ImageLink="media/images/coin.png" ProductName="Coin" ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

" TryDemo="" LearnMore="" GooglePlay="" AppleStore="" />
                        <RightImage ImageLink="media/images/kiteconnect.png" ProductName="Kite Connect API" ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." LearnMore="" />
                        <LeftImage ImageLink="/media/images/varsity.png" ProductName="Varsity mobile" ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

" TryDemo="" LearnMore="" GooglePlay="" AppleStore="" />
        <Universe/>
                </>

        );
}

export default ProductsPage;