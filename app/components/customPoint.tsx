import React from 'react';

interface CustomPointProps {
    province: string;
    label: string;
    activeColor: string;
    x: number;
    y: number;
}

const CustomPoint: React.FC<CustomPointProps> = ({ province, label, activeColor, x, y }) => {
    const circleStyle = {
        position: 'relative',
        left: `${x}rem`, // Adjust the position based on your requirements
        top: `${y}rem`, // Adjust the position based on your requirements
    };
    return (
        <div className="circle bg-red">
            <p className="">{label}</p>
        </div>
    );
};

export default CustomPoint;
