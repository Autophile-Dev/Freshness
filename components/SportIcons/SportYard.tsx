import React from 'react'
interface IconProp{
    className:string
}
const SportYard = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66663 5V35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.6666 5H33.3333L28.7499 12.6667C28.7175 12.7193 28.7003 12.7799 28.7003 12.8417C28.7003 12.9035 28.7175 12.9641 28.7499 13.0167L33.3333 20H13.6666C13.5782 20 13.4934 19.9649 13.4309 19.9024C13.3684 19.8399 13.3333 19.7551 13.3333 19.6667V5.33333C13.3333 5.24493 13.3684 5.16014 13.4309 5.09763C13.4934 5.03512 13.5782 5 13.6666 5V5Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportYard