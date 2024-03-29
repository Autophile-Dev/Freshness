import React from 'react'
interface IconProp{
    className:string
}
const ActionSwitchOn = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 13.3333H13.3334C9.65152 13.3333 6.66675 16.318 6.66675 19.9999C6.66675 23.6818 9.65152 26.6666 13.3334 26.6666H26.6667C30.3486 26.6666 33.3334 23.6818 33.3334 19.9999C33.3334 16.318 30.3486 13.3333 26.6667 13.3333Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.6667 26.6666C30.3486 26.6666 33.3333 23.6818 33.3333 19.9999C33.3333 16.318 30.3486 13.3333 26.6667 13.3333C22.9848 13.3333 20 16.318 20 19.9999C20 23.6818 22.9848 26.6666 26.6667 26.6666Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionSwitchOn