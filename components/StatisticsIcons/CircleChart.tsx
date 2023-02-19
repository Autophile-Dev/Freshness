import React from 'react'
interface IconProp{
    className:string
}
const CircleChart = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 3.3335C16.7036 3.3335 13.4812 4.31098 10.7404 6.14234C7.9996 7.97369 5.86339 10.5767 4.60193 13.6221C3.34047 16.6675 3.01042 20.0187 3.6535 23.2517C4.29659 26.4847 5.88394 29.4544 8.21481 31.7853C10.5457 34.1162 13.5154 35.7035 16.7484 36.3466C19.9814 36.9897 23.3325 36.6596 26.378 35.3982C29.4234 34.1367 32.0264 32.0005 33.8577 29.2597C35.6891 26.5188 36.6666 23.2965 36.6666 20.0002H19.9999V3.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 15.0001H35.9C35.095 12.4399 33.6836 10.1119 31.7859 8.21421C29.8882 6.31649 27.5602 4.90511 25 4.1001V15.0001Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default CircleChart