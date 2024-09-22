"use client";

import Image from "next/image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Mon",
    present: 70,
    absent: 24,
  },
  {
    name: "Tue",
    present: 70,
    absent: 30,
  },
  {
    name: "Wed",
    present: 40,
    absent: 58,
  },
  {
    name: "Thu",
    present: 78,
    absent: 39,
  },
  {
    name: "Fri",
    present: 80,
    absent: 48,
  },
];

const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHARTS */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar dataKey="present" fill="#FAE27C" legendType="circle" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent" fill="#C3EBFA" legendType="circle" radius={[10, 10, 0, 0]} />
          #FAE27C
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
