import React from "react";
import PropTypes from  "prop-types";
import joven from "./images/imagen1.png"
function LightHeroA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Transforma la forma en que aprendes, trabajas y te conectas con el mundo.<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          "En CondorVr, desarrollamos aplicaciones y contenido inmersivo que abren nuevas oportunidades para la educación, la formación empresarial y la interacción social."
          </p>
          <div className="flex justify-center">
            <button className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
              Button
            </button>
           
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={joven} />
        </div>
      </div>
    </section>
  );
}

LightHeroA.defaultProps = {
  theme: 'indigo'
};

LightHeroA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightHeroA;