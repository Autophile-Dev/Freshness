import React from 'react'
interface IconProp{
    className:string
}
const ActionCalender = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.5163 15.0334H3.83301" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M10.0996 7.98335V4.93335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M30.3169 7.98335V4.93335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M33.3333 8.3335H6.66659C4.82564 8.3335 3.33325 9.82588 3.33325 11.6668V31.6668C3.33325 33.5078 4.82564 35.0002 6.66659 35.0002H33.3333C35.1742 35.0002 36.6666 33.5078 36.6666 31.6668V11.6668C36.6666 9.82588 35.1742 8.3335 33.3333 8.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M12.2668 20.0166H8.93343C8.47319 20.0166 8.1001 20.3897 8.1001 20.8499V24.1833C8.1001 24.6435 8.47319 25.0166 8.93343 25.0166H12.2668C12.727 25.0166 13.1001 24.6435 13.1001 24.1833V20.8499C13.1001 20.3897 12.727 20.0166 12.2668 20.0166Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M21.8503 20.0166H18.5169C18.0567 20.0166 17.6836 20.3897 17.6836 20.8499V24.1833C17.6836 24.6435 18.0567 25.0166 18.5169 25.0166H21.8503C22.3105 25.0166 22.6836 24.6435 22.6836 24.1833V20.8499C22.6836 20.3897 22.3105 20.0166 21.8503 20.0166Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ActionCalender