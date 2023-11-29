import React from 'react';

interface GenderCardProps {
  gender: string;
  count: number;
}

const GenderCard: React.FC<GenderCardProps> = ({ gender,count }) => {
  return (
    <div className="w-full h-full flex-shrink-0 rounded-xl bg-nd-gray shadow-md">
      <p className="text-white text-left font-bold text-5xl pt-4 pl-12 font-urbanist">{count} <span className='text-white-300 text-3xl font-sarabun'>คน</span></p>
      <p className="text-white text-left text-2xl pt-2 pb-4 pl-12">{gender}</p>
    </div>
  );
};

export default GenderCard;