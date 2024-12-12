import React from 'react'
import heroi from "../assets/img/frui.jpg"
import heroi1 from "../assets/icon/star.png"

export default function Services() {
  return (
      <div className='Contend1'>
             <div>
                <img className='dd' src={heroi} alt="" />
             </div>
            <div className="box-itm">
               <p className="text-1">
               Greg Brimble
                <img src={heroi1} alt="" />
               </p>
               <p className="text-2">
               GregBrimble
               </p>
               <p className="text-3">
                How To WebpagesTest
               </p>
               <div className="rountin">
                 <button className='btn' type='button'>Edit</button>
                 <button className='btn-1' type='button'>Delete</button>
               </div>
            </div>
        </div>
  )
}
