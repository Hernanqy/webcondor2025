import React from "react";
import casco1 from "./images/casco.jpeg"
import imagen1 from "./images/imagen1.jpeg"
import imagen2 from "./images/imagen2.jpeg"
import imagen3 from "./images/imagen3.jpeg"
import imagen4 from "./images/imagen4.png"
function LightGalleryA() {
  return (
    <section className="text-gray-600 body-font " id="galeria1">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Aplicaciones para aprender de otra manera y divertise
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Desarrollamos aplicaciones a medida para la educacion , el entretenimiento y la simulacion industrial.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={imagen1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={casco1}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={imagen4}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={imagen2}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={imagen4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={imagen3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightGalleryA;