import React from 'react'
interface IconProp{
    className:string
}
const ActionDangerSimple = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6666 7.78337C21.6666 6.86289 20.9204 6.1167 19.9999 6.1167C19.0794 6.1167 18.3333 6.86289 18.3333 7.78337V24.45C18.3333 25.3705 19.0794 26.1167 19.9999 26.1167C20.9204 26.1167 21.6666 25.3705 21.6666 24.45V7.78337Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M20.0165 30.55H19.9999C18.7756 30.55 17.7832 31.5425 17.7832 32.7667V32.7834C17.7832 34.0076 18.7756 35.0001 19.9999 35.0001H20.0165C21.2408 35.0001 22.2332 34.0076 22.2332 32.7834V32.7667C22.2332 31.5425 21.2408 30.55 20.0165 30.55Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionDangerSimple