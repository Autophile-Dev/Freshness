import React from 'react'
interface IconProp{
    className:string
}
const ActionSelected = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.683 36.45C28.8878 36.45 36.3497 28.9881 36.3497 19.7834C36.3497 10.5786 28.8878 3.1167 19.683 3.1167C10.4783 3.1167 3.01636 10.5786 3.01636 19.7834C3.01636 28.9881 10.4783 36.45 19.683 36.45Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M20.0001 28.3332C24.6025 28.3332 28.3334 24.6022 28.3334 19.9998C28.3334 15.3975 24.6025 11.6665 20.0001 11.6665C15.3977 11.6665 11.6667 15.3975 11.6667 19.9998C11.6667 24.6022 15.3977 28.3332 20.0001 28.3332Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionSelected