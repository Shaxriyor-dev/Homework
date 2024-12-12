import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Reyan from"./pages/Reyan"
import Sarah from "./pages/Sarah";
import Ceora from "./pages/Ceora";
import Anthony from "./pages/Anthony";
import Arisa from "./pages/Arisa";
import Henri from "./pages/Henri";
import Michal from "./pages/Michal";

export default function app() {
  return (
    <div className="Apps">
      <div className="Contacs">
        <div className="input-label">
          <input className="input-hero" type="text" placeholder="Search :" />
          <button className="Button" type="button">
            New
          </button>
          <div className="chiziq"></div>
        </div>
        <div className="nav-bar">
          <NavLink className='hero' to={"/dennis"}>
            Dennis Beatty
          </NavLink>
          <br />
          <NavLink className='hero' to={"/services"}>Greg Brimble</NavLink>
          <br />
          <NavLink className='hero' to={"/Reyan"}>Ryan Dahl</NavLink>
          <br />
           <NavLink className='hero' to={"/Sarah"} >Sarah Dayan</NavLink>
           <br/>
            <NavLink className="hero" to={"/Ceora"} >Ceora Ford</NavLink>
           <br/>
            <NavLink className="hero" to={"/Anthony"} >Anthony Frehner</NavLink>
           <br/>
            <NavLink className="hero" to={"/Arisa"} >Arisa Fukuzaki</NavLink>
           <br/>
            <NavLink className="hero" to={"/Henri"} >Henri Helvetica</NavLink>
           <br/>
            <NavLink className="hero" to={"/Michel"} >Michel Jackson</NavLink>
        </div>
      </div>
      <div className="Roots">
        <Routes>
          <Route path="/dennis" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/Reyan" element={<Reyan/>}>Reayn</Route>
          <Route path="/Sarah" element={<Sarah/>} ></Route>
          <Route path="/Ceora" element={<Ceora/>}></Route>
          <Route path="/Anthony" element={<Anthony/>}></Route>
          <Route path="/Arisa" element={<Arisa/>}></Route>
          <Route path="/Henri" element={<Henri/>}></Route>
          <Route path="/Michel" element={<Michal/>}></Route>
        </Routes>
      </div>
    </div>
  );
}
