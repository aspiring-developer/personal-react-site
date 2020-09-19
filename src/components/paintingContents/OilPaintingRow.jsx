import React from "react";
import PaintingProps from "./PaintingProps";
import "./Painting.css";

const OilPaintingRow = (props) => {
  return (
    <>
      <hr />
      <h3 className="text-info text-center mb-4">Oil Paintings </h3>

      <div class="row portfolioDisplayTopRow mx-auto d-flex justify-content-center align-items-center">
        <PaintingProps
          image="../images/painting-abandoned-boats-300x224.jpg"
          title='Oil Painting: Title "Abandoned"'
          description='This 14"x18" oil painting was displayed in Cary Gallery of Artists, Feature Artist Show, held in February, 2020. I was participating as a guest artist. It was one of the paintings sold during the show.'
        />
        <PaintingProps
          image="../images/painting-bond-park-300x224.jpg"
          title='Oil Painting: Title "Bond Park View"'
          description='This is one of the paintings displayed in Cary Gallery of Artists, Feature Artist Show in February, 2020. It was a 12"x18" oil painting which was sold in the show.'
        />
        <PaintingProps
          image="../images/painting-cary-park-300x224.jpg"
          title='Oil Painting: Title "Cary Park"'
          description="This is Cary Downtown Park Water Fountain painting. I made several pieces of this kind of oil painting and sold them. Some pieces are still in stock. The size of the painting ranges from 12in x 18in to 30in x 40in."
        />
        <PaintingProps
          image="../images/painting-peaceful-countryside-300x224.jpg"
          title='Oil Painting: Title "Country Side Peace"'
          description="This is 18in x 24in oil painting, made with wet-on-wet and wet-on-dry techniques. This is currently in the gallery display."
        />

        <PaintingProps
          image="../images/painting-crabtree-park1-300x224.jpg"
          title='Oil Painting: Title "Crabtree Trail "'
          description="This is 14in x 18in oil painting, made with oil over acrylic technique. This painting was sold from Cary Gallery of Artists along with another Crabtree Park Trail version #2."
        />
        <PaintingProps
          image="../images/painting-fishtail-view-300x224.jpg"
          title='Oil Painting: Title "A Beauty"'
          description="This is 12in x 18in oil painting, made with oil over acrylic technique. This is one of series that customers like a lot. Several pieces have been sold from this series. "
        />
        <PaintingProps
          image="../images/painting-stony-lake-300x224.jpg"
          title='Oil Painting: Title "Stony Lake"'
          description="This is 18in x 24in oil painting, made with wet-on-wet and wet-on-dry techniques."
        />

        <PaintingProps
          image="../images/painting-sunset-lake-300x224.jpg"
          title='Oil Painting: Title "Sunset Lake"'
          description="This is 18in x 24in oil painting, made with wet-on-wet and wet-on-dry techniques. This is currently in the gallery display."
        />
        <PaintingProps
          image="../images/painting-rupse-300x224.jpg"
          title='Oil Painting: Title "Just Flowing"'
          description="This is 12in x 18in oil painting, made with oil over acrylic technique."
        />
      </div>
    </>
  );
};
export default OilPaintingRow;
