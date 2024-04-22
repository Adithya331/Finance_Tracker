import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";

const Sidebar = () =>{
    
    const [SidebarToggle, setSidebarToggle] = useState(true);

    const hideSidebar = () => {
        if(SidebarToggle){
            setSidebarToggle(false)
            console.log(SidebarToggle)
        } 
        else{
            setSidebarToggle(true)
            console.log(SidebarToggle)
        }
    }

    return( 
        <div className="bg-gray-600 p-1 h-full">
            <button className={`${SidebarToggle ? '': ''}`} onClick={hideSidebar}><GiHamburgerMenu className="w-8 h-8 text-white"/></button>
            <div className= {`${SidebarToggle ? 'transition-all duration-300': '-translate-x-96 transition-all duration-300 w-0'}` }>
            <div className= 'flex flex-col text-white items-center mt-14'>
                <ul className="flex flex-col gap-8 text-xl font-semibold ">
                    <li className="flex gap-2 items-center hover:bg-red-600 p-1.5 rounded-lg"><AiOutlineHome className="w-6 h-6" />Home</li>
                    <li className="flex gap-2 items-center hover:bg-red-600 p-1.5 rounded-lg"><FaRegCreditCard className="w-6 h-6" />Expenses</li>
                    <li className="flex gap-2 items-center hover:bg-red-600 p-1.5 rounded-lg"><RiMoneyRupeeCircleLine className="w-6 h-6"/>Investements</li>
                    <li className="flex gap-2 items-center hover:bg-red-600 p-1.5 rounded-lg"><IoMdAddCircleOutline className="w-6 h-6"/>Add data</li>
                </ul>
            </div>
        </div>
        </div>
        
    );
}

export default Sidebar;