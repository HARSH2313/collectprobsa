// components/ui/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, image, href, children }) => {
  return (
    <div className="bg-white shadow-custom-light rounded-lg overflow-hidden hover:shadow-custom-dark transition duration-300">
      {image && (
        <div className="relative w-full h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {href && (
          <a href={href} className="text-primary font-semibold hover:underline">
            Learn More
          </a>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
