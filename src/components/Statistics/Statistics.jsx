import React from 'react';
import { PieChart, Pie, Tooltip, } from 'recharts';

const Statistics = () => {
    const data = [
        { name: "assignment-1", value: 58 },
        { name: "assignment-2", value: 59 },
        { name: "assignment-3", value: 60 },
        { name: "assignment-4", value: 58 },
        { name: "assignment-5", value: 60 },
        { name: "assignment-6", value: 58 },
        { name: "assignment-7", value: 60 },
        { name: "assignment-8", value: 60 },
    ]


    return (
        <div className='container mx-auto mt-12 text-indigo-500 text-center text-xl font-bold'>
            <h2>Assignment Mark pie chart</h2>

            <PieChart className='mx-auto' width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
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

export default Statistics;