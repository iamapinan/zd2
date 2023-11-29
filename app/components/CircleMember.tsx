// CircleMember.tsx
import React from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
interface CircleMemberProps {
    zone_id: number;
    zone_area: string;
    zone_province: string;
    zone_name?: number;
    diameter: number;
    isPtMember: boolean;
    user: any;
    comment: string;
    position_x: number;
    position_y: number;
}
function convertThai(str: string) {
    if (str == 'BKK') {
        return 'กรุงเทพมหานคร'
    } else if (str == 'C') {
        return 'ภาคกลาง'
    } else if (str == 'N') {
        return 'ภาคเหนือ'
    } else if (str == 'NE') {
        return 'ภาคตะวันออกเฉียงเหนือ'
    } else if (str == 'S') {
        return 'ภาคใต้'
    }
}

const CircleMember: React.FC<CircleMemberProps> = ({ zone_id, zone_area, zone_province, zone_name = 0, diameter, isPtMember, user = null, comment, position_x, position_y, }) => {
    const colorClass = isPtMember ? 'bg-red-500' : 'bg-gray-200';
    const fixMapWidth = 674;
    const fixMapHeight = 1090;
    let diameter2 = (14 / fixMapWidth) * 100;
    let diameterFont = (diameter / fixMapWidth) * 100;
    const userImage = (user?.image === null || user?.image === "") ? "./assets/img/mockupUser.png" : "https://memberofhouse.newdice.co/staticfiles/photo/" + user?.image;
    const zoneAreaThai = convertThai(zone_area);
    // console.log(userImage);
    const handleMouseLeave = () => {
        const tooltip = document.getElementById(`tooltip-${zone_id}`);
        if (tooltip) tooltip.style.display = 'none';
    };
    const handleKeyDown = (event: any) => {
        if (event.key === 'Escape') {
            handleMouseLeave();
        }
    };
    // Add event listeners when component mounts
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            // Remove event listeners when component unmounts
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array ensures the effect runs only once
    return (

        <>
            <div
                className={`group rounded-full ${colorClass} flex items-center justify-center text-white transition-transform transform hover:scale-110`}
                style={{
                    fontSize: `0.28rem`,
                    top: `${(position_y / fixMapHeight) * 100}%`,
                    left: `${(position_x / fixMapWidth) * 100}%`,
                    position: 'absolute',
                    width: `${diameter2}%`,
                    height: `auto`,
                    aspectRatio: '1/1',
                    zIndex: 1,
                    padding: '0',
                }}
                onMouseEnter={() => {
                    const tooltip = document.getElementById(`tooltip-${zone_id}`);
                    if (tooltip) {
                        tooltip.style.display = 'block';

                    };
                }}
                onMouseLeave={() => {
                    const tooltip = document.getElementById(`tooltip-${zone_id}`);
                    if (tooltip) {
                        tooltip.style.display = 'none';
                    }
                }}
                onClick={() => {
                    if (user !== null) {
                        window.open('./user?id=' + user?.id, '_blank');
                    } else {
                        Swal.fire({
                            title: 'ไม่พบข้อมูล',
                            text: 'ไม่พบข้อมูลสมาชิกในเขตนี้',
                            icon: 'error',
                            confirmButtonText: 'ตกลง',
                        });
                    }
                }}

            >
                {zone_name}


            </div>
            <div
                onMouseEnter={() => {
                    const tooltip = document.getElementById(`tooltip-${zone_id}`);
                    if (tooltip) {
                        tooltip.style.display = 'block';

                    };
                }}
                onMouseLeave={() => {
                    const tooltip = document.getElementById(`tooltip-${zone_id}`);
                    if (tooltip) {
                        tooltip.style.display = 'none';
                    }
                }}
                onClick={() => {
                    if (user !== null) {
                        window.open('./user?id=' + user?.id, '_blank');
                    } else {
                        Swal.fire({
                            title: 'ไม่พบข้อมูล',
                            text: 'ไม่พบข้อมูลสมาชิกในเขตนี้',
                            icon: 'error',
                            confirmButtonText: 'ตกลง',
                        });
                    }
                }}
                id={`tooltip-${zone_id}`}
                style={{
                    position: 'absolute',
                    top: `${(position_y / fixMapHeight) * 100}%`,
                    left: `${(position_x / fixMapWidth) * 100}%`,
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '1rem', // Increase padding for a larger tooltip
                    borderRadius: '0.25rem',
                    display: 'none',
                    zIndex: 5,
                    fontSize: '1rem',
                    width: '10rem',
                    textAlign: 'center',
                    overflow: 'hidden',
                }}
            >
                {user && user.image && <Image src={userImage} alt="User Avatar" width={500} height={500} priority />}
                <div>({zoneAreaThai})</div>
                <div>{zone_province} เขต {zone_name}</div>
                <div>{user != null ? ` ชื่อ : ${user.name}` : ''}</div>
            </div>
        </>
    );
};

export default CircleMember;

