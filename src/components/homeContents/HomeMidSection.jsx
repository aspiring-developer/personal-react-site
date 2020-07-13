import React from 'react';

const HomeMidSection = () => {
  return (
    <>
      <div className="col p-5 text-center midImage mb-4">
        <h6 className="text-white p-3" id="greetingTexts"> Welcome! And, thank you for visiting us! </h6>
        <h6 className="text-white" id="greetingTexts"> This website is to showcase some of our work. </h6>
        <p className="text-warning pb-3 py-2"> Click a button below to go to the related portfolio page. </p>
        <a href="/web-development"> <button type="button" className="btn btn-danger my-1" id="frontLgBtn"> Web Development </button> </a>
        <a href="/graphic-digital"> <button type="button" className="btn btn-success my-1" id="frontLgBtn"> Graphic Design </button> </a>
        <a href="/graphic-digital"> <button type="button" className="btn btn-primary my-1" id="frontLgBtn"> Digital Drawing </button> </a>
        <a href="/painting"> <button type="button" className="btn btn-light my-1" id="frontLgBtn"> Oil Painting </button> </a>
        <a href="/painting"> <button type="button" className="btn btn-secondary my-1" id="frontLgBtn"> Chalkboard Art </button> </a>
        <a href="/about"> <button type="button" className="btn btn-dark my-1" id="frontLgBtn"> About Our Work </button> </a>
      </div>
    </>
  )
}
export default HomeMidSection;