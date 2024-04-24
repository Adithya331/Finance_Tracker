import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FaLongArrowAltDown } from "react-icons/fa";

const Chart = () => {

    const data = [
        {
          "name": "Jan",
          "amt": 24000
        },
        {
            "name": "Feb",
            "amt": 34000
          },
          {
            "name": "Mar",
            "amt": 22700
          },
          {
            "name": "Apr",
            "amt": 29060
          },
          {
            "name": "May",
            "amt": 24500
          },
          {
            "name": "June",
            "amt": 21100
          },
          {
            "name": "July",
            "amt": 54600
          },
          {
            "name": "Aug",
            "amt": 27600
          },
          {
            "name": "Sep",
            "amt": 14000
          },
          {
            "name": "Oct",
            "amt": 34440
          },
          {
            "name": "Nov",
            "amt": 80000
          },
          {
            "name": "Dec",
            "amt": 27654
          },
          
      ]

      const m1 = data.find(x => x.name === "Nov")
      const m2 = data.find(x => x.name === "Dec")
     

  return (
    <div className='text-white p-2 bg-[#0A0A0A] w-full rounded-xl border-[#262626] border-2'>
        <div className='pb-8 pl-4'>
            <h1 className='text-sm font-semibold'>Spent</h1>
            <p className='font-bold text-xl pt-1 flex items-center'>
                <p className='text-2xl'>{m1.amt - m2.amt > 0 ? "- " : "+ "}</p>
                <p>{m1.amt-m2.amt}</p>
            </p>

            <span className='flex items-center text-[11px] gap-0.5'>
                <p className=''><FaLongArrowAltDown /></p>
                <p>{Number(`${((m1.amt-m2.amt)/m1.amt)*100}`).toFixed(2)}% from last month</p>
            </span>

        </div>
        
        <div className='px-2 py-2 '>
        <ResponsiveContainer width="45%" height={350} className="">
            <ComposedChart  data={data} stroke="#C72323">
                <XAxis dataKey="name"  stroke='#C72323'/>
                <YAxis  stroke='#C72323' tickCount={8}/>
                <Legend />
                
                
                <Bar dataKey="amt" barSize={18} fill="#C72323" />
                <Line type="monotone" dataKey="amt" stroke="#C72323" />
            </ComposedChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Chart
