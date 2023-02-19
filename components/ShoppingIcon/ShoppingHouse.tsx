import React from 'react'
interface IconProp{
    className:string
}
const ShoppingHouse = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6667 3.3335H8.33333C6.49238 3.3335 5 4.82588 5 6.66683V33.3335C5 35.1744 6.49238 36.6668 8.33333 36.6668H31.6667C33.5076 36.6668 35 35.1744 35 33.3335V6.66683C35 4.82588 33.5076 3.3335 31.6667 3.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3333 36.6667V26.6667C13.3333 24.8986 14.0356 23.2029 15.2859 21.9526C16.5361 20.7024 18.2318 20 19.9999 20V20C21.768 20 23.4637 20.7024 24.714 21.9526C25.9642 23.2029 26.6666 24.8986 26.6666 26.6667V36.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 8.3335C5 9.65958 5.52678 10.9313 6.46447 11.869C7.40215 12.8067 8.67392 13.3335 10 13.3335C11.3261 13.3335 12.5979 12.8067 13.5355 11.869C14.4732 10.9313 15 9.65958 15 8.3335V3.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 8.3335C15 9.65958 15.5268 10.9313 16.4645 11.869C17.4021 12.8067 18.6739 13.3335 20 13.3335C21.3261 13.3335 22.5979 12.8067 23.5355 11.869C24.4732 10.9313 25 9.65958 25 8.3335V3.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 8.3335C35 9.65958 34.4732 10.9313 33.5355 11.869C32.5979 12.8067 31.3261 13.3335 30 13.3335C28.6739 13.3335 27.4021 12.8067 26.4645 11.869C25.5268 10.9313 25 9.65958 25 8.3335V3.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ShoppingHouse