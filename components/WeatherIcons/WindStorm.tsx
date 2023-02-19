import React from 'react'
interface IconProp{
    className: string
}
const WindStorm = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 20L17.5 28.3333H22.5L19.1667 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26.6666 28.3333C29.2066 28.4373 31.6844 27.5314 33.5583 25.8137C35.4322 24.0959 36.5498 21.7061 36.6666 19.1666C36.5978 17.0383 35.8058 14.9969 34.4212 13.3791C33.0366 11.7612 31.1421 10.6634 29.0499 10.2666C28.1654 8.64676 26.8545 7.29972 25.2593 6.37139C23.6641 5.44305 21.8453 4.9688 19.9999 4.99998C18.1545 4.9688 16.3357 5.44305 14.7405 6.37139C13.1453 7.29972 11.8345 8.64676 10.9499 10.2666C8.85775 10.6634 6.96321 11.7612 5.57862 13.3791C4.19404 14.9969 3.40206 17.0383 3.33325 19.1666C3.45008 21.7061 4.56762 24.0959 6.44154 25.8137C8.31546 27.5314 10.7933 28.4373 13.3333 28.3333" 
        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default WindStorm