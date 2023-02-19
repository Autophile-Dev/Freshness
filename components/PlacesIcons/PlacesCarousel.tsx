import React from 'react'
interface IconProp{
    className:string
}
const PlacesCarousel = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0001 10.0002C21.841 10.0002 23.3334 8.50778 23.3334 6.66683C23.3334 4.82588 21.841 3.3335 20.0001 3.3335C18.1591 3.3335 16.6667 4.82588 16.6667 6.66683C16.6667 8.50778 18.1591 10.0002 20.0001 10.0002Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.6666 16.6667C33.5075 16.6667 34.9999 15.1743 34.9999 13.3333C34.9999 11.4924 33.5075 10 31.6666 10C29.8256 10 28.3333 11.4924 28.3333 13.3333C28.3333 15.1743 29.8256 16.6667 31.6666 16.6667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.6666 30.0002C33.5075 30.0002 34.9999 28.5078 34.9999 26.6668C34.9999 24.8259 33.5075 23.3335 31.6666 23.3335C29.8256 23.3335 28.3333 24.8259 28.3333 26.6668C28.3333 28.5078 29.8256 30.0002 31.6666 30.0002Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33333 30.0002C10.1743 30.0002 11.6667 28.5078 11.6667 26.6668C11.6667 24.8259 10.1743 23.3335 8.33333 23.3335C6.49238 23.3335 5 24.8259 5 26.6668C5 28.5078 6.49238 30.0002 8.33333 30.0002Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33333 16.6667C10.1743 16.6667 11.6667 15.1743 11.6667 13.3333C11.6667 11.4924 10.1743 10 8.33333 10C6.49238 10 5 11.4924 5 13.3333C5 15.1743 6.49238 16.6667 8.33333 16.6667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3333 36.6667L19.9999 20L26.6666 36.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default PlacesCarousel