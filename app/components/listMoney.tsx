import React from "react";
const ListMoney = () => {
    return (
        <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center px-4 flex-col">
            <div className="w-full h-full flex lg:w-12/12">
                <div className="w-full h-full flex lg:w-6/12">
                    <p className='text-black pt-5'>01/01/2566</p>
                </div>
                <div className="w-full h-full flex justify-end lg:w-6/12">
                    <p className='text-black pt-5 flex '>1,000 บาท</p>
                </div>
            </div>
            <div className="w-full h-full flex lg:w-12/12">
                <p className='text-gray-500 pt-2 pb-3 flex'>หมายเหตุ : </p>
            </div>
        </div>

    )
}

export default ListMoney;