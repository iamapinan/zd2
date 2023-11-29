"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useRouter from 'next/router';
// import '../globals.css';
import InfoCard from './components/infoCard';
import HistoryCard from './components/historyCard';
const Page = () => {
  // const router = useRouter();
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://memberofhouse.newdice.co/api/say/getPTUser', {
          "method": "POST",
          "headers": {
            "X-SAYAPI-KEY": "69925e25035b3aa12060eb90eaf10d1f0e26210db3d29a77dd607a10ce38cb8f",
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            id: "TEST",
          })
        });
        
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if(!loadData){
      setLoadData(true);
      fetchData();
    }
    
  },[loadData]);

  const defaultData = {
    user: {
      name: '-',
      birth_date: '-',
      phone: '-',
    }
  }

  const dataMember = data? data : defaultData;
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 p-4 lg:p-8">
        <div className="p-4">
          <Image src="./assets/img/pheuthaiparty2.png" width={156} height={24} alt="Logo" className="h-6" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 p-4">
            <h1 className="text-3xl font-bold mb-4 text-red-600">สส. {} </h1>
          </div>
          <div className="w-full lg:w-6/12 p-4 ">
            <div className="flex justify-end">
              <Link href='./dashboard'>
                <button className='bg-red-500 border border-red-500 text-white hover:bg-red-500 hover:text-white py-2 px-4 rounded mr-4'>ส.ส.</button>
              </Link>

              <button className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded'>คลังข้อมูล</button>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row bg-white rounded-md p-4">
          <div className="w-full lg:w-6/12">
            <InfoCard dataInfo={dataMember}/>
          </div>
          <div className="w-full lg:w-6/12">
            <HistoryCard dataInfo1={dataMember}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Page;