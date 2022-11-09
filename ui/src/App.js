import React from "react";
import "./App.css";
import { IoSearchCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import { SiMaterialdesign } from "react-icons/si";
import { BsBuilding } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="container fluid">
        <div className="row">
          <div className="col-md-6" style={{height:"500px" , width:"550px"}}>
            <img
              src="https://images01.nicepage.com/07/bd/07bdcaf28bfd9b8c0cd4bb0e998b41de.png"
            className="h-100 w-100"
            />
          </div>
          <div className="col-md-6 text-start">
            <h5>ABOUT US</h5>
       <br/>
            <h1>
              <b>Plan. Perform. <br /> Inspire.</b>
            </h1><br/><br/>
            <p>
              Our Company is a relationship-based company, meaning that we focus
              on developing and maintaining long-term relationships with all of
              our business partners.
            </p>
            <button className="yellow">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card col-md-3 bg-warning mb-6">
            <div className="card-body">
              <h1 className="card-title">
                <IoSearchCircleOutline />
              </h1>
              <br />
              <h3 className="card-title">ANALYSIS</h3>
              <br />
              <p className="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
              </p>
              <button className="dot">
                <b>MORE</b>
              </button>
            </div>
          </div>
          <div className="card col-md-3 mb-6" id="planning">
            <div className="card-body">
              <h1 className="card-title">
                <GrPlan />
              </h1>
              <br />
              <h3 className="card-title">PLANNING</h3>
              <br />
              <p className="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
              </p>
              <button className="dot">
                <b>MORE</b>
              </button>
            </div>
          </div>
          <div className="card col-md-3 mb-6" id="design">
            <div className="card-body">
              <h1 className="card-title">
                <SiMaterialdesign />
              </h1>
              <br />
              <h3 className="card-title">DESIGN</h3>
              <br />
              <p className="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
              </p>
              <button className="dot">
                <b>MORE</b>
              </button>
            </div>
          </div>
          <div className="card col-md-3 mb-6" id="building">
            <div className="card-body">
              <h1 className="card-title">
                <BsBuilding />
              </h1>
              <br />
              <h3 className="card-title">BULIDING</h3>
              <br />
              <p className="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
              </p>
              <button className="dot">
                <b>MORE</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="mt-5">
          <br />
          <br />
          <p className="end">
            Sample text. Click to select the text box. Click again or double{" "}
            <br />
            click to start editing the text.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br/>
            <a href="#">Template</a> created with <a href="#">Nicepage.</a>
          </p>
        </footer>
      </div>
    </>
  );
}
export default App;
