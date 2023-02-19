import React from 'react'
interface IconProp{
    className:string
}
const SportSoccerField = ({className}  : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.3333 8.3335H3.66659C3.48249 8.3335 3.33325 8.48273 3.33325 8.66683V31.3335C3.33325 31.5176 3.48249 31.6668 3.66659 31.6668H36.3333C36.5173 31.6668 36.6666 31.5176 36.6666 31.3335V8.66683C36.6666 8.48273 36.5173 8.3335 36.3333 8.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 8.3335V31.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33325 15H7.99992C8.08832 15 8.17311 15.0351 8.23562 15.0976C8.29813 15.1601 8.33325 15.2449 8.33325 15.3333V24.6667C8.33325 24.7551 8.29813 24.8399 8.23562 24.9024C8.17311 24.9649 8.08832 25 7.99992 25H3.33325" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36.6665 25H31.9998C31.9114 25 31.8266 24.9649 31.7641 24.9024C31.7016 24.8399 31.6665 24.7551 31.6665 24.6667V15.3333C31.6665 15.2449 31.7016 15.1601 31.7641 15.0976C31.8266 15.0351 31.9114 15 31.9998 15H36.6665" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportSoccerField