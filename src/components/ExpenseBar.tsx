import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const ExpenseBar = ({amount, date, category}) => {
  return (
    <div className=' h-fit py-1 '>
        <div className='text-white bg-[#1C1917] px-4 py-1 flex items-center rounded-lg justify-between shrink-0 border-[#7b0303] border-2 h-full min-w-min min-h-min'>

            <div className={`flex items-center  gap-1 rounded-lg }`}>
                {amount > 0 ? <AiOutlinePlusCircle className='text-emerald-600 font-bold'/> : <AiOutlineMinusCircle className=' text-red-600'/>}

                <p className={`text-[12px] font-semibold ${amount > 0 ? 'text-emerald-500' : 'text-red-600'}`}>
                    {amount}
                </p>
            </div>
            

            <div className='flex flex-col items-center px-2 py-1 rounded-lg min-w-10'>
                <p className=' text-xs font-semibold tracking-widest'>
                    {`${category}`.toUpperCase()}
                </p>
                <p className='italic text-gray-300 text-[10px]'>
                    {date}
                </p>
            </div>


            <button className='px-2 py-1 bg-[#C72323] rounded-lg font-semibold text-sm hover:bg-[#a91e1e]'>
                Details
            </button>

        </div>
        
    </div>
  )
}

export default ExpenseBar
