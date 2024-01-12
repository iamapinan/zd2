import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

interface ChartWork1Props {
  work1: number;
  work2: number;
  work3: number;
  work4: number;
  work5: number;
  work6: number;
  work7: number;
  work8: number;
  work9: number;
  work10: number;
  work11: number;
  work12: number;
}





const ChartWork1: React.FC<ChartWork1Props> = ({ work1, work2, work3, work4, work5, work6,work7,work8,work9,work10,work11,work12 }) => {
  const [chartData, setChartData] = useState({
    labels: [
      'งานสภา', 
      'กรรมาธิการ', 
      'งานด้านการช่วยเหลือบริการ', 
      'งานด้านการสื่อสาร', 
      'งานด้านสาธารณะประโยชน์',
      'งานต่างประเทศ',
      'กิจกรรมพรรค',
      'Soft Power',
      'งานด้านสิทธิมนุษยชน',
      'งานด้านความหลากหลายทางเพศ',
      'งานด้านสิ่งแวดล้อม',
      'งานด้านศิลปะและวัฒนธรรม'
    ],
    datasets: [
      {
        label: 'Field Work1',
        data: [work1, work2, work3, work4, work5, work6,work7,work8,work9,work10,work11,work12],
        backgroundColor: [
          '#FF6B6B',
          '#FFD166',
          '#06D6A0',
          '#118AB2',
          '#EF476F',
          '#F8961E',
          '#073B4C',
          '#8338EC',
          '#E63946',
          '#FCFCFC',
          '#303841',
          '#00A1E4',
        ],
        borderColor: [
          '#FF6B6B',
          '#FFD166',
          '#06D6A0',
          '#118AB2',
          '#EF476F',
          '#F8961E',
          '#073B4C',
          '#8338EC',
          '#E63946',
          '#FCFCFC',
          '#303841',
          '#00A1E4',
        ],
        borderWidth: 1,
      },
    ],
    options:{
      maintainAspectRatio: false,
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }],
        xAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });

  return <Pie data={chartData}  />;
};

export default ChartWork1;
