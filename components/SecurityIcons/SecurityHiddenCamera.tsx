import React from 'react'
interface IconProp{
    className:string
}
const SecurityHiddenCamera = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0001 30.0002C27.3639 30.0002 33.3334 24.0306 33.3334 16.6668C33.3334 9.30303 27.3639 3.3335 20.0001 3.3335C12.6363 3.3335 6.66675 9.30303 6.66675 16.6668C6.66675 24.0306 12.6363 30.0002 20.0001 30.0002Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.0001 20.0002C21.841 20.0002 23.3334 18.5078 23.3334 16.6668C23.3334 14.8259 21.841 13.3335 20.0001 13.3335C18.1591 13.3335 16.6667 14.8259 16.6667 16.6668C16.6667 18.5078 18.1591 20.0002 20.0001 20.0002Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6667 16.667H6.66675" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.3335 16.667H33.3335" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5003 26.0171L8.3336 32.2004C8.15343 32.6984 8.09451 33.2322 8.16172 33.7575C8.22893 34.2828 8.42035 34.7845 8.7201 35.2211C9.01985 35.6577 9.41931 36.0166 9.8854 36.2681C10.3515 36.5195 10.8708 36.6563 11.4003 36.6671H28.7169C29.2436 36.6649 29.7622 36.538 30.2304 36.2967C30.6985 36.0555 31.1028 35.7067 31.4102 35.279C31.7175 34.8513 31.9191 34.3569 31.9985 33.8363C32.0779 33.3156 32.0328 32.7836 31.8669 32.2838L30.0003 26.6671" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SecurityHiddenCamera