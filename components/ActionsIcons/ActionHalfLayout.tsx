import React from 'react'
interface IconProp{
    className:string
}
const ActionHalfLayout = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3.33325V36.6666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.0002 6.6665H11.1668C10.2828 6.6665 9.43493 7.01769 8.80981 7.64281C8.18469 8.26794 7.8335 9.11578 7.8335 9.99984V29.9998C7.8335 30.8839 8.18469 31.7317 8.80981 32.3569C9.43493 32.982 10.2828 33.3332 11.1668 33.3332H20.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.1667 33.3332H30.0001C30.8841 33.3332 31.732 32.982 32.3571 32.3569C32.9822 31.7317 33.3334 30.8839 33.3334 29.9998V9.99984C33.3334 9.11578 32.9822 8.26794 32.3571 7.64281C31.732 7.01769 30.8841 6.6665 30.0001 6.6665H21.1667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 4"/>
    </svg>
    
  )
}

export default ActionHalfLayout