import React from "react";
import PropTypes from  "prop-types";
import ReactPlayer from 'react-player';

function LightContentG(props) {
  return (
    
    <section className="text-gray-600 body-font" >
      <div id="videos"></div>
        <div className="flex flex-col text-center w-full mb-12"id="videos">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          "Principales Usos de la Tecnología Inmersiva"
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          "Las aplicaciones de AR, VR y MR no solo son para juegos o entretenimiento. Pueden cambiar la manera en que trabajas, aprendes, o desarrollas tu negocio. Aquí te mostramos algunas de nuestras áreas de enfoque:"
          </p>
        </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <ReactPlayer url="https://www.youtube.com/watch?v=cLWF1j_BTeM" controls loop width="100%" height="100%"/>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Educacion : Viaje en el tiempo ,aprendiendo sobre tu historia de manera innovadora
            </h2>
            <p className="leading-relaxed text-base">
            Gracias a la realidad virtual no sumergimos en una antigua foto para recorrer aquel sitio que dio lugar a una ciudad.
            </p>
            <button className={`flex mx-auto mt-6 text-white bg-${props.theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${props.theme}-600 rounded`}>
              Button
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
            <ReactPlayer url="https://www.youtube.com/watch?v=cLWF1j_BTeM" controls loop width="100%" height="100%"/>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Recorrido inmersivo por un museo virtual.
            </h2>
            <p className="leading-relaxed text-base">
              Turismo y cultura : Esta aplicacion nos permite recorrer de manera inmersiva un museo sobre el antiguo Egipto.
            </p>
            <button className={`flex mx-auto mt-6 text-white bg-${props.theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${props.theme}-600 rounded`}>
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

LightContentG.defaultProps = {
  theme: 'indigo'
};

LightContentG.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightContentG;