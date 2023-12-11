"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/th';
import InfoCard from './components/infoCard';
import HistoryCard from './components/historyCard';
import { useSearchParams } from 'next/navigation';
import ChartWork1 from '@/app/components/chartWork1';
import ChartWork2 from '@/app/components/chartWork2';
import ListComponent from '@/app/components/listComponent';
import MoneyPartyComponent from '@/app/user/components/moneyPartyComponent';
import WorkUserCardComponent from '@/app/user/components/workUserCardComponent';

interface PageProps {
  data: any;
  loadData: boolean;
  work1: number;
  work2: number;
  work3: number;
  work4: number;
  work5: number;
  work6: number;
}

async function getData(user_id: string) {
  const res = await fetch('https://memberofhouse.newdice.co/api/say/getPTUser', {
    method: 'POST',
    headers: {
      'X-SAYAPI-KEY': '69925e25035b3aa12060eb90eaf10d1f0e26210db3d29a77dd607a10ce38cb8f',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: user_id,
    })
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

const getCountFieldWorkData = async (idcard: string) => {
  const res = await fetch('https://api.theengage.co/getCountFieldWorkByUserIdCard/' + idcard, {
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
const getFieldWorkHistory = async (idcard: string) => {
  const res = await fetch('https://api.theengage.co/getFieldWorkHistoryByUserIdCard/' + idcard, {
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

const Page = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const [memberData, setMemberData] = useState<any>(null);
  const [fieldWorkData, setFieldWorkData] = useState<any>(null);
  const [fieldWorkHistory, setFieldWorkHistory] = useState<any>(null);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  moment.locale('th');

  useEffect(() => {
    const fetchData = async () => {
      if (userId == null || userId == undefined || userId == '') {
        return; // Handle this case appropriately
      }

      try {
        const userData = await getData(userId);
        const userFieldWorkData = await getCountFieldWorkData(userData?.user?.idcard);
        const userFieldWorkHistory = await getFieldWorkHistory(userData?.user?.idcard);
        setMemberData(userData);
        setFieldWorkData(userFieldWorkData);
        setFieldWorkHistory(userFieldWorkHistory);
        setIsFetch(true);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    };

    if (!isFetch) {
      fetchData();
    }
  }, [userId, isFetch]);

  if (!isFetch) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  const formattedBirthDate = (memberData?.user?.birth_date === null || memberData?.user?.birth_date === "") ? "-" : moment(memberData?.user?.birth_date).format('LL');
  const formattedJoinDate = (memberData?.user?.join_date === null || memberData?.user?.join_date === "") ? "-" : moment(memberData?.user?.join_date).format('LL');
  const userName = (memberData?.user?.name === null || memberData?.user?.name === "") ? "-" : memberData?.user?.name;
  const userAge = (memberData?.user?.birth_date === null || memberData?.user?.birth_date === "") ? "-" : moment().diff(memberData?.user?.birth_date, 'years');
  const userImage = (memberData?.user?.image === null || memberData?.user?.image === "") ? "./assets/img/mockupUser.png" : "https://memberofhouse.newdice.co/staticfiles/photo/" + memberData?.user?.image;
  const userZone = (memberData?.user?.zone === null || memberData?.user?.zone === "") ? "-" : memberData?.user?.zone?.province?.name + " เขต " + memberData?.user?.zone?.name;
  return (
    <div className="container mx-auto">
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
                <button className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded mr-4'>แดชบอร์ด</button>
              </Link>
              <Link href='./user?id=test'>
                <button className='bg-red-500 border border-red-500 text-white hover:bg-red-500 hover:text-white py-2 px-4 rounded mr-4'>ส.ส.</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row bg-white rounded-md p-4">
          <div className="w-full lg:w-6/12">
            <div className="w-full lg:w-12/12 p-4">
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-6/12 p-2">
                  <Image src={userImage} alt={userName} className="mr-3 rounded-md" width={500} height={300}></Image>
                </div>
                <div className="w-full flex flex-col lg:w-6/12 p-2">
                  <p className='text-xl text-black font-black mb-3'>{memberData?.user?.name || ''}</p>
                  <p className='text-md text-black font-black mb-3'>{(memberData?.user?.type === "CONSTITUENCYBASIS") ? 'สส.แบบแบ่งเขต' : 'สส.บัญชีรายชื่อ' || ''}</p>
                  <p className='text-md font-black mb-3'>จังหวัดที่เกิด : {memberData?.user?.birthplace || ''}</p>
                  <p className='text-md font-black mb-3'>เลขสมาชิกพรรค : {memberData?.user?.party_member_no || '-'}</p>
                  <p className='text-md font-black mb-3'>วันเดือนปีที่เป็นสมาชิกพรรค : {(memberData?.user?.join_date != null || memberData?.user?.join_date != "") ? formattedJoinDate : "-"}</p>

                </div>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'><b>ที่อยู่</b> : {(memberData?.user?.address !== null) ? memberData?.user?.address : '-'}</p>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'>
                  <b>ชื่อสถานที่ติดต่อ</b> : {memberData?.user?.contact_address || '-'}
                </p>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'>
                  <b>โทรศัพท์</b> : {memberData?.user?.phone || '-'}
                </p>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'><b>วันเกิด</b> {(memberData?.user?.birth_date != null || memberData?.user?.birth_date != "") ? formattedBirthDate : "-"} ({(userAge)} ปี )</p>
              </div>

              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                {memberData?.sns_values?.map((element: any, index: number) => (
                  <div key={index} className="w-full flex flex-wrap lg:w-6/12">
                    {element.type === 'Facebook' && (
                      <p className='text-black'><b>เฟสบุ๊ค</b> : <a href={element.link || "#"} target='_blank'>{element.link || "-"}</a></p>
                    )}
                    {element.type === 'Line' && (
                      <p className='text-black'><b>ไลน์</b> : <a href={element.link || "#"} target='_blank'>{element.link || "-"}</a></p>
                    )}
                    {element.type === 'X' && (
                      <p className='text-black'><b>X(twitter)</b> : <a href={element.link || "#"} target='_blank'>{element.link || "-"}</a></p>
                    )}
                    {element.type === 'Instagram' && (
                      <p className='text-black'><b>instagram</b> : <a href={element.link || "#"} target='_blank'>{element.link || "-"}</a></p>
                    )}
                    {element.type === 'Email' && (
                      <p className='text-black'><b>Email</b> : <a href={element.link || "#"} target='_blank'>{element.link || "-"}</a></p>
                    )}
                  </div>
                ))}
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-black font-black text-2xl'>การศึกษา</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-3/12">
                    <p className='text-black font-bold text-md'>
                      คุณวุฒิการศึกษาสูงสุด :
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-9/12 lg:text-left">
                    <p className='text-gray font-bold text-md text-base'>
                      {memberData?.user?.highest_education_type || 'ไม่ระบุ'}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-3/12">
                    <p className='text-black font-bold text-md'>&nbsp;</p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-9/12 lg:text-left">
                    <p className='text-gray font-bold text-md text-base'>
                      {memberData?.user?.study_field + " " + memberData?.user?.place_education || 'ไม่ระบุ'}
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-black font-black text-2xl'>การทำงาน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-4/12">
                    <p className='text-black font-bold text-md'>
                      ตำแหน่งสูงสุดที่ได้รับ :
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-8/12 lg:text-left">
                    <p className='text-gray font-bold text-md text-base'>
                      {
                        (memberData?.user?.highest_position || memberData?.user?.work_department)
                          ? memberData?.user?.highest_position + " (" + memberData?.user?.work_department + ")"
                          : '-'
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-3/12">
                    <p className='text-black font-bold text-md'>
                      เขตเลือกตั้ง :
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-9/12 lg:text-left">
                    <p className='text-gray font-bold text-md text-base'>
                      {userZone || 'ไม่ระบุ'}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-9/12">
                    <p className='text-gray font-black text-md'>
                      มีชื่ออยู่ในทะเบียนบ้านในจังหวัดที่สมัครรับเลือกตั้งมาแล้วเป็นเวลาติดต่อกันไม่น้อยกว่า 5 ปี นับถึงวันสมัครรับเลือกตั้ง
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-3/12 lg:text-left">
                    <p className='text-black font-bold text-md text-base'>
                      {(memberData?.user?.has_5year_house_registration) ? 'ใช่' : 'ไม่ใช่'}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-9/12">
                    <p className='text-gray font-black text-md'>
                      เกิดในจังหวัดที่สมัครรับเลือกตั้ง
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-3/12 lg:text-left">
                    <p className='text-black font-bold text-md text-base'>
                      {(memberData?.user?.born_election_province) ? 'ใช่' : 'ไม่ใช่'}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <div className="w-full flex flex-wrap lg:w-9/12">
                    <p className='text-gray font-black text-md'>
                      เคยศึกษาในสถานศึกษาในจังหวัดที่สมัครรับเลือกตั้งเป็นเวลาติดต่อกันไม่น้อยกว่า 5 ปีการศึกษา
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-3/12 lg:text-left">
                    <p className='text-black font-bold text-md text-base'>
                      {(memberData?.user?.study_election_province) ? 'ใช่' : 'ไม่ใช่'}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-1">
                  <div className="w-full flex flex-wrap lg:w-3/12">
                    <p className='text-black font-black text-md'>
                      ชื่อสถานศึกษา
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap lg:w-9/12 lg:text-left">
                    <p className='text-gray font-bold text-md text-base'>
                      {memberData?.user?.place_education || 'ไม่ระบุ'}
                    </p>
                  </div>
                </div>




                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>ประวัติการทำงาน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <ul className='text-#000 font-bold list-disc pl-8'>
                    {(memberData?.user?.experience_history === null || memberData?.user?.experience_history === undefined || memberData?.user?.experience_history === "") ? (
                      <li className='mb-2'>ไม่มีประวัติ</li>
                    ) : (
                      <li className='mb-2'>{memberData?.user?.experience_history}</li>
                    )}
                  </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>ประวัติการดำรงตำแหน่งทางการเมือง</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                  <ul className='text-#000 font-bold list-disc pl-8'>
                    <li className='mb-2'>ไม่มีประวัติ</li>
                  </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>ประวัติลูกข่ายภายใต้ ส.ส.</p>
                </div>
                {
                  (memberData?.networks === null || memberData?.networks === undefined || memberData?.networks.length == 0) ? (
                    <div className="w-full flex flex-wrap lg:w-full pt-5 pl-2">
                      <li className="text-#000 font-bold">ไม่มีประวัติ</li>
                    </div>
                  ) : (
                    memberData?.networks.map((element: any, index: number) => (
                      <div key={index} className='w-full flex flex-wrap '>
                        <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                          <div className="w-full flex lg:w-6/12">
                            <p className="text-#000 font-bold">{element.name}</p>
                          </div>
                          <div className="w-full flex lg:w-6/12">
                            <p className="text-#000 font-bold">{(element.zone == null) ? "-" : element.zone?.province?.name + " เขต " + element.zone?.name} </p>
                          </div>
                        </div>
                        <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                          <div className="w-full flex lg:w-12/12">
                            <p className="text-#000 font-bold">ที่อยู่ {(element.address == null || element.address == "") ? "-" : element.address}</p>
                          </div>
                        </div>
                        <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                          <div className="w-full flex lg:w-6/12">
                            <p className="text-#000 font-bold">เบอร์ {(element.phone == null || element.phone == "") ? "-" : element.phone}</p>
                          </div>
                        </div>
                      </div>

                    ))
                  )
                }
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>ประวัติครอบครัว</p>
                </div>
                {
                  !memberData?.family_values || memberData.family_values.length === 0 ? (
                    <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                      <p className="text-#000 font-bold">ไม่มีประวัติ</p>
                    </div>
                  ) : (
                    memberData.family_values.map((element: any, index: number) => (
                      <div key={index} className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                        <div className="w-full flex lg:w-3/12">
                          <p className="text-#000 font-bold">{element.name}</p>
                        </div>
                        <div className="w-full flex lg:w-3/12">
                          <p className="text-#000 font-bold">{element.note} </p>
                        </div>
                        <div className="w-full flex lg:w-6/12">
                          <p className="text-#000 font-bold">{element.type}</p>
                        </div>
                      </div>
                    ))
                  )
                }
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>ประวัติการร้องขอ</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                  <p className='text-green-500 font-bold'>ประวัติการเงิน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                  <ul className='text-#000 font-bold list-disc pl-8'>
                    <li className='mb-2' key='1'>ไม่มีประวัติ</li>
                  </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                  <p className='text-green-500 font-bold'>ประวัติการฝากคน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                  <ul className='text-#000 font-bold list-disc pl-8'>
                    <li className='mb-2'>ไม่มีประวัติ</li>
                  </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                  <p className='text-green-500 font-bold'>ประวัติตำแหน่งตัวเอง</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                  <ul className='text-#000 font-bold list-disc pl-8'>
                    <li className='mb-2'>ไม่มีประวัติ</li>
                  </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold'>หมายเหตุ</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                  <p className='text-#000 font-bold list-disc pl-8'>{(memberData?.user?.note == null || memberData?.user?.note == "" || memberData?.user?.note == undefined) ? "-" : memberData?.user?.note}</p>
                </div>

              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="w-full lg:w-12/12 p-4 rounded bg-white">
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold text-xl'>งานที่ถนัด</p>
                </div>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <ChartWork2
                  work1={fieldWorkData?.count2_1 || 0}
                  work2={fieldWorkData?.count2_2 || 0}
                  work3={fieldWorkData?.count2_3 || 0}
                  work4={fieldWorkData?.count2_4 || 0}
                  work5={fieldWorkData?.count2_5 || 0}
                  work6={fieldWorkData?.count2_6 || 0}
                />
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <ChartWork1
                  work1={fieldWorkData?.count1_1 || 0}
                  work2={fieldWorkData?.count1_2 || 0}
                  work3={fieldWorkData?.count1_3 || 0}
                  work4={fieldWorkData?.count1_4 || 0}
                  work5={fieldWorkData?.count1_5 || 0}
                  work6={fieldWorkData?.count1_6 || 0}
                />
              </div>
              {
                fieldWorkHistory?.length > 0 && fieldWorkHistory.map((element: any, index: number) => (
                  <WorkUserCardComponent
                    userImage={userImage}
                    key={index}  // Use the index as the key to avoid duplicates
                    subtitle={userName}
                    title="TEST"
                  />
                ))
              }
              {
                fieldWorkHistory?.length === 0 && (
                  <WorkUserCardComponent
                    userImage={userImage}
                    key={1}  // Use the index as the key to avoid duplicates
                    subtitle={userName}
                    title="ไม่มีประวัติ FieldWork"
                  />
                )
              }
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                  <p className='text-red-500 font-bold text-xl'>เงินที่ได้รับจากพรรค</p>
                </div>
              </div>
              <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-6/12">
                  <p className="text-#000 font-bold">ตั้งแต่ปี</p>
                  <select className="w-full h-10 pl-3 pr-8 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-4 mr-3" name="select">
                    <option value="2565">2565</option>
                  </select>
                </div>
                <div className="w-full flex flex-wrap lg:w-6/12">
                  <p className="text-#000 font-bold">จนถึงปี</p>
                  <select className="w-full h-10 pl-3 pr-8 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-4" name="select">
                    <option value="2566">2566</option>
                  </select>
                </div>
              </div>
              {
                !memberData?.party_money_values || memberData.party_money_values.length === 0 ? (
                  <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <p className="text-#000 font-bold text-center">ไม่มีประวัติ</p>
                  </div>

                ) : (
                  memberData.party_money_values.map((element: any, index: number) => (
                    <MoneyPartyComponent key={index} date={element.date} amount={element.value} note={element.note} />
                  ))
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


export default Page;