import React from 'react'
import paginationArrow from "../assets/pagination-arrow.svg"
const Pagination = () => {
  return (
    <div className='flex item-center'>
      <ul className='flex item-center justify-end text-sm'>
        <li className='flex items-center'>
          <button className='outline hover:text-cyan w-8'>
          <img className='w-full h-auto rotate-180' src={paginationArrow} alt="left"/>
          </button>
        </li>
        <li><button>...</button></li>
        <li><button>1</button></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
        <li>...</li>
        <li>last page</li>
        <li>
          <img className='w-full h-auto' src={paginationArrow} alt="left"/>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
