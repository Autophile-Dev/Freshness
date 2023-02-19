import React from 'react'
interface IconProp{
    className:string
}
const Remove = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16675 34.9997L5.48341 30.2163C7.66675 22.333 13.4167 18.333 19.1667 18.333" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.1668 18.3166C23.7692 18.3166 27.5002 14.5856 27.5002 9.98324C27.5002 5.38086 23.7692 1.6499 19.1668 1.6499C14.5645 1.6499 10.8335 5.38086 10.8335 9.98324C10.8335 14.5856 14.5645 18.3166 19.1668 18.3166Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M27.5001 38.3498C32.1025 38.3498 35.8334 34.6188 35.8334 30.0164C35.8334 25.4141 32.1025 21.6831 27.5001 21.6831C22.8977 21.6831 19.1667 25.4141 19.1667 30.0164C19.1667 34.6188 22.8977 38.3498 27.5001 38.3498Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.1667 30.0166H30.8334" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Remove
