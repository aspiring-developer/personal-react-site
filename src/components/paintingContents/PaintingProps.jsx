import React from 'react';
import './Painting.css';

const PaintingProps = (props) => {
  return (
    <>
      <div class="col-sm-12 col-md-6 col-lg-4 mx-auto px-2 pb-2 text-center justify-content-center align-items-center paintingImageColumn">
        <img src={props.image} alt={props.alt} className="img-fluid paintingImage" />
        <h5 className="py-2 text-center descriptionTitle"> {props.title} </h5>
        <p className="text-center px-5 pb-5"> {props.description}  </p>

      </div>
    </>
  )
}
export default PaintingProps;