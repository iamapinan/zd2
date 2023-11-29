import React from "react";
import Image from "next/image";
const ListComponent = () => {
    return (
        <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center pl-4 mt-2">
            <Image src={'./assets/img/mockupUser.png'} alt='mockupUser' width={50} height={50} className="mr-3 rounded-md"></Image>
            <div>
                <p className='text-black pt-5'>เยี่ยมชมพื้นที่ เขต 6 เพชรบูรณ์ นโยบายการเกษตร</p>
                <p className='text-gray pt-2 pb-5'>สส. นายนาย</p>
            </div>
        </div>
    )
}

export default ListComponent;