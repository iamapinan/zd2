import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

interface ChartWork2Props {
  work1: number;
  work2: number;
  work3: number;
  work4: number;
  work5: number;
  work6: number;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

const options = {
  plugins: {
    legend: {
      position: 'bottom',
    },
    labels: {
      render: 'percentage', // Show percentages in the labels
      position: 'outside', // Place labels outside the pie chart
    },
  },
};

const ChartWork2: React.FC<ChartWork2Props> = ({ work1, work2, work3, work4, work5, work6 }) => {
  const [chartData, setChartData] = React.useState({
    labels: ['เศรษฐกิจ', 'เกษตร', 'เทคโนโลยี', 'พาณิชย์และปากท้อง', 'การศึกษา', 'กฎหมายและการปฏิรูป'],
    datasets: [
      {
        label: 'Field Work2',
        data: [work1, work2, work3, work4, work5, work6],
        backgroundColor: [
          '#CAE2F7',
        ],
        borderColor: [
          '#100DB1',
          '#763CEF',
          '#2798F7',
          '#F80D38',
          '#FECA57',
          '#2CA800',
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
  return <Radar data={chartData} />;
};

export default ChartWork2;
