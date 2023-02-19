import React from 'react'
interface IconProp{
    className:string
}
const SportBasketball = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 36.6668C29.2048 36.6668 36.6667 29.2049 36.6667 20.0002C36.6667 10.7954 29.2048 3.3335 20 3.3335C10.7953 3.3335 3.33337 10.7954 3.33337 20.0002C3.33337 29.2049 10.7953 36.6668 20 36.6668Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33337 8.3335L31.6667 31.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.6667 8.3335L8.33337 31.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 3.3335C20 5.52219 19.5689 7.68946 18.7314 9.71155C17.8938 11.7336 16.6661 13.571 15.1185 15.1186C13.5708 16.6663 11.7335 17.8939 9.71143 18.7315C7.68934 19.5691 5.52207 20.0002 3.33337 20.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 36.6667C20 32.2464 21.7559 28.0072 24.8816 24.8816C28.0072 21.7559 32.2464 20 36.6667 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportBasketball