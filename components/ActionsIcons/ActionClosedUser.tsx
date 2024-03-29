import React from 'react'
interface IconProp{
    className:string
}
const ActionClosedUser = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3334 9.46662L36.1 1.69995" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M1.59998 36.1999L17.95 19.8499" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M20 20C25.7333 20 31.45 24.0167 33.6167 31.9167L35 36.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 19.9667C24.6023 19.9667 28.3333 16.2358 28.3333 11.6334C28.3333 7.03101 24.6023 3.30005 20 3.30005C15.3976 3.30005 11.6666 7.03101 11.6666 11.6334C11.6666 16.2358 15.3976 19.9667 20 19.9667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionClosedUser