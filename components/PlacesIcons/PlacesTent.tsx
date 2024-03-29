import React from 'react'
interface IconProp{
    className:string
}
const PlacesTent = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33325 33.3335H36.6666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.6665 33.3335L19.9998 8.3335L33.3332 33.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 23.3335V33.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default PlacesTent