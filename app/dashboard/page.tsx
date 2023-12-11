"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import '../globals.css';
import CustomCard from '../components/customCard';
import ThailandCard from '../components/thailandCard';
import CustomPoint from '../components/customPoint';
import GenderCard from '../components/genderCard';
import ChartWork1 from '../components/chartWork1';
import ChartWork2 from '../components/chartWork2';
import WorkCard from '../components/workCard';
import ListComponent from '../components/listComponent';
import BlankComponent from '../components/blankComponent';
import HistoryEngageComponent from '../components/historyEngageComponent';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'

import { useRouter } from 'next/navigation';
import { fetchData } from 'next-auth/client/_utils';

async function getData() {
  const res = await fetch('https://memberofhouse.newdice.co/api/say/getPtpUsers', {
    method: 'GET',
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
async function getSubData(area: string = '') {
  if (area != '') {
    area = '?area=' + area;
  } else {
    area = '';
  }
  const res = await fetch('https://memberofhouse.newdice.co/api/say/getStatUser' + area, {
    method: 'GET',
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

const getCountFieldWorkData = async () => {
  const res = await fetch('https://api.theengage.co/fieldWorkCount1', {
    method: 'GET',
    headers: {
      'Authorization': '3f6871f77d7b4c51008232fe41ea4ebc',
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  // console.log(res);
  return res.json();
}
const getFieldWorkHistory = async () => {
  const res = await fetch('https://api.theengage.co/getFieldWorkHistory', {
    method: 'GET',
    headers: {
      'Authorization': '3f6871f77d7b4c51008232fe41ea4ebc',
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  // console.log(res);
  return res.json();
}

const Dashboard = () => {

  const [countryview, setCountryview] = React.useState('COUNTRYVIEW');
  const [areaview, setAreaview] = React.useState('');
  const [dashboardData, setDashboardData] = React.useState<any>([]);
  const [subDashboardData, setSubDashboardData] = React.useState<any>([]);
  const [fieldWorkData, setFieldWorkData] = React.useState<any>([]);
  const [fieldWorkData2, setFieldWorkData2] = React.useState<any>([]);
  const [fieldWorkHistory, setFieldWorkHistory] = React.useState<any>([]);
  const [isFetch, setIsFetch] = React.useState<boolean>(false);

  const handleCountryViewChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    setCountryview(event.target.value);
    if (event.target.value == 'COUNTRYVIEW') {
      const fetchData = async () => {
        try {
          const subData = await getSubData();
          setDashboardData(subData);
          setIsFetch(true);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }else{
      setAreaview('N');
      const fetchData = async () => {
        try {
          const subData = await getSubData('N');
          setDashboardData(subData);
          console.log(subDashboardData);
          setIsFetch(true);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }

  }
  const handleAreaViewChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAreaview(event.target.value);
    setSubDashboardData(event.target.value)
    const fetchData = async () => {
      try {
        const subData = await getSubData(event.target.value);
        setDashboardData(subData);
        setIsFetch(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // console.log(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const subData = await getSubData();
        const fieldWorkData = await getCountFieldWorkData();
        const fieldWorkHistory = await getFieldWorkHistory();
        setFieldWorkData(fieldWorkData);
        setFieldWorkHistory(fieldWorkHistory);
        // setDashboardData(data); // ตัวแปรที่เก็บข้อมูลทั้งหมด
        setDashboardData(subData); // sub ข้อมูลทั้งหมด
        setSubDashboardData(subData);
        // console.log(subDashboardData);
        setIsFetch(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (!isFetch) {
      fetchData();
    }
  }, [dashboardData, isFetch]);
  if (!isFetch) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  const dashboardFpp = (dashboardData?.Constituencybasis != null && dashboardData?.Constituencybasis != "") ? dashboardData?.Constituencybasis : 0;
  const dashboardPartyList = (dashboardData?.Party != null && dashboardData?.Party != "") ? dashboardData?.Party : 0;
  const dashboardTotal = (dashboardFpp + dashboardPartyList) ? dashboardData?.Total : 0;
  const fieldWorkFpp = "-";
  const fieldWorkPartyList = "-";
  const fieldWorkTotal = "-";
  const workCardFieldWork1 = fieldWorkData?.count2_1 || 0;
  const workCardFieldWork2 = fieldWorkData?.count2_2 || 0;
  const workCardFieldWork3 = fieldWorkData?.count2_3 || 0;
  const workCardFieldWork4 = fieldWorkData?.count2_4 || 0;
  const workCardFieldWork5 = fieldWorkData?.count2_5 || 0;
  const workCardFieldWork6 = fieldWorkData?.count2_6 || 0;
  const workCard2FieldWork1 = fieldWorkData?.count1_1 || 0;
  const workCard2FieldWork2 = fieldWorkData?.count1_2 || 0;
  const workCard2FieldWork3 = fieldWorkData?.count1_3 || 0;
  const workCard2FieldWork4 = fieldWorkData?.count1_4 || 0;
  const workCard2FieldWork5 = fieldWorkData?.count1_5 || 0;
  const workCard2FieldWork6 = fieldWorkData?.count1_6 || 0;
  const maleUser = dashboardData?.M || 0;
  const femaleUser = dashboardData?.F || 0;
  return (
    <div className="container mx-auto lg:mx-auto sm:mx-auto xs:mx-auto">
      <div className="bg-gray-100 p-4 lg:p-8">
        <div className="p-4">
          <Image src="./assets/img/pheuthaiparty2.png" width={156} height={24} alt="Logo" className="h-6" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 p-4">
            <h1 className="text-3xl font-bold mb-4 text-red-600">สมาชิกสภาผู้แทนราษฎร </h1>
          </div>
          <div className="w-full lg:w-6/12 p-4 ">
            <div className="flex justify-end">
              <Link href='./dashboard'>
                <button className='bg-red-500 border border-red-500 text-white hover:bg-red-500 hover:text-white py-2 px-4 rounded mr-4'>แดชบอร์ด</button>
              </Link>
              <Link href='./user?id=117'>
                <button className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded mr-4'>ส.ส.</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 p-4">
            <div className="flex flex-col lg:flex-row mt-4">
              <ThailandCard CountryState={countryview} AreaState={areaview} />
            </div>

            <div className="flex flex-col lg:flex-row mt-3">
              <div className="w-full lg:w-1/2 lg:pr-2">
                <GenderCard count={maleUser} gender='ชาย'></GenderCard>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-2">
                <GenderCard count={femaleUser} gender='หญิง'></GenderCard>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-6/12 p-4">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-6/12 pt-4">
                <div className="flex items-center">
                  <select
                    id="select1"
                    className="form-select px-4 py-2 border rounded-md w-full"
                    onChange={handleCountryViewChange}
                  >
                    <option value="COUNTRYVIEW">ภาพรวมทั้งประเทศ</option>
                    <option value="AREAVIEW">ภาค</option>
                  </select>
                </div>
              </div>

              {countryview === 'AREAVIEW' && (
                <div className="w-full lg:w-6/12 pt-4">
                  <div className="flex items-center">
                    <select
                      id="select2"
                      className="form-select px-4 py-2 border rounded-md w-full"
                      onChange={handleAreaViewChange}
                    >
                      <option value="N">ภาคเหนือ</option>
                      <option value="BKK">กรุงเทพมหานคร</option>
                      <option value="C">ภาคกลาง</option>
                      <option value="NE">ภาคตะวันออกเฉียงเหนือ</option>
                      <option value="S">ภาคใต้</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-6/12 lg:w-4/12 py-2 pr-2">
                <CustomCard number={dashboardTotal} title="ส.ส.ทั้งหมด" jobs={fieldWorkTotal} />
              </div>
              <div className="w-full sm:w-6/12 lg:w-4/12 py-2 pr-2">
                <CustomCard number={dashboardPartyList} title="ส.ส.บัญชีรายชื่อ" jobs={fieldWorkPartyList} />
              </div>
              <div className="w-full sm:w-6/12 lg:w-4/12 py-2 pr-2">
                <CustomCard number={dashboardFpp} title="ส.ส.เขต" jobs={fieldWorkFpp} />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 p-2">
                <ChartWork1 work1={workCardFieldWork1} work2={workCardFieldWork2} work3={workCardFieldWork3} work4={workCardFieldWork4} work5={workCardFieldWork5} work6={workCardFieldWork6} />
              </div>
              <div className="w-full lg:w-6/12 p-2">
                <ChartWork2 work1={workCard2FieldWork1} work2={workCard2FieldWork2} work3={workCard2FieldWork3} work4={workCard2FieldWork4} work5={workCard2FieldWork5} work6={workCard2FieldWork6} />
              </div>
            </div>
            <div className="flex flex-wrap py-4">
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork1} title='งานสภา' cost='-' /></div>
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork2} title='งานกฎหมาย' cost='-' /></div>
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork3} title='งานการช่วยเหลือบริการ' cost='-' /></div>
            </div>
            <div className="flex flex-wrap py-4">
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork4} title='งานการสื่อสาร' cost='-' /></div>
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork5} title='งานสาธารณะประโยชน์' cost='-' /></div>
              <div className="w-full sm:w-4/12 lg:w-4/12 px-1"><WorkCard number={workCardFieldWork6} title='งานต่างประเทศ' cost='-' /></div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-md p-4">
                <div className="flex flex-wrap pt-3">
                  <div className="w-full lg:w-6/12">
                    <p className='text-red-500 text-semibold pl-4'>กิจกรรมลงพื้นที่ ส.ส.</p>
                  </div>
                  <div className="w-full lg:w-6/12 flex justify-end">
                    <p className='text-black-500 text-semibold pl-4'>ดูทั้งหมด</p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4">
                  {/* <BlankComponent /> */}
                  {
                    fieldWorkHistory?.map((item: any) => (
                      <HistoryEngageComponent postText={item.postText} userName={item.first_name + " " + item.last_name} postId={item.post_id} key={item.post_id} />
                    ))
                  }
                  {/* <HistoryEngageComponent postText='test' userName='text' /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;