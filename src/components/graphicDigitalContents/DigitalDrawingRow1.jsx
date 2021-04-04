import React from 'react'
import GraphicDigitalProps from './GraphicDigitalProps';
import './GraphicDigital.css';

const DigitalDrawingRow1 = (props) => {
  return (
    <>
      <hr />
      <h3 className="text-info text-center mb-4">Digital Drawing </h3>
      <p className="text-info text-center mb-4 px-4">All digital drawings were created from scratch using Adobe Design Premium tools. Each drawing was started from a single blank layer at the beginning and ended with hundreds of layers stacking. One of the largest digital drawing project, The House and Car, contains about 1,000 layers. </p>

      <div class="row portfolioDisplayTopRow mx-auto d-flex justify-content-center align-items-center">

        <GraphicDigitalProps
          image="../images/phone-set-540x393.jpg"
          alt="Phone digital drawing"
          title="Phone Digital Drawing"
          description="Phone digital drawing was created using Adobe Illustrator's drawing tools. I started this project utilizing layers panel to build up each part separately. Some working layers are shown on the side of the drawing."
        />
        <GraphicDigitalProps
          image="../images/bathroom-digital-art-540x393.jpg"
          alt="Bathroom digital drawing"
          title="Bathroom Digital Drawing"
          description="Bathroom digital drawing was created using Adobe Photoshop tools. The reflection in the mirror and tiny details of the objects were the most enjoyable parts. See the layers view of this project."
        />
        <GraphicDigitalProps
          image="../images/bathroom-digital-extracted-540x393.jpg"
          alt="Bathroom digital drawing layers view"
          title="Layers View: Bathroom Drawing"
          description="These are some of the layer-examples of the Bathroom Digital Drawing (see the final drawing on the side). Various Adobe Photoshop tools were used to create the digital drawing."
        />

        <GraphicDigitalProps
          image="../images/house-digital-art-540x393.jpg"
          alt="House digital drawing"
          title="House Digital Drawing"
          description="This House Digital Drawing was my biggest digital drawing project. The car part was very tricky to accomplish, but finally I did it!"
        />
        <GraphicDigitalProps
          image="../images/house-digital-layers-540x393.jpg"
          alt="House digital drawing layers"
          title="Layers View: House Drawing"
          description="Shown here is the House Digital Drawing's build-up process. Each part needed to create on its own layer group and combine them with other groups."
        />
        <GraphicDigitalProps
          image="../images/house-digital-layers-view-540x393.jpg"
          alt="House digital drawing layers view"
          title="Working Layers: House Drawing"
          description="House Digital Drawing's working layers. As seen on the image, it contains many parents and their nested child-layers. It was a challenging project."
        />

      </div>
    </>
  )
}
export default DigitalDrawingRow1;