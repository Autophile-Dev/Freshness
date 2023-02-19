import React from 'react'
interface IconProp{
    className:string
}
const ActionThumbsUp = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3167 15.3167H21.9833L20 9.13336C19.6884 8.20015 19.0908 7.38878 18.292 6.81438C17.4932 6.23998 16.5339 5.93172 15.55 5.93336H14.6833C13.4412 5.93336 12.25 6.42678 11.3717 7.30507C10.4934 8.18337 10 9.37459 10 10.6167V29.3834C10 29.9998 10.1217 30.6102 10.3581 31.1794C10.5945 31.7487 10.9409 32.2658 11.3776 32.7009C11.8143 33.136 12.3325 33.4806 12.9026 33.715C13.4728 33.9494 14.0836 34.0689 14.7 34.0667H26.1667C27.1823 34.0715 28.1716 33.7437 28.9833 33.1334L33.1333 30C33.7152 29.5637 34.187 28.9973 34.5111 28.3462C34.8352 27.6951 35.0026 26.9773 35 26.25V20C35 18.7579 34.5066 17.5667 33.6283 16.6884C32.75 15.8101 31.5588 15.3167 30.3167 15.3167V15.3167Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.4165 15.9668V31.7001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    
  )
}

export default ActionThumbsUp