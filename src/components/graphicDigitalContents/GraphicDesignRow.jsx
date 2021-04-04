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
          description="This Fashion Magazine Cover design was created as a project while I was studying Advertising and Graphic Design."
        />
        <GraphicDigitalProps
          image="../images/restaurant-menu-300x393.jpg"
          alt="Restaurant menu brochure design"
          title="Restaurant Menu Brochure"
          description="This brochure was designed for a real client. It was a tri-folded brochure to distribute to their takeout-order customers."
        />
        <GraphicDigitalProps
          image="../images/food-magazine-cover-300x393.jpg"
          alt="Food magazine cover design"
          title="Health Magazine Cover"
          description="This Health Magazine Cover design was created as a project while I was studying Advertising and Graphic Design."
        />
<h4 className="magazineInfo px-4 text-center"> <a href="../images/SANGALO-2020-for-site-WEB-VERSION.pdf"> Click here to view one of my client's latest Magazine/Book Design project in PDF version. </a> <br/> <p>Note: It is optimized for web, so quality may have been reduced.</p></h4>
<br />
      </div>
    </>
  )
}
export default GraphicDesignRow;