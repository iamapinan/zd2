import React from 'react';
import ChartWork1 from '@/app/components/chartWork1';
import ChartWork2 from '@/app/components/chartWork2';
import ListComponent from '@/app/components/listComponent';
import ListMoney from '@/app/components/listMoney';

interface HistoryCardProps {
    dataInfo1 : any
}

const HistoryCard: React.FC<HistoryCardProps> = ({dataInfo1}) => {
    const [data, setData] = React.useState<any[]>([])
    React.useEffect(() => {
        setData(dataInfo1)
    }, [dataInfo1]);
    return (
        <div className="w-full lg:w-12/12 p-4 rounded bg-white">
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <div className="w-full flex flex-wrap lg:w-12/12 pt-5">
                    <p className='text-red-500 font-bold text-xl'>งานที่ถนัด</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                {/* <ChartWork2 /> */}
            </div>
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                {/* <ChartWork1 /> */}
            </div>
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <ListComponent />
                <ListComponent />
            </div>
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
            <div className="w-full flex flex-wrap lg:w-12/12 p-2">
                <ListMoney />
            </div>
        </div>

    )
}

export default HistoryCard;