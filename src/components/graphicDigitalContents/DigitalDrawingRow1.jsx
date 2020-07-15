import React from 'react'
import GraphicDigitalProps from './GraphicDigitalProps';
import './GraphicDigital.css';

const DigitalDrawingRow1 = (props) => {
  return (
    <>
      <hr />
      <h3 className="text-info text-center mb-4">Digital Drawing </h3>

      <div class="row portfolioDisplayTopRow mx-auto d-flex justify-content-center align-items-center">

        <GraphicDigitalProps
          image="../images/phone-set-540x393.jpg"
          alt="Phone digital drawing"
          title="Phone Digital Drawing"
          description="Phone digital drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat."
        />
        <GraphicDigitalProps
          image="../images/bathroom-digital-art-540x393.jpg"
          alt="Bathroom digital drawing"
          title="Bathroom Digital Drawing"
          description="Bathroom digital drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat."
        />
        <GraphicDigitalProps
          image="../images/bathroom-digital-extracted-540x393.jpg"
          alt="Bathroom digital drawing layers view"
          title="Layers View: Bathroom Drawing"
          description="The Working Layers View of the Bathroom Digital Drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae."
        />

        <GraphicDigitalProps
          image="../images/house-digital-art-540x393.jpg"
          alt="House digital drawing"
          title="House Digital Drawing"
          description="House digital drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo?"
        />
        <GraphicDigitalProps
          image="../images/house-digital-layers-540x393.jpg"
          alt="House digital drawing layers"
          title="Layers View: House Drawing"
          description="House digital drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo?"
        />
        <GraphicDigitalProps
          image="../images/house-digital-layers-view-540x393.jpg"
          alt="House digital drawing layers view"
          title="Working Layers: House Drawing"
          description="House digital drawing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquam eligendi repudiandae dolorem sed illum repellat. Quasi, nemo?"
        />

      </div>
    </>
  )
}
export default DigitalDrawingRow1;