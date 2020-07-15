import React from 'react'
import PaintingProps from './PaintingProps';
import './Painting.css';

const ChalkboardArtRow = (props) => {
  return (
    <>
      <hr />
      <h3 className="text-info text-center mb-4">Chalkboard Arts </h3>
      <p className="text-center mb-5">Some of the chalkboard arts I did during my work in the marketing department at Whole Foods Market.</p>

      <div className="row portfolioDisplayTopRow mx-auto d-flex justify-content-center align-items-center">

        <PaintingProps
          image="../images/meat-chalkboard-300x224.jpg"
        />
        <PaintingProps
          image="../images/more-chalkboard-300x224.jpg"
        />
        <PaintingProps
          image="../images/other-chalkboard-300x224.jpg"
        />

      </div>
    </>
  )
}
export default ChalkboardArtRow;