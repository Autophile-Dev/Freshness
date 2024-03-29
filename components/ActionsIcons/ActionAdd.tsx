import React from 'react'
interface IconProp{
    className:string
}
const ActionAdd = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 19.9999C36.6667 10.7952 29.2048 3.33325 20 3.33325C10.7953 3.33325 3.33337 10.7952 3.33337 19.9999C3.33337 29.2047 10.7953 36.6666 20 36.6666Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M28.6503 20.2166H11.9836" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M20.317 28.5497V11.8831" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionAdd