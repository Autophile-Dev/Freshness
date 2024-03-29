import React from 'react'
interface IconProp{
  className?:string
  width:string
  height:string
}
const ChevronTopBottom = ({className, width, height}:IconProp) => {
  return (
    <svg className={`${className}`} width = {width} height ={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.9665 14.5002L21.1165 7.65018C20.8042 7.33976 20.3818 7.16553 19.9415 7.16553C19.5012 7.16553 19.0788 7.33976 18.7665 7.65018L12.0999 14.3168" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M12.0332 25.5L18.8832 32.35C19.1955 32.6604 19.6179 32.8347 20.0582 32.8347C20.4985 32.8347 20.9209 32.6604 21.2332 32.35L27.8999 25.6833" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ChevronTopBottom