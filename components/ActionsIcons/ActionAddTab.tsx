import React from 'react'
interface IconProp{
    className:string
}
const ActionAddTab = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 21.7667V28.3334C35 29.2175 34.6488 30.0653 34.0237 30.6904C33.3986 31.3156 32.5507 31.6668 31.6667 31.6668H8.33333C7.44928 31.6668 6.60143 31.3156 5.97631 30.6904C5.35119 30.0653 5 29.2175 5 28.3334V15.0001C5 14.116 5.35119 13.2682 5.97631 12.6431C6.60143 12.0179 7.44928 11.6667 8.33333 11.6667H19.1833" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 11.6667H35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 6.66675V16.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionAddTab