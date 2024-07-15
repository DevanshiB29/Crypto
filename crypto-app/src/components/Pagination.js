import React, { useState } from 'react'
import paginationArrow from "../assets/pagination-arrow.svg"
const Pagination = () => {
  const[currentPage, setCurrentPage]=useState(1);

  const TotalNumber= 250;

  const next=()=>{
    if(currentPage==TotalNumber){
      return null;
    }
    else{
      setCurrentPage(currentPage+1);
    }
  }
  const prev=()=>{
    if(currentPage==1){
      return null;
    }
    else{
      setCurrentPage(currentPage-1);
    }
  }
  return (
    <div className='flex item-center'>
      <ul className='flex item-center justify-end text-sm'>
        <li className='flex items-center'>
          <button className='outline-0 hover:text-cyan w-8'>
          <img className='w-full h-auto rotate-180' src={paginationArrow} alt="left"/>
          </button>
        </li>
        <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button></li>
        <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5'>1</button></li>
        <li><button className='outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-cyan  text-gray-300 mx-1.5'>2</button></li>
        <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center  bg-gray-200 mx-1.5'>3</button></li>
        <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button></li>
        <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center  bg-gray-200 mx-1.5'>100</button></li>
        <li>
          <button className='outline-0 hover:text-cyan w-8'>
          <img className='w-full h-auto' src={paginationArrow} alt="right"/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
