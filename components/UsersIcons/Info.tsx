import React from 'react'
interface IconProp{
    className:string
}
const Info = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 35.0002L6.31667 30.2002C8.5 22.3168 14.25 18.3335 20 18.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 18.3C24.6023 18.3 28.3333 14.569 28.3333 9.96663C28.3333 5.36426 24.6023 1.6333 20 1.6333C15.3976 1.6333 11.6666 5.36426 11.6666 9.96663C11.6666 14.569 15.3976 18.3 20 18.3Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M28.3333 38.3332C32.9357 38.3332 36.6667 34.6022 36.6667 29.9998C36.6667 25.3975 32.9357 21.6665 28.3333 21.6665C23.731 21.6665 20 25.3975 20 29.9998C20 34.6022 23.731 38.3332 28.3333 38.3332Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3334 28.8999V34.1832" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3334 26.0001V25.8501" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Info