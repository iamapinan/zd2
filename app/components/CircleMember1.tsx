// CircleMember.tsx
import React from 'react';

interface CircleMember1Props {
    number?: number;
    diameter: number;
    isPtMember: boolean;
    comment: string;
    position_x: number;
    position_y: number;
}

const CircleMember1: React.FC<CircleMember1Props> = ({ number = 0, diameter, isPtMember, comment, position_x, position_y }) => {
    const colorClass = isPtMember ? 'bg-red-500' : 'bg-gray-200';
    const fixMapWidth = 674;
    const fixMapHeight = 1090;
    let diameter2 = (14 / fixMapWidth) * 100;
    let diameterFont = (diameter / fixMapWidth) * 100;
    return (
        <div
            className={`rounded-full ${colorClass} flex items-center justify-center text-white`}
            style={{
                fontSize: `0.23rem`,
                top: `${(position_y / fixMapHeight) * 100}%`,
                left: `${(position_x / fixMapWidth) * 100}%`,
                position: 'absolute',
                width: `${diameter2}%`,
                height: `auto`,
                aspectRatio: '1/1',
                padding: '0',
            }}
            // onClick={() => location.replace('/user?id=' + number)}
        >
            {number}
        </div>
    );
};

export default CircleMember1;
