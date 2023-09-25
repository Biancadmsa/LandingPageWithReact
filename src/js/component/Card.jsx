import React from "react";



export default function Card(){
return(
<div className="row row-cols-1 row-cols-md-4 g-4 mx-3 pt-5 pb-5 pe-3 ps-3">
  <div className="col">
    <div className="card h-100">
    <img src="https://via.placeholder.com/500x350.png?text=500x325" className="card-img-top" alt="Img 1" />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Card title</strong></h5>
        <p className="card-text ">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <hr /> {/* Línea divisoria */}
        <div className="button">
        <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="https://via.placeholder.com/500x350.png?text=500x325" className="card-img-top" alt="Img 1" />
      <div className="card-body text-center">
        <h5 className="card-title "><strong>Card title</strong></h5>
        <p className="card-text">This is a short card lorem ipsu card the soup three four six.This is a short card lorem ipsu card the soup three four six </p>
        <hr /> {/* Línea divisoria */}
        <div className="button">
        <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://via.placeholder.com/500x350.png?text=500x325" className="card-img-top" alt="Img 1" />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Card title</strong></h5>
        <p className="card-text">This is a short card lorem ipsu card the soup three four six.This is a short card lorem ipsu card the soup three four six</p>
        <hr /> {/* Línea divisoria */}
        <div className="button">
        <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="https://via.placeholder.com/500x350.png?text=500x325" className="card-img-top" alt="Img 1" />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Card title</strong></h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <hr /> {/* Línea divisoria */}
        <div className="button">
        <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
