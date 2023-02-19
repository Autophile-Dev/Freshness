import React from 'react'
interface IconProp{
    className?:string
    width:string
    height:string
}
const ChevronLeft = ({className, width, height}:IconProp) => {
  return (
    <svg className={`${className}`} width = {width} height = {height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6664 12.0332L16.8164 18.8832C16.506 19.1955 16.3318 19.6179 16.3318 20.0582C16.3318 20.4985 16.506 20.9209 16.8164 21.2332L23.4831 27.8999" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ChevronLeft