import React from "react";
import Image from "next/image";
const BlankComponent = () => {
    return (
        <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center pl-4 mt-2">
            <Image src={'./assets/img/mockupUser.png'} alt='mockupUser' width={50} height={50} className="mr-3 rounded-md"></Image>
            <div>
                <p className='text-black pt-5'>ยังไม่มีประวัติการเยี่ยมชมพื้นที่</p>
                <p className='text-gray pt-2 pb-5'></p>
            </div>
        </div>
    )
}

export default BlankComponent;