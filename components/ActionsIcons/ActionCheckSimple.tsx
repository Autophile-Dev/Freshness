import React from 'react'
interface IconProp{
    className:string
}
const ActionCheckSimple = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5835 19.3999L15.9335 26.7333L31.4168 13.2666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionCheckSimple