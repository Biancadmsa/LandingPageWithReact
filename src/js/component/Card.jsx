import React from "react";

export default function Card(){
return(
<div className="row row-cols-1 row-cols-md-4 g-4 mx-5 pt-5 pb-5 pe-3 ps-3">
  <div className="col">
    <div className="card h-100">
    <img src="..." className="card-img-top" alt="Img 1" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="..." className="card-img-top" alt="Img 1" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="Img 1" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="..." className="card-img-top" alt="Img 1" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
)
}
