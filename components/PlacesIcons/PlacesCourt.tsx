import React from 'react'
interface IconProp{
    className:string
}
const PlacesCourt = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8164 3.45L5.91643 12.7167C5.85421 12.7552 5.80639 12.8131 5.78036 12.8815C5.75432 12.9499 5.75151 13.0249 5.77237 13.0951C5.79322 13.1652 5.83658 13.2266 5.89575 13.2696C5.95492 13.3127 6.02661 13.3351 6.09977 13.3333H33.8998C33.9729 13.3351 34.0446 13.3127 34.1038 13.2696C34.163 13.2266 34.2063 13.1652 34.2272 13.0951C34.248 13.0249 34.2452 12.9499 34.2192 12.8815C34.1931 12.8131 34.1453 12.7552 34.0831 12.7167L20.1831 3.45C20.1274 3.41782 20.0641 3.40088 19.9998 3.40088C19.9354 3.40088 19.8722 3.41782 19.8164 3.45V3.45Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 35H35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 18.3335V30.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.8333 18.3335V30.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.1667 18.3335V30.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.5 18.3335V30.0002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default PlacesCourt