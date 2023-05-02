import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pic from '../images2/Screen+Shot+2020-06-07+at+12.31.30+PM.png'
import myself from '../images2/IMG_20200923_153803_560.jpg'
import cows from'../images2/cows.jpg'
import earthquake from '../images2/earthquake.webp'
import ukc from '../images2/ukc.jpg'
import pmc from '../images2/pmc.jpg'
import dogs from '../images2/dogs.webp'
import Footer from './Footer';
// import footer from './footer';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Check out more about this page!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={cows}
              text=<h5>'DONATION FOR COWS'</h5>
              text1='Donating for cows can help save them from starvation and provide them with food and shelter1. According to ancient texts, donating a cow can liberate you and your ancestors from sins committed knowingly or unknowingly during one’s lifetime2. Saving cows is saving the nation and the world.'

              
              
              
              path='/card1'
            />
           <CardItem
              src={pic}
              text=<h5>'DONATION FOR ORPHAN KIDS'</h5>
              text1=' Donating to orphan kids can help provide them with basic necessities such as food, shelter, and clothing. It can also help provide them with education and medical care1. When children are connected to their families, extended families, and loving foster families, they can enjoy healthy and productive lives.'
              
              path='/card2'
              />
             <CardItem
             src={earthquake}
             text=<h5>'DONATION FOR SYRIA EARTHQUAKE'</h5>
             text1='Donating cows is a common practice in India. Cow donation is made to Brahmins, temples, religious organizations like Mutts and other organizations. Most of the cow donation performed with the intention of getting specific returns are made to the temples, Brahmins or the Mutts'
              
              path='/card3'
              />
          </ul>


         
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={ukc}
              text='When you sponsor a child , you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.'
              
              path='/card1'
              />
           <CardItem
              src={pmc}
              text='When you sponsor a child , you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.'
              
              path='/card1'
              />
              <CardItem
              src={dogs}
              text="Hi,I'm Harshita Sahu.I'd describe myself as a person with a versatile skill-set, a lot of integrity and a willingness to learn new things. I'm a motivated worker and a fast learner. I'm adept at solving problems, and I believe my ability to think quickly on my feet is one of my greatest asset. This website is made by me using React,Express and Stripe"
              
              path='/contact'
              />  
          </ul>


         
        </div>
      </div>
      <Footer/>
    </div>
    
    );
  }
  
  export default Cards;