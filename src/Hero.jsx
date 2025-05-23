import React from 'react'
import SimpleParallax from "simple-parallax-js";
import "./Hero.css"
function Hero() {
  return (
    <div>
   <SimpleParallax>   
<section className="dark:bg-gray-100 dark:text-gray-800 hero">

   
 
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl"><span className='dark:text-cyan-400 md:animate-pulse sm:animate-pulse animate-[wiggle_10s_ease-in-out_infinite]-pulse'>CONDORVR </span> Construyendo 
			<span className="dark:text-black-100"> puentes entre tus sueños</span> y la realidad
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Realizamos aplicaciones en realidad virtual , realidad mixta y realidad aumentada utilizando el motor grafico Unity 6.0</p>
		<div className="flex flex-wrap justify-center">
		<a href="#galeria1"><button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-cyan-600 dark:text-gray-50">Galeria</button></a>	
		
		</div>
	</div> 
	
</section>
</SimpleParallax>
    </div>
  )
}

export default Hero




