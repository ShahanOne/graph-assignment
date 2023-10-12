import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
import { MdNotificationsActive } from 'react-icons/md';

Chart.register(...registerables);

const Graph = () => {
  // State to hold the graph data
  const [graphData, setGraphData] = useState(null);

  // Fetch data from an API
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          'https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'
        );
        setGraphData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // If data is still loading, show a loading message
  if (!graphData) {
    return <div>Loading...</div>;
  }

  // Extract the years and burglary data for the graph
  const years = graphData.data.map((yearData) => yearData.data_year);
  const burglaryData = graphData.data.map((yearData) => yearData.Burglary);

  // Chart options for customization
  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Arrests',
        },
        grid: {
          borderColor: '#DFCCFB',
          borderWidth: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="inline-block p-16">
      <div className="flex p-2">
        <MdNotificationsActive className="mr-1 text-xl" color="#377aff" />
        <p className="inline-block">Crimes</p>{' '}
        <hr className="border-b-2 mx-2 mt-3 inline-block border-[#377aff] w-full" />
      </div>
      <div className="card rounded-3xl bg-gray-100">
        <p className="w-full rounded-tl-3xl rounded-tr-3xl text-blue-500 bg-indigo-100 px-4">
          Burglary
        </p>
        <div className="p-8">
          <Line
            style={{
              borderRadius: '24px',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
              padding: 12,
              width: 600,
              height: 800,
            }}
            data={{
              labels: years,
              datasets: [
                {
                  label: 'Burglary',
                  data: burglaryData,
                  borderColor: '#1463FF',
                  borderWidth: 2,
                },
              ],
            }}
            options={chartOptions}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Graph;
