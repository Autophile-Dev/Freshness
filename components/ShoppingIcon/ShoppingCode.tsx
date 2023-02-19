import React from 'react'
interface IconProp{
    className:string
}
const ShoppingCode = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6667 8.3335H5.26667C5.19594 8.3335 5.12811 8.36159 5.0781 8.4116C5.0281 8.46161 5 8.52944 5 8.60016V15.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 15.0002V8.60016C35 8.52944 34.9719 8.46161 34.9219 8.4116C34.8719 8.36159 34.8041 8.3335 34.7334 8.3335H28.3334" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3334 31.6667H34.7334C34.8041 31.6667 34.8719 31.6386 34.9219 31.5886C34.9719 31.5386 35 31.4707 35 31.4V25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 25V31.4C5 31.4707 5.0281 31.5386 5.0781 31.5886C5.12811 31.6386 5.19594 31.6667 5.26667 31.6667H11.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6666 15V25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 15V25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3334 15V25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ShoppingCode