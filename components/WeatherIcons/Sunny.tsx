import React from 'react'
interface IconProp{
    className:string
}
const Sunny = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 31.6668C26.4432 31.6668 31.6666 26.4435 31.6666 20.0002C31.6666 13.5568 26.4432 8.3335 19.9999 8.3335C13.5566 8.3335 8.33325 13.5568 8.33325 20.0002C8.33325 26.4435 13.5566 31.6668 19.9999 31.6668Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 8.3335V3.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 36.667V31.667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.6665 20H36.6665" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33325 20H7.61659" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.3999 28.4004L31.7832 31.7837" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.21631 8.2168L11.083 11.0835" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5996 28.4004L8.21631 31.7837" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.7831 8.2168L28.6165 11.3835" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Sunny
