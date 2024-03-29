import React from 'react'
interface IconProp{
    className:string
}
const Funnel = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3333 12.9167H6.66659L3.33325 5H36.6666L33.3333 12.9167Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33325 5H36.6666L33.3333 12.9167" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3333 24.8H11.6666L8.33325 16.8833H31.6666L28.3333 24.8Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3333 36.6667H16.6666L13.3333 28.75H26.6666L23.3333 36.6667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Funnel