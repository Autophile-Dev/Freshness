import React from 'react'
interface IconProp{
    className:string
}
const RealEstateStairs = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7999 3.50022L3.44995 16.5669C3.41333 16.601 3.38409 16.6423 3.36402 16.6881C3.34396 16.734 3.3335 16.7835 3.33328 16.8336L3.19995 33.1002C3.19995 33.9843 3.55114 34.8321 4.17626 35.4572C4.80138 36.0824 5.64923 36.4336 6.53328 36.4336L33.3333 36.6669C34.2173 36.6669 35.0652 36.3157 35.6903 35.6906C36.3154 35.0655 36.6666 34.2176 36.6666 33.3336V16.8336C36.6654 16.782 36.6528 16.7314 36.6298 16.6853C36.6067 16.6392 36.5738 16.5988 36.5333 16.5669L20.1999 3.50022C20.1449 3.45103 20.0737 3.42383 19.9999 3.42383C19.9262 3.42383 19.855 3.45103 19.7999 3.50022V3.50022Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36.6667 18.3335H21.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33325 18.3335H9.44992V24.4502H15.5499V30.5502H21.6666V36.1002" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default RealEstateStairs