
// import Slider from '../components/Slider';
import SolutionSection from '../components/SolutionSection';
import ReviewSitesSection from '../components/ReviewSitesSection';
// import greenwheelsAdvantage from '../components/greenwheelsAdvantage';
import DemoForm from '../components/DemoForm';
import TestimonialSlider from '../components/TestimonialSlider';
import { useEffect, useRef } from 'react';
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
    <section className="bg-white  px-6 lg:px-24 flex flex-col lg:flex-row items-center " style={{justifyContent:'space-around'}}>
      {/* Text Content */}
      <div className="max-w-xl mb-12 lg:mb-0 text-center">
        <h1 className="text-3xl lg:text-[32px] font-bold text-gray-900 mb-4 leading-tight">
          A single platform for all <br /> your restaurant’s needs
        </h1>
        <p className="text-gray-700 mb-6">
          Grow your online business, manage your restaurant operations & market your brand better
          with greenwheels’s restaurant software suite.
        </p>
        <button className=" bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow">
          FREE DEMO
        </button>
      </div>

      {/* Image Content */}
      <div className="flex justify-center items-center">
        <img
          src="public/IRImages/front.jpeg" // <-- update this to your actual image path
          alt="greenwheels Devices"
          className=""
          style={{height:'550px'}}
        />
      </div>
    </section>
    {/* section 2 */}
    <section className=" bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-8">
        Trusted By 200+ Restaurants
      </h2>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
        {/* Replace these src values with your actual logo image paths */}
        <img src="/img/burger-king-greenwheels.png" alt="Burger King" className="h-20 object-contain" />
        <img src="/img/jollibee.png" alt="Jollibee" className="h-20 object-contain" />
        <img src="/img/cake-shop.png" alt="The Cake Shop" className="h-20 object-contain" />
        <img src="/img/dominos.jpg" alt="Domino's" className="h-20 object-contain" />
        <img src="/img/rolls-mania.png" alt="Rolls Mania" className="h-20 object-contain" />
        <img src="/img/sr-foods.jpg" alt="SR Foods" className="h-20 object-contain" />
        <img src="/img/mod.png" alt="MOD" className="h-20 object-contain" />
        <img src="/img/dana-choga.png" alt="Dana Choga" className="h-20 object-contain" />
      </div>
    </section>
    <SolutionSection/>
    <ReviewSitesSection/>
    <TestimonialSlider/>
    <greenwheelsAdvantage/>
    <DemoForm ref={formRef}/>
    
    {/* slider */}
    {/* <Slider/> */}
</>

  )
}
