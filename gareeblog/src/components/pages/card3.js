import React from 'react';
import './card.css';
import eq from '../../images2/earthquake.webp'
// import pic from'../pages/Webp.net-resizeimage'


function card3() {
    return (
        <>
            <div className='cardlayout'>
                <div className='cardphoto'>
                    <img src={eq}></img>
                </div>
                <div className='text'>
                    In times of crisis and disaster, communities across the world turn inward to embrace those they love and support, while extending their kindness and generosity to those affected. This generosity turns into thousands of volunteer hours, millions of dollars in donations, and tons of donated supplies.



                    When disaster strikes a community -- whether it be by natural or man-made causes -- we provide lists of highly rated organizations working to help those affected in whatever way they can. These charities are extraordinarily effective at what they do, giving you the chance to support a cause where you’ll have an impact.
                </div>
            </div>
        </>
    )
}

export default card3