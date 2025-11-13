import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Kabir Jeet Singh',
    title: 'Founder, Burger Singh',
    quote:
      "I have tried 46 POS systems before settling down with greenwheels’s POS. They solve massive problems for the restaurant industry and are the best technology partner you can get.",
    image: '/images/1-09.png',
  },
  {
    name: 'Harsh Gupta',
    title: 'Manager (Strategy & Alliance), Mad Over Donuts',
    quote:
      "greenwheels helped us bridge the demand for our products with the online ordering platform. We've been with greenwheels for almost 2 years, and they've met all our expectations",
    image: '/images/3-09.png',
  },
  {
    name: 'Nikhil Hedge',
    title: 'Founder & Owner , Smally',
    quote:
      "In terms of retaining some of our delivery orders we depend on greenwheels for Online Ordering and delivery. Just to maximize our profitability, because of the high commission rates of these other delivery platforms.",
    image: '/images/11-16.png',
  },
  {
    name: 'Ankush Dadu',
    title: 'Owner, Anand Sweets',
    quote:
      "It was very important for us to integrate the website, which is the centerpiece of our activity to all the other marketing activities that we are doing. That helps us understand how to acquire better.",
    image: '/images/4-09.png',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const { name, title, quote, image } = testimonials[current];

  return (
    <section className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="rounded-md w-72 h-72 object-cover" />
        </div>
        <div className="text-center md:text-left max-w-xl">
          <p className="italic text-lg mb-6">"{quote}"</p>
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-gray-400">{title}</p>
          <button className="mt-4 border border-white rounded-full px-4 py-2 hover:bg-white hover:text-gray-900 transition">
            ▶
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-400 hover:text-green-600"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-400 hover:text-green-600"
      >
        ▶
      </button>
    </section>
  );
};

export default TestimonialSlider;
