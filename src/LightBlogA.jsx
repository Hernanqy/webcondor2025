import React from 'react';
import PropTypes from  "prop-types";
import ReactPlayer from 'react-player';




function LightGalleryB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
           <ReactPlayer url="https://www.youtube.com/watch?v=cLWF1j_BTeM" controls loop width="100%" height="100%"/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Viaje en el tiempo 
              </h2>
              <p className="leading-relaxed">
                Gracias a la realidad virtual no sumergimos en una antigua foto para recorrer aquel sitio que dio lugar a una ciudad.
              </p>
              <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <ReactPlayer url="https://www.youtube.com/watch?v=cLWF1j_BTeM" controls loop width="100%" height="100%"/>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <ReactPlayer url="https://www.youtube.com/watch?v=cLWF1j_BTeM" controls loop width="100%" height="100%"/>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightGalleryB.defaultProps = {
  theme: 'indigo'
};

LightGalleryB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightGalleryB;