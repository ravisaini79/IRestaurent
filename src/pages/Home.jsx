
// import Slider from '../components/Slider';
import SolutionSection from '../components/SolutionSection';
import ReviewSitesSection from '../components/ReviewSitesSection';
// import greenwheelsAdvantage from '../components/greenwheelsAdvantage';
import DemoForm from '../components/DemoForm';
import TestimonialSlider from '../components/TestimonialSlider';
import { useEffect, useRef } from 'react';
import About from '../components/About';
import { useScroll } from '../context/ScrollContext';


export default function Home({setScrollHandler }) {
  const formRef = useRef(null);
  const { setScrollToForm } = useScroll();


  useEffect(() => {
    setScrollToForm(() => () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [setScrollToForm]);
  
  return (
    <>
     
    {/* section I */}
    <section className="backg  px-6 lg:px-24 flex flex-col lg:flex-row items-center h-100" style={{justifyContent:'end'}}>
      {/* Text Content */}
      <div className="max-w-xl mb-12 lg:mb-0 text-end ">
        <h1 className="text-3xl lg:text-[42px] font-bold text-warning-100 mb-4 leading-tight">
          A single platform for all <br /> your restaurant’s needs
        </h1>
        <h4 className="text-gray-900 mb-6">
          Grow your online business, manage your restaurant operations & market your brand better
          with greenwheels’s restaurant software suite.
        </h4>
        <button className=" bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow">
          FREE DEMO
        </button>
      </div>

      {/* Image Content */}
      {/* <div className="flex justify-center items-center">
        <img
          src="public/IRImages/front.jpeg" 
          alt="greenwheels Devices"
          className=""
          style={{height:'550px'}}
        />
      </div> */}
    </section>
    {/* section 2 */}
    <section className=" bg-white py-12 px-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-8">
        Trusted By 200+ Restaurants
      </h2>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 bg-white">
        {/* Replace these src values with your actual logo image paths */}
        <img src="public/Menu/bakehut.jpg" alt="Bakehut" className="h-20 object-contain" />
        <img src="public/Menu/Baramasi.jpg" alt="Baramasi" className="h-20 object-contain" />
        <img src="public/Menu/club naila.jpg" alt="Club Naila" className="h-20 object-contain" />
        <img src="public/Menu/CONSTITUTIONLOGO-png.png" alt="RajCCR" className="h-20 object-contain" />
        <img src="public/Menu/Dhaba culture.jpg" alt="Dhaba Culture" className="h-20 object-contain" />
        <img src="public/Menu/Kesar-Png-Logo_130x.webp" alt="Kesar" className="h-20 object-contain" />
        <img src="public/Menu/sky beach.jpg" alt="Sky Beach" className="h-20 object-contain" />
        <img src="public/Menu/sky fall.png" alt="Sky Fall" className="h-20 object-contain" />
      </div>
    </section>
    <About/>
    <SolutionSection/>
    {/* <ReviewSitesSection/> */}
    {/* <TestimonialSlider/> */}
    <greenwheelsAdvantage/>
    <DemoForm ref={formRef}/>
    
    {/* slider */}
    {/* <Slider/> */}
</>

  )
}
