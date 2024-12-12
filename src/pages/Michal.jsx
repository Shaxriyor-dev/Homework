import React from 'react'
import heroi from "../assets/img/mik.jpg"
import heroi1 from "../assets/icon/star.png"

function Michal() {
  return (
     <div className='Contend1'>
             <div>
                <img className='dd' src={heroi} alt="" />
             </div>
            <div className="box-itm">
               <p className="text-1">
               Michel Jackson
                <img src={heroi1} alt="" />
               </p>
               <p className="text-2">
               MichelJackson
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

export default Michal