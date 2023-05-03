import React from 'react';
import './checkout.css';
import Background from '../../images2/image-20230503-083851-e8634d65.jpeg'



function Contact() {
  return(<>
  <div  className='cm'>Hi, we're Harsh Nemin and Katik.we would describe ourself as persons with a versatile skill-set, a lot of integrity and a willingness to learn new things. I'm a motivated worker and a fast learner. I'm adept at solving problems, and I believe my ability to think quickly on my feet is one of my greatest asset.This website is made by us using React,Express and Stripe.
 <br/> <i className="fas fa-mail-bulk"></i>nhk@gmail.com
 <br/> Connect with me on:
<br/><i className="fab fa-github"></i><a href='https://github.com/harshiiiz'>Github </a>
<br/><i className="fab fa-linkedin"></i><a href='https://www.linkedin.com/in/harshita-sahu-7a83a9160/'>LinkedIn</a>
</div>
<div id='image'>
    <img src={Background} alt=''  width='50%' height='50%' className='ourp' /></div></>)
}
export default Contact;