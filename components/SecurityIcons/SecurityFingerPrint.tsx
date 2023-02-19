import React from 'react'
interface IconProp{
    className:string
}
const SecurityFingerPrint = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.6665 27.6665V29.9998" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33325 30.0002V20.0002C3.33325 15.5799 5.0892 11.3407 8.21481 8.21505C11.3404 5.08944 15.5796 3.3335 19.9999 3.3335V3.3335C22.1886 3.3335 24.3559 3.76459 26.378 4.60217C28.4001 5.43975 30.2374 6.66741 31.785 8.21505C33.3327 9.76269 34.5603 11.6 35.3979 13.6221C36.2355 15.6442 36.6666 17.8115 36.6666 20.0002V22.5835" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6665 27.1998V19.9998C11.6665 17.7897 12.5445 15.6701 14.1073 14.1073C15.6701 12.5445 17.7897 11.6665 19.9998 11.6665V11.6665C22.21 11.6665 24.3296 12.5445 25.8924 14.1073C27.4552 15.6701 28.3332 17.7897 28.3332 19.9998V34.9998" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6665 35V31.3833" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 18.3335V26.6668" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 31.6665V36.6665" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SecurityFingerPrint
