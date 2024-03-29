import React from 'react'
interface IconProp{
  className?:string
  width:string
  height:string
}
const ChevronLeftRight = ({className, width, height}:IconProp) => {
  return (
    <svg className={`${className}`} width = {width} height = {height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4998 27.9668L32.3498 21.1168C32.6602 20.8045 32.8344 20.3821 32.8344 19.9418C32.8344 19.5015 32.6602 19.079 32.3498 18.7668L25.6831 12.1001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M14.4997 12.0332L7.64969 18.8832C7.33928 19.1955 7.16504 19.6179 7.16504 20.0582C7.16504 20.4985 7.33928 20.9209 7.64969 21.2332L14.3164 27.8999" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ChevronLeftRight