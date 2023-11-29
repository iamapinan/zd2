import React from 'react';

interface CustomCardProps {
  number: string;
  title: string;
  jobs: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ number, title, jobs }) => {
  return (
    <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-md">
      <p className="text-red-600 text-center font-bold text-5xl pt-4 font-urbanist">{number}</p>
      <p className="text-black-600 text-center font-bold text-l pt-2">{title}</p>
      <p className="text-black-600 text-center font-bold text-2xl pt-2 pb-4">{jobs} งาน</p>
    </div>
  );
};

export default CustomCard;
