import React, { useEffect } from 'react';
import CustomPoint from './customPoint';
import Image from 'next/image';
import CircleMember from './CircleMember';
import fs from 'fs';
import path from 'path';
interface ThailandCardProps {
  CountryState: string;
  AreaState: string;
}

async function getZoneData() {
  const res = await fetch('https://memberofhouse.newdice.co/api/say/getZones', {
    method: 'POST',
    headers: {
      'X-SAYAPI-KEY': '69925e25035b3aa12060eb90eaf10d1f0e26210db3d29a77dd607a10ce38cb8f',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

const ThailandCard: React.FC<ThailandCardProps> = ({ CountryState, AreaState = "N",}) => {
  const [zoneData, setZoneData] = React.useState<any>([]);
  const [isFetch, setIsFetch] = React.useState<boolean>(false);
  let widthResponsive = 42.125;
  let heightResponsive = 68.125;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getZoneData();
        setZoneData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if(CountryState == "AREAVIEW"){
      widthResponsive = 42.125;
      heightResponsive = 68.125;
    }
    else{
      widthResponsive = 42.125;
      heightResponsive = 68.125;
    }

    if (!isFetch) {
      fetchData();
      setIsFetch(true);
    }
    console.log(document.getElementById('thailand'));
  }, [isFetch , CountryState, AreaState , zoneData, widthResponsive, heightResponsive]);


  if (!isFetch) {
    return (
      <div className="w-full h-full flex-shrink-0 rounded-lg bg-white shadow-md pb-4">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    )
  }
  if (CountryState == "AREAVIEW") {
    return (
      <div className="w-full h-full flex-shrink-0 rounded-lg bg-white shadow-md pb-4" id='thailand'>
        <div className={`px-4 py-8 relative w-[42.125rem] h-[68.125rem]`}>
          {zoneData?.zones?.filter((zone: any) => zone.province?.area === AreaState).map((zone: any, index: number) => (
            <CircleMember
              key={index}
              zone_id={zone?.id}
              zone_area={zone?.province?.area}
              zone_province={zone?.province?.name}
              comment={zone?.province?.name}
              diameter={4}
              isPtMember={zone?.user !== null}
              zone_name={zone?.name}
              user={zone?.user}
              position_x={zone?.map_x}
              position_y={zone?.map_y}
            />
          ))}
        </div>

        {/* <Image src={imageSrc} width={500} height={500} alt='thailandMap' priority={true} className='opacity-30 z-0'></Image> */}

      </div>
    );
  }
  return (
    <div className="w-full h-full flex-shrink-0 rounded-lg bg-white shadow-md pb-4">
      <div className={`px-4 py-8 relative w-[${widthResponsive}rem] h-[${heightResponsive}rem]`}>
        {zoneData?.zones?.map((zone: any, index: number) => (
          <CircleMember
            key={index}
            zone_id={zone?.id}
            zone_area={zone?.province?.area}
            zone_province={zone?.province?.name}
            comment={zone?.province?.name}
            diameter={2.5}
            isPtMember={zone?.user !== null}
            zone_name={zone?.name}
            user={zone?.user}
            position_x={zone?.map_x}
            position_y={zone?.map_y}
          />
        ))}
      </div>

      {/* <Image src={imageSrc} width={500} height={500} alt='thailandMap' priority={true} className='opacity-30 z-0'></Image> */}

    </div>
  );
};

export default ThailandCard;