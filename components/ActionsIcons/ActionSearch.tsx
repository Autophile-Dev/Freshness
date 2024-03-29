import React from 'react'
interface IconProp{
    className:string
}
const ActionSearch = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9833 28.5833C29.4266 28.5833 34.65 23.36 34.65 16.9167C34.65 10.4733 29.4266 5.25 22.9833 5.25C16.54 5.25 11.3167 10.4733 11.3167 16.9167C11.3167 23.36 16.54 28.5833 22.9833 28.5833Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M14.5335 25.5999L6.7168 33.4165" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionSearch