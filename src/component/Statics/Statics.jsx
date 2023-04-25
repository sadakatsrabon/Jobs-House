import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const AssignmentResultsPieChart = () => {
  const data = [
    { name: 'Assignment 1', value: 29 },
    { name: 'Assignment 2', value: 48 },
    { name: 'Assignment 3', value: 28 },
    { name: 'Assignment 4', value: 30 },
    { name: 'Assignment 5', value: 60 },
    { name: 'Assignment 6', value: 58 },
    { name: 'Assignment 7', value: 28 },
  ];

  return (
    <div>
        <h2 className='text-4xl text-center font-bold mt-10'>Here I want to show  my Assignment marks  in Programing hero.  <br />
        -Sadakat Hossain Srabon</h2>
        <PieChart width={800} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
    </div>
  );
};

export default AssignmentResultsPieChart;
