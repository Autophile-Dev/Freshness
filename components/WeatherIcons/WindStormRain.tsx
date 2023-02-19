import React from 'react'
interface IconProp{
    className:string
}
const WindStormRain = ({className = ' '}:IconProp) => {
  return (
    <svg  className={`${className}`} viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg">
      <path d="M32.5 20L27.5 28.3333H32.5L28.3333 36.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36.1333 22.1333C36.4877 21.1845 36.6684 20.1795 36.6666 19.1666C36.5978 17.0383 35.8058 14.9969 34.4212 13.3791C33.0366 11.7612 31.1421 10.6634 29.0499 10.2666C28.1654 8.64676 26.8545 7.29972 25.2593 6.37139C23.6641 5.44305 21.8453 4.9688 19.9999 4.99998C18.1545 4.9688 16.3357 5.44305 14.7405 6.37139C13.1453 7.29972 11.8345 8.64676 10.9499 10.2666C8.85775 10.6634 6.96321 11.7612 5.57862 13.3791C4.19404 14.9969 3.40206 17.0383 3.33325 19.1666C3.45008 21.7061 4.56762 24.0959 6.44154 25.8137C8.31546 27.5314 10.7933 28.4373 13.3333 28.3333C14.6195 28.3317 15.8951 28.1002 17.0999 27.65C18.0007 28.099 18.9934 28.3328 19.9999 28.3328C21.0064 28.3328 21.9992 28.099 22.8999 27.65" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.9999 33.3335L18.3333 36.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.3332 33.3335L11.6665 36.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.66667 33.3335L5 36.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default WindStormRain