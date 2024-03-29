import React from 'react'
interface IconProp extends React.HTMLAttributes<HTMLOrSVGElement>{
    width:string
    height:string
    className?:string
}
const ChevronDown = ({className, width, height}:IconProp) => {
  return (
    <svg className={`${className}`} width = {width} height = {height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0332 16.3335L18.8832 23.1835C19.1955 23.4939 19.6179 23.6681 20.0582 23.6681C20.4985 23.6681 20.9209 23.4939 21.2332 23.1835L27.8999 16.5168" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ChevronDown