import React from 'react'
interface IconProp{
  className:string
}
const Temperature = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0001 21.6668V8.3335C25.0001 7.00741 24.4733 5.73564 23.5356 4.79796C22.5979 3.86028 21.3262 3.3335 20.0001 3.3335C18.674 3.3335 17.4022 3.86028 16.4645 4.79796C15.5269 5.73564 15.0001 7.00741 15.0001 8.3335V21.6668C13.6009 22.7162 12.5673 24.1793 12.0458 25.8488C11.5243 27.5182 11.5413 29.3095 12.0944 30.9687C12.6475 32.628 13.7086 34.0712 15.1275 35.0939C16.5464 36.1165 18.2511 36.6668 20.0001 36.6668C21.7491 36.6668 23.4538 36.1165 24.8727 35.0939C26.2915 34.0712 27.3527 32.628 27.9058 30.9687C28.4589 29.3095 28.4759 27.5182 27.9544 25.8488C27.4329 24.1793 26.3993 22.7162 25.0001 21.6668V21.6668Z" 
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.0001 31.6667C21.841 31.6667 23.3334 30.1743 23.3334 28.3333C23.3334 26.4924 21.841 25 20.0001 25C18.1591 25 16.6667 26.4924 16.6667 28.3333C16.6667 30.1743 18.1591 31.6667 20.0001 31.6667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 15V25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Temperature
