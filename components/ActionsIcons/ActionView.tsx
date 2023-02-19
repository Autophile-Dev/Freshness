import React from 'react'
interface IconProp{
    className:string
}
const ActionView = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.6666 20.1998L32.3333 24.9998C30.7711 26.7185 28.8671 28.0916 26.7432 29.0313C24.6193 29.971 22.3224 30.4564 19.9999 30.4564C17.6774 30.4564 15.3806 29.971 13.2567 29.0313C11.1328 28.0916 9.2287 26.7185 7.66659 24.9998L3.33325 20.1998L7.19992 15.5665C8.76409 13.6908 10.7214 12.1818 12.9333 11.1463C15.1452 10.1107 17.5576 9.57397 19.9999 9.57397C22.4422 9.57397 24.8547 10.1107 27.0666 11.1463C29.2785 12.1818 31.2358 13.6908 32.7999 15.5665L36.6666 20.1998Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.15 23.7664C22.5432 23.7664 24.4833 21.901 24.4833 19.5998C24.4833 17.2986 22.5432 15.4331 20.15 15.4331C17.7568 15.4331 15.8167 17.2986 15.8167 19.5998C15.8167 21.901 17.7568 23.7664 20.15 23.7664Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
  )
}

export default ActionView