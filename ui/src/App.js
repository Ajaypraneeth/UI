import React from 'react'
import "./App.css"
import { IoSearchCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import { SiMaterialdesign } from "react-icons/si";
import { BsBuilding } from "react-icons/bs";

function App() {
  return (
  <>
  
  <div className="body">
    <div><img src="https://images01.nicepage.com/07/bd/07bdcaf28bfd9b8c0cd4bb0e998b41de.png" class="mx-100 d-block" width={550} height={500} /></div>
    <div className="font"><h4>ABOUT US</h4>
    <div className="middle"><p1><b>Plan. Perform.<br/> Inspire.</b></p1> <br/> 

    <p>Our Company is a relationship-based company, meaning that we focus<br/> on developing and maintaining long-term relationships with all of our <br/> business partners. </p>
    <button type="button">READ MORE</button>
  
    </div>
        </div>
        
  </div>
  <div className="container">
    <div className="row">
    
    <div className="card col-3 bg-warning mb-6" >
  <div className="card-body">
  <h1 className="card-title"><IoSearchCircleOutline/></h1><br/>
    <h3 className="card-title">ANALYSIS</h3><br/>
    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    <button className="dot"><b>MORE</b></button>
    
  </div>
  
</div>
<div className="card col-3 bg-warning mb-6" >
  <div className="card-body">
  <h1 className="card-title"><GrPlan/></h1><br/>
    <h3 className="card-title">PLANNING</h3><br/>
    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    <button className="dot"><b>MORE</b></button>
    
  </div>
  
</div>
<div className="card col-3 bg-warning mb-6" >
  <div className="card-body">
  <h1 className="card-title"><SiMaterialdesign/></h1><br/>
    <h3 className="card-title">DESIGN</h3><br/>
    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    <button className="dot"><b>MORE</b></button>
    
  </div>
  
</div>
<div className="card col-3 bg-warning mb-6" >
  <div className="card-body">
  <h1 className="card-title"><BsBuilding/></h1><br/>
    <h3 className="card-title">BULIDING</h3><br/>
    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    <button className="dot"><b>MORE</b></button>
    
  </div>
</div>

    </div>
    
  </div> 
  <div>
  <footer className='mt-5'>
    <br/><br/>
  <p className="end">Sample text. Click to select the text box. Click again or double <br/>click to start editing the text.<br/><br/><br/><br/><br/><a href='#'>Template</a> created with <a href='#'>Nicepage.</a></p>
</footer>
  </div>
  
    </>
    )
}
export default App