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
              text='When you sponsor a child , you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.'
              
              path='/card1'
            />
           <CardItem
              src={pic}
              text='When you sponsor a child , you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.'
              
              path='/hash'
              />
             <CardItem
              src={earthquake}
              text='When you sponsor a child , you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.'
              
              path='/hash'
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