// workUserCardComponent.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

interface WorkUserCardComponentProps {
  userImage: string;
  title: string;
  subtitle: string;
}

const WorkUserCardComponent: React.FC<WorkUserCardComponentProps> = ({ userImage, title, subtitle }) => {
  return (
    <div className="w-full flex flex-wrap lg:w-12/12 p-2">
      <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center pl-4 mt-2">
        <Image src={userImage} alt='workUserCard' width={50} height={50} className="mr-3 rounded-md" priority/>
        <div>
          <p className='text-black pt-5'>{title}</p>
          <p className='text-gray pt-2 pb-5'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkUserCardComponent;
