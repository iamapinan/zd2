import React,{ useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
interface infoCardProps {
    dataInfo: any;
}

const InfoCard: React.FC<infoCardProps> = ({ dataInfo }) => {
    const searchParams = useSearchParams();
    console.log(searchParams);
    const [data, setData] = React.useState<any>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    useEffect(() => {
        console.log("infocard :", dataInfo);
        if (dataInfo.length > 0) {
            setData(dataInfo)
            setIsLoading(false);
        }


    }, [data, dataInfo]);



    if (!isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className="w-full lg:w-12/12 p-4">
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-6/12 p-2">
                    <div className="w-full h-full flex-shrink-0 rounded-xl bg-gray-400 shadow-md flex items-center justify-center">
                        <p className="text-center text-white text-xl">Photo</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:w-6/12 p-2">
                    <p className='text-gray-400 mb-3'>เขต 2 กรุงเทพมหานคร</p>
                    <p className='text-black mb-3'>ชื่อ {data.user.name}</p>
                    <p className='text-black mb-3'>วันเกิด {data.user.birth_date} (20 ปี )</p>
                    <p className='text-black mb-3'>เบอร์โทร: {(data.user.phone == null) ? '-' : data.user.phone}</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'>ที่อยู่ 00 หมู่ 0 ถนนลาดพร้าว เเขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310</p>
                <div className="w-full flex flex-wrap lg:w-6/12 pt-4">
                    <p className='text-black'>ไลน์ - </p>
                </div>
                <div className="w-full flex flex-wrap lg:w-6/12 pt-4">
                    <p className='text-black'>เฟสบุ๊ค -</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-4">
                    <p className='text-black'>ติ๊กต๊อก -</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการศึกษา</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        {(data.user.experience_history === null || data.user.experience_history === undefined) ? (
                            <li className='mb-2'>ไม่มีประวัติ</li>
                        ) : (
                            data.user.experience_history.map((item: any, index: number) => (
                                <li key={index} className='mb-2'>
                                    {item}
                                </li>
                            ))
                        )}
                    </ul>

                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการทำงาน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        {(data.user.education_history === null || data.user.education_history === undefined) ? (
                            <li className='mb-2'>ไม่มีประวัติ</li>
                        ) : (
                            data.user.education_history.map((item: any, index: number) => (
                                <li key={index} className='mb-2'>
                                    {item}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการดำรงตำแหน่งทางการเมือง</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2'>เคยดำรงตำแหน่ง ส.ส. 2565</li>
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติลูกข่ายภายใต้ ส.ส.</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">นางสาว***********</p>
                    </div>
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">ตำแหน่งเลขา สส.</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <p className='text-#000 font-bold'>ที่อยู่ 00 หมู่ 0 ถนนลาดพร้าว เเขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">เบอร์ 000 000 0000</p>
                    </div>
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">ไลน์ auoooo.e</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">เฟสบุ๊ค auoooo.e</p>
                    </div>
                    <div className="w-full flex lg:w-6/12">
                        <p className="text-#000 font-bold">ติ๊กต๊อก auoooo.e</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติครอบครัว</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">นางสาว**** *****</p>
                    </div>
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">ส.ส. พรรคเศรษฐกิจ </p>
                    </div>
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">พี่สาว</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5 pl-8">
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">นาย**** *****</p>
                    </div>
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">ส.ส. พรรคเศรษฐกิจ </p>
                    </div>
                    <div className="w-full flex lg:w-4/12">
                        <p className="text-#000 font-bold">บิดา</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการร้องขอ</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                    <p className='text-green-500 font-bold'>ประวัติการเงิน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2' key='1'>10,000 10/01/2566</li>
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                    <p className='text-green-500 font-bold'>ประวัติการฝากคน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2'>ตำแหน่ง ผู้ช่วย ส.ส. 10/01/2566</li>
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5 pl-6">
                    <p className='text-green-500 font-bold'>ประวัติตำแหน่งตัวเอง</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-3 pl-8">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2'>ตำแหน่ง รอง ส.ส. 10/01/2566</li>
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>หมายเหตุ</p>
                </div>

            </div>
        </div>

    )
}

export default InfoCard;