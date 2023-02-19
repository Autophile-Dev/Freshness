import React from 'react'
interface IconProp{
    className:string
}
const ActionCloseSimple = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5997 30.5999L9.39966 9.3999" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M30.5997 9.3999L9.39966 30.5999" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionCloseSimple