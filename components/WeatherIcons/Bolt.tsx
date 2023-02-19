import React from 'react'
interface IconProp{
    className:string
}
const Bolt = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1667 5L9.16675 21.6667H17.5001L9.16675 35L32.5001 16.6667H19.1667L30.8334 5H19.1667Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Bolt