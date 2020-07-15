import React from 'react'
import GraphicDigitalProps from './GraphicDigitalProps';
import './GraphicDigital.css';

const GraphicDesignRow = (props) => {
  return (
    <>
      <hr />
      <h3 className="text-info text-center mb-4">Graphic Design </h3>

      <div class="row portfolioDisplayTopRow mx-auto d-flex justify-content-center align-items-center">

        <GraphicDigitalProps
          image="../images/magazine-cover-300x393.jpg"
          alt="Fashion magazine cover design"
          title="Fashion Magazine Cover"
          description="Fashion magazine cover design Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo?"
        />
        <GraphicDigitalProps
          image="../images/restaurant-menu-300x393.jpg"
          alt="Restaurant menu brochure design"
          title="Restaurant Menu Brochure"
          description="Brochure design Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo? Quasi, nemo?"
        />
        <GraphicDigitalProps
          image="../images/food-magazine-cover-300x393.jpg"
          alt="Food magazine cover design"
          title="Health Magazine Cover"
          description="Health magazine cover design Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo?"
        />

      </div>
    </>
  )
}
export default GraphicDesignRow;