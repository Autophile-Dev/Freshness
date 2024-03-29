import React from 'react'
interface IconProp{
    className:string
}
const ShoppingBox = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3333 3.3335H6.66659C4.82564 3.3335 3.33325 4.82588 3.33325 6.66683V33.3335C3.33325 35.1744 4.82564 36.6668 6.66659 36.6668H33.3333C35.1742 36.6668 36.6666 35.1744 36.6666 33.3335V6.66683C36.6666 4.82588 35.1742 3.3335 33.3333 3.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 3.3335V11.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.6665 25H26.6665" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.6665 30H29.9998" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ShoppingBox