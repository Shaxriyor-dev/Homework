import heroi from "../assets/img/kol.jpg"
import heroi1 from "../assets/icon/star.png"
import { useState } from "react"
export default function About() {
 const [ dalete , name ] = useState(true);
 
 const dalets1 = () => {
   name(true)
};
 const daletse = () => {
   name(false)
};
  return (
    <div>
         <div className='Contend1'>
                 <div>
                    <img className='dd' src={heroi} alt="" />
                 </div>
                <div className="box-itm">
                   <p className="text-1">
                    Henri Helvetica
                    <img src={heroi1} alt="" />
                   </p>
                   <p className="text-2">
                      HenriHelvetica
                   </p>
                   <p className="text-3">
                    How To WebpagesTest
                   </p>
                   <div className="rountin">
                     <button onClick={daletse}  className='btn' type='button'>Edit</button>
                     <button onClick={dalets1} className='btn-1' type='button'>Delete</button>
                   </div>
                </div>
            </div>
    </div>
  )
}
