import React from "react";

const ReviewSitesSection = () => {
  const reviews = [
    {
      name: "Software Suggest",
      logo: "/img/s-suggest-blue-logo.png", 
      stars: 4.5,
    },
    {
      name: "Capterra",
      logo: "/img/capterra-software-logo.png", 
      stars: 4.5,
    },
    {
      name: "Software Advice",
      logo: "/img/software-advice-logo.svg", 
      stars: 4.5,
    },
  ];

  const StarRating = ({ stars }) => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    return (
      <div className="flex justify-center mt-2 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {hasHalfStar && <span>☆</span>}
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-12">
        Favourably Rated On Software Review Sites
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-30">
        {reviews.map((site, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={site.logo}
              alt={site.name}
              className="h-12 mb-2 object-contain"
            />
            <StarRating stars={site.stars} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSitesSection;
