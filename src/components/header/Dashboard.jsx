import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


const Dashboard = () => {

  // Sample data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','Novermber','December'],
    datasets: [
      {
        label: 'Number of Users',
        data: [65, 59, 80, 81, 56, 55, 40,57,49,67,45,68],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for the pie chart
  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex p-5">
      {/* Left Side - List */}
      <div className="w-1/4 bg-white p-5 rounded shadow-lg mr-5">
        <h2 className="text-xl font-bold mb-3">ALICE</h2>
        <br />
        <ul>
          <li className="mb-2">My dashboard</li>
          <li className="mb-2">users</li>
          <li className="mb-2">Bags</li> 
          <li className="mb-2">testnomies</li>
        </ul>
      </div>
      {/* Right Side - Charts and Small Boxes */}
      <div className="flex-grow bg-white p-5 rounded shadow-lg">
        <div className="grid grid-cols-2 gap-4 mb-5">
          
          {/* Chart */}
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-3">Chart</h2>
            <Bar
              data={chartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
          {/* Pie Chart */}
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-3">Pie Chart</h2>
            <Doughnut data={pieChartData} />
          </div>
        </div>
        {/* Small Boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 p-5 rounded shadow-lg text-white text-center">
            <h3 className="text-lg font-bold mb-2">BAGS</h3>
            <p>Content</p>
          </div>
          <div className="bg-green-500 p-5 rounded shadow-lg text-white text-center">
            <h3 className="text-lg font-bold mb-2">USERS</h3>
            <p>Content</p>
          </div>
          <div className="bg-yellow-500 p-5 rounded shadow-lg text-white text-center">
            <h3 className="text-lg font-bold mb-2">REGISTRATION</h3>
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;