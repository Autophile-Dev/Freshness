import React from 'react'
interface IconProp{
    className:string
}
const SportGolf = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4165 31.5169V3.81686C18.4186 3.75769 18.4363 3.70013 18.468 3.65011C18.4997 3.60008 18.5441 3.5594 18.5968 3.53224C18.6494 3.50509 18.7083 3.49244 18.7674 3.49559C18.8265 3.49875 18.8837 3.51759 18.9332 3.5502L29.5998 11.1669C29.648 11.1988 29.6874 11.2421 29.7148 11.293C29.7421 11.3439 29.7564 11.4008 29.7564 11.4585C29.7564 11.5163 29.7421 11.5731 29.7148 11.624C29.6874 11.6749 29.648 11.7183 29.5998 11.7502L18.4165 16.5169" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.4163 28.1836C8.73297 30.0003 9.4163 35.0003 14.4663 36.1003H14.5996C17.1844 36.6251 19.8482 36.6251 22.433 36.1003V36.1003C27.433 35.0669 28.133 29.9336 23.4663 28.1836" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportGolf
