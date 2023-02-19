import React from 'react'
interface IconProp{
    className:string
}
const SecurityUnlocked = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.1667 13.3335H7.50008C5.65913 13.3335 4.16675 14.8259 4.16675 16.6668V33.3335C4.16675 35.1744 5.65913 36.6668 7.50008 36.6668H34.1667C36.0077 36.6668 37.5001 35.1744 37.5001 33.3335V16.6668C37.5001 14.8259 36.0077 13.3335 34.1667 13.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 3.3335H9.16667C10.0507 3.3335 10.8986 3.68469 11.5237 4.30981C12.1488 4.93493 12.5 5.78277 12.5 6.66683V13.1502" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.8334 26.6668C23.1346 26.6668 25.0001 24.8013 25.0001 22.5002C25.0001 20.199 23.1346 18.3335 20.8334 18.3335C18.5322 18.3335 16.6667 20.199 16.6667 22.5002C16.6667 24.8013 18.5322 26.6668 20.8334 26.6668Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.8333 26.667V31.667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SecurityUnlocked
