import React from 'react'
interface IconProp{
    className:string
}
const ActionTimer = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0001 35.8334C27.3639 35.8334 33.3334 29.8639 33.3334 22.5001C33.3334 15.1363 27.3639 9.16675 20.0001 9.16675C12.6363 9.16675 6.66675 15.1363 6.66675 22.5001C6.66675 29.8639 12.6363 35.8334 20.0001 35.8334Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6667 4.16675H23.3334" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 15V23.3333L25 26.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionTimer