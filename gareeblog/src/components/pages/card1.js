import React from 'react';
import './card.css';
import cows from'../../images2/cows resize.jpg'
// import pic from'../pages/Webp.net-resizeimage'


function card1() {
    return (
        <>
            <div className='cardlayout'>
                <div className='cardphoto'>
                    <img src={cows}></img>
                </div>
                <div className='text'>
                Donating for cows can help save them from starvation and provide them with food and shelter1. According to ancient texts, donating a cow can liberate you and your ancestors from sins committed knowingly or unknowingly during one’s lifetime2. Saving cows is saving the nation and the world. All auspiciousness originates from the cow, and the Gods consider them as Goddesses. They bestow so much of happiness that many worship them, because their milk supports the world of humans, while their ghee, offered in sacrifice, pleases the Gods. The cow holds the soul of the earth2.
                </div>
            </div>
        </>
    )
}

export default card1