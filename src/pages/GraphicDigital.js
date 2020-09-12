import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GraphicDesignRow from "../components/graphicDigitalContents/GraphicDesignRow";
import DigitalDrawingRow1 from "../components/graphicDigitalContents/DigitalDrawingRow1";

const GraphicDigital = () => {
  return (
    <>
      <Header />
      <h3 className="text-danger text-center my-5">
        Graphic Design and Digital Drawing{" "}
      </h3>
      <GraphicDesignRow />

      <DigitalDrawingRow1 />
      <Footer />
    </>
  );
};
export default GraphicDigital;
