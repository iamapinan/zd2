import React from 'react';

interface workCardProps {
  number: number;
  title: string;
  cost: string;
}

const WorkCard: React.FC<workCardProps> = ({ number, title, cost}) => {
  return (
    <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-md">
      <p className="text-red-600 text-center font-bold text-5xl pt-4 font-urbanist">{number} <span className='text-black text-center font-bold text-sm pt-4 font-sarabun font-xs font-gray'>งาน</span></p>
      <p className="text-#000 text-center text-l pt-2">{title}</p>
      <p className="text-#707070 text-center text-sm pt-2 pb-4">งบประมาณ : <span className='text-right'>{cost} ลบ.</span></p>
    </div>
  );
};

export default WorkCard;
