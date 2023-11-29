// MoneyPartyComponent.tsx
import React from 'react';
import moment from 'moment';
import 'moment/locale/th';
interface MoneyPartyComponentProps {
    date: string;
    amount: string;
    note: string;
}

const MoneyPartyComponent: React.FC<MoneyPartyComponentProps> = ({ date, amount, note }) => {
    const thaiFormatDate = moment(date).format('LL');
    return (
        <div className="w-full flex flex-wrap lg:w-12/12 p-2">
            <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center px-4 flex-col">
                <div className="w-full h-full flex lg:w-12/12">
                    <div className="w-full h-full flex lg:w-6/12">
                        <p className='text-black pt-5'>{thaiFormatDate}</p>
                    </div>
                    <div className="w-full h-full flex justify-end lg:w-6/12">
                        <p className='text-black pt-5 flex'>{amount}</p>
                    </div>
                </div>
                <div className="w-full h-full flex lg:w-12/12">
                    <p className='text-gray-500 pt-2 pb-3 flex'>{`หมายเหตุ : ${note}`}</p>
                </div>
            </div>
        </div>
    );
};

export default MoneyPartyComponent;
