import React from 'react'
interface IconProp{
    className:string
}
const Statistics2 = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33325 33.333H36.6666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33325 33.333V13.6663C8.33325 13.5779 8.36837 13.4932 8.43088 13.4306C8.49339 13.3681 8.57818 13.333 8.66659 13.333H12.9999C13.0883 13.333 13.1731 13.3681 13.2356 13.4306C13.2981 13.4932 13.3333 13.5779 13.3333 13.6663V33.333" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.3333 33.3332V7.1165C18.3333 6.8665 18.4833 6.6665 18.6666 6.6665H22.9999C23.1833 6.6665 23.3333 6.8665 23.3333 7.1165V33.3332" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3333 33.333V18.583C28.3333 18.4497 28.4833 18.333 28.6666 18.333H32.9999C33.1833 18.333 33.3333 18.4497 33.3333 18.583V33.333" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Statistics2