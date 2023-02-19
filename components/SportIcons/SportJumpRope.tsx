import React from 'react'
interface IconProp{
    className:string
}
const SportJumpRope = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3334 26.6668C13.3334 24.8259 11.841 23.3335 10.0001 23.3335C8.15913 23.3335 6.66675 24.8259 6.66675 26.6668V33.3335C6.66675 35.1744 8.15913 36.6668 10.0001 36.6668C11.841 36.6668 13.3334 35.1744 13.3334 33.3335V26.6668Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.3334 6.66683C33.3334 4.82588 31.841 3.3335 30.0001 3.3335C28.1591 3.3335 26.6667 4.82588 26.6667 6.66683V13.3335C26.6667 15.1744 28.1591 16.6668 30.0001 16.6668C31.841 16.6668 33.3334 15.1744 33.3334 13.3335V6.66683Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 23.3335V13.3335C10 12.0074 10.5268 10.7356 11.4645 9.79796C12.4021 8.86028 13.6739 8.3335 15 8.3335V8.3335C16.3261 8.3335 17.5979 8.86028 18.5355 9.79796C19.4732 10.7356 20 12.0074 20 13.3335V26.6668C20 27.9929 20.5268 29.2647 21.4645 30.2024C22.4021 31.14 23.6739 31.6668 25 31.6668C26.3261 31.6668 27.5979 31.14 28.5355 30.2024C29.4732 29.2647 30 27.9929 30 26.6668V16.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportJumpRope
