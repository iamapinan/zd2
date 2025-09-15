import React from "react";
import Image from "next/image";

interface HistoryEngageComponentProps {
    postText: string;
    userName: string;
    postId: number;
}
const HistoryEngageComponent: React.FC<HistoryEngageComponentProps> = ({postText,userName,postId}) => {
    const limitPostText = (text: string) => {
        if(text.length > 50){
            return text.slice(0,50) + '...';
        }
        return text;
    }
    return (
        <div className="w-full h-full flex-shrink-0 rounded-xl bg-white shadow-xl flex items-center pl-4 mt-2"
        onClick={() => {
            window.open(`https://theengage.co/post/${postId}`,'_blank');
        }}
        >
            <Image src={'/assets/img/mockupUser.png'} alt='mockupUser' width={50} height={50} className="mr-3 rounded-md"></Image>
            <div>
                <p className='text-black pt-5'>{limitPostText(postText)}</p>
                <p className='text-gray pt-2 pb-5'>{userName}</p>
            </div>
        </div>
    )
}

export default HistoryEngageComponent;