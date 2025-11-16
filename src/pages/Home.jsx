
// import Slider from '../components/Slider';
import SolutionSection from '../components/SolutionSection';
import ReviewSitesSection from '../components/ReviewSitesSection';
// import greenwheelsAdvantage from '../components/greenwheelsAdvantage';
import DemoForm from '../components/DemoForm';
import TestimonialSlider from '../components/TestimonialSlider';
import { useEffect, useRef, useState } from 'react';
import About from '../components/About';
import { useScroll } from '../context/ScrollContext';
import Homeslider from './Homeslider';
import AboutPage from './AboutPage';


export default function Home({setScrollHandler }) {
  const formRef = useRef(null);
  const { setScrollToForm } = useScroll();
  const { scrollToForm } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrollToForm(() => () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [setScrollToForm]);
  
  return (
    <>
     
    {/* section I */}
   
        <section className="backg  px-6 lg:px-15 flex flex-col lg:flex-row items-center h-100" style={{justifyContent:'center'}}>
           {/* <Homeslider/> */}

      {/* Text Content */}
      <div className="max-w-xl mb-12 lg:mb-0 text-center ">
        <h1 className="text-3xl lg:text-[42px] font-bold text-white mb-4 leading-tight">
          A single <b className='text-green-500'>platform</b> for all <br /> your restaurant’s needs
        </h1>
        <p className="text-white/90 mt-4 text-lg bg-gray-600/50 p-3 rounded" >
          Grow your online business, manage your restaurant operations & market your brand better
          with greenwheels’s restaurant software suite.
        </p>
        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow"  style={{cursor:'pointer'}} onClick={() => scrollToForm?.()}>
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
   <About/>
   {/* <AboutPage/> */}
    {/* section 2 */}
    <section className=" bg-white py-8 px-7 text-center" style={{borderBottom:'1px solid #dad1d1'}}>
      <h2 className="text-xl font-semibold text-gray-800 mb-8">
        Trusted By 200+ Restaurants
      </h2>

 <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 bg-white">
  <img src="/Menu/bakehut.jpg" alt="Bakehut" className="h-20 object-contain" />
  <img src="/Menu/Baramasi.jpg" alt="Baramasi" className="h-20 object-contain" />
  <img src="/Menu/club naila.jpg" alt="Club Naila" className="h-20 object-contain" />
  <img src="/Menu/CONSTITUTIONLOGO-png.png" alt="RajCCR" className="h-20 object-contain" />
  <img src="/Menu/Dhaba culture.jpg" alt="Dhaba Culture" className="h-20 object-contain" />
  <img src="/Menu/Kesar-Png-Logo_130x.webp" alt="Kesar" className="h-20 object-contain" />
  <img src="/Menu/sky beach.jpg" alt="Sky Beach" className="h-20 object-contain" />
  <img src="/Menu/sky fall.png" alt="Sky Fall" className="h-20 object-contain" />
</div>

    </section>
   
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
