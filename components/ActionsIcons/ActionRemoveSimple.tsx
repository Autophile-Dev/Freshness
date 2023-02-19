import React from 'react'
interface IconProp{
    className:string
}
const ActionRemoveSimple = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6666 20H8.33325" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionRemoveSimple