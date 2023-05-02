import React from 'react'
import './card.css'
import pic from '../../images2/kids resize.png'

function card2(){
  return (
    <>
     <div className='cardlayout'>
                <div className='cardphoto'>
                    <img src={pic}></img>
                </div>
                <div className='text'>
                Donating to orphan kids can help provide them with basic necessities such as food, shelter, and clothing. It can also help provide them with education and medical care1. When children are connected to their families, extended families, and loving foster families, they can enjoy healthy and productive lives. Not only does your gift help reunite children with families—it helps prevent children from entering orphanages in the first place2.
                </div>
            </div>

    </>
  )
}

export default card2