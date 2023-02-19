import React from 'react'
interface IconProp{
  className?:string
  width:string
  height:string
}
const ChevronRight = ({className, width, height}:IconProp) => {
  return (
    <svg className={`${className}`} width = {width} height = {height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3333 27.9668L23.1833 21.1168C23.4937 20.8045 23.6679 20.3821 23.6679 19.9418C23.6679 19.5015 23.4937 19.079 23.1833 18.7668L16.5166 12.1001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ChevronRight