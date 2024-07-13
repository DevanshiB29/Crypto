import React from 'react'
import paginationArrow from "../assets/pagination-arrow.svg"
const Pagination = () => {
  return (
    <div className='flex item-center'>
      <ul>
        <li>
          <img className='w-full h-auto' src={paginationArrow} alt="left"/>
        </li>
        <li>...</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
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
