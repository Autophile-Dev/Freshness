import React from 'react'
interface IconProp{
    className:string
}
const RealEstateWater = ({className} : IconProp) => {
  return (
        <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.0001 13.3335H20.0001C18.1591 13.3335 16.6667 14.8259 16.6667 16.6668V21.6668C16.6667 23.5078 18.1591 25.0002 20.0001 25.0002H25.0001C26.841 25.0002 28.3334 23.5078 28.3334 21.6668V16.6668C28.3334 14.8259 26.841 13.3335 25.0001 13.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.3335 16.667H33.0002C33.0886 16.667 33.1734 16.7021 33.2359 16.7646C33.2984 16.8271 33.3335 16.9119 33.3335 17.0003V21.3337C33.3335 21.4221 33.2984 21.5069 33.2359 21.5694C33.1734 21.6319 33.0886 21.667 33.0002 21.667H28.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6667 15H10.0001C9.11603 15 8.26818 15.3512 7.64306 15.9763C7.01794 16.6014 6.66675 17.4493 6.66675 18.3333V24.6667C6.66675 24.7551 6.70187 24.8399 6.76438 24.9024C6.82689 24.9649 6.91168 25 7.00008 25H11.3334C11.4218 25 11.5066 24.9649 11.5691 24.9024C11.6316 24.8399 11.6667 24.7551 11.6667 24.6667V22C11.6667 21.9116 11.7019 21.8268 11.7644 21.7643C11.8269 21.7018 11.9117 21.6667 12.0001 21.6667H16.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 28.3335V31.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.3335 8.3335V13.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3335 8.3335H28.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
  )
}

export default RealEstateWater
