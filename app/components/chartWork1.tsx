import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

interface ChartWork1Props {
  work1: number;
  work2: number;
  work3: number;
  work4: number;
  work5: number;
  work6: number;
}





const ChartWork1: React.FC<ChartWork1Props> = ({ work1, work2, work3, work4, work5, work6 }) => {
  const [chartData, setChartData] = useState({
    labels: ['งานสภา', 'กรรมาธิการ', 'งานด้านการช่วยเหลือบริการ', 'งานด้านการสื่อสาร', 'งานด้านสาธารณะประโยชน์','งานต่างประเทศ'],
    datasets: [
      {
        label: 'Field Work1',
        data: [work1, work2, work3, work4, work5, work6],
        backgroundColor: [
          '#FECA57',
          '#F80D38',
          '#2798F7',
          '#763CEF',
          '#100DB1',
          '#CAE2F7'
        ],
        borderColor: [
          '#FECA57',
          '#F80D38',
          '#2798F7',
          '#763CEF',
          '#100DB1',
          '#CAE2F7'
        ],
        borderWidth: 1,
      },
    ],
    options:{
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

  return <Pie data={chartData} />;
};

export default ChartWork1;
