import React from 'react'
interface IconProp{
    className:string
}
const ActionSwitchOf = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6666 13.3333H13.3333C9.65139 13.3333 6.66663 16.318 6.66663 19.9999C6.66663 23.6818 9.65139 26.6666 13.3333 26.6666H26.6666C30.3485 26.6666 33.3333 23.6818 33.3333 19.9999C33.3333 16.318 30.3485 13.3333 26.6666 13.3333Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3333 26.6666C17.0152 26.6666 20 23.6818 20 19.9999C20 16.318 17.0152 13.3333 13.3333 13.3333C9.65139 13.3333 6.66663 16.318 6.66663 19.9999C6.66663 23.6818 9.65139 26.6666 13.3333 26.6666Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionSwitchOf