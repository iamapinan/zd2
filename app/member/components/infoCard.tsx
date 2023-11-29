import React from 'react';

interface infoCardProps {
    dataInfo: any;
}

const InfoCard: React.FC<infoCardProps> = ({ dataInfo}) => {
    const [data, setData] = React.useState<any>([])
    React.useEffect(() => {
        console.log("infocard :" ,data);
        setData(dataInfo)

    }, [data, dataInfo]);
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
                    <p className='text-black mb-3'>ชื่อ ...</p>
                    <p className='text-black mb-3'>วันเกิด ... (20 ปี )</p>
                    <p className='text-black mb-3'>เบอร์โทร: ....</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <p className='text-black'>ที่อยู่ 00 หมู่ 0 ถนนลาดพร้าว เเขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310</p>
                <div className="w-full flex flex-wrap lg:w-6/12 pt-4">
                    <p className='text-black'>ไลน์ auoooo.e </p>
                </div>
                <div className="w-full flex flex-wrap lg:w-6/12 pt-4">
                    <p className='text-black'>เฟสบุ๊ค auoooo.e </p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-4">
                    <p className='text-black'>ติ๊กต๊อก auoooo.e</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการศึกษา</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2'>ปริญญาโท คณะนิเทศศาสตร์ มหาวิทยาลัยเกริก</li>
                        <li className='mb-2'>ปริญญาตรี คณะสังคมวิทยาและมานุษยวิทยา มหาวิทยาลัยธรรมศาสตร์</li>
                    </ul>
                </div>
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold'>ประวัติการทำงาน</p>
                </div>
                <div className="w-full flex flex-wrap lg:w-full pt-5">
                    <ul className='text-#000 font-bold list-disc pl-8'>
                        <li className='mb-2'>ผู้พิพากษาสมทบศาลเยาวชนและครอบครัวจังหวัดสมุทรสาคร (2561-2564)</li>
                        <li className='mb-2'>ผู้พิพากษาสมทบศาลเยาวชนและครอบครัวจังหวัดสระบุรี (2544-2554)</li>
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
                        <p className="text-#000 font-bold">ส.ส. พรรคเพื่อไทย </p>
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
                        <p className="text-#000 font-bold">ส.ส. พรรคเพื่อไทย </p>
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