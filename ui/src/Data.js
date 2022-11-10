import React from "react";

function Data({ set }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {set.map((back) => {
            const { Image,cardtitle,cardtext } = back;
            return (
              <>
                <div className="card col-md-3 mb-6 bg-warning">
                  <div className="card-body">
                    <h1 className="card-title">{Image}</h1>
                    <br/>
                      <h4 className="card-title my-15">{cardtitle}</h4><br/>
                        <p className="card-text my-4 mb-5 p-3">{cardtext}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Data;