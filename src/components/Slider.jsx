// import React, { useState } from 'react';

// const slides = [
//   {
//     title: 'Bar POS',
//     image: 'https://media.istockphoto.com/id/1430548729/photo/waiter-placing-an-order-in-the-system-using-a-computer.jpg?s=612x612&w=0&k=20&c=wpkJpassAkvls_Qq62dNpVlvTy05d3Dw9ql4NxIFpXM=', // Replace with actual image paths
//   },
//   {
//     title: 'Cafe POS',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDilUm4Wld5gbjKGpqBtVmVK718Tm_q-Lcf1P1GJDHKPGgLNrxBpHPHmdh7Ymnz3UHVzo1Tw&s',
//   },
//   {
//     title: 'Enterprise POS',
//     image: 'https://greenwheels.com/images/enterprise-pos.png',
//   },
// //   {
// //     title: 'Fine Dining POS',
// //     image: 'https://greenwheels.com/images/fine-dining-pos.png',
// //   },
// //   {
// //     title: 'QSR POS',
// //     image: 'https://greenwheels.com/images/qsr-pos.png',
// //   },
// //   {
// //     title: 'Small restaurant POS',
// //     image: 'https://greenwheels.com/images/small-restaurant-pos.png',
// //   },
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);

//   const handleDotClick = (index) => {
//     setCurrent(index);
//   };

//   return (
//     <div className="py-12 text-center bg-white">
//       <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
//         A POS Built For Your Restaurant Type
//       </h2>

//       <div className="flex justify-center gap-6 flex-wrap px-4">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`relative w-full max-w-sm h-72 rounded-md overflow-hidden shadow-md transition-all duration-500 ${
//               index === current ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//               <h3 className="text-white text-lg font-bold">{slide.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-8 space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             className={`w-4 h-4 rounded-full transition ${
//               index === current ? 'bg-gray-600' : 'bg-gray-300'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
