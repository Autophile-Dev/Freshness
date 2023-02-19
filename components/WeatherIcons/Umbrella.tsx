import React from 'react'
interface IconProp{
    className:string
}
const Umbrella = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6666 3.3335H20.3333C24.6651 3.3335 28.8196 5.05432 31.8827 8.11742C34.9458 11.1805 36.6666 15.335 36.6666 19.6668V19.6668C36.6666 19.7552 36.6315 19.84 36.569 19.9025C36.5064 19.965 36.4217 20.0002 36.3333 20.0002H3.66659C3.57818 20.0002 3.4934 19.965 3.43088 19.9025C3.36837 19.84 3.33325 19.7552 3.33325 19.6668C3.33325 15.335 5.05408 11.1805 8.11718 8.11742C11.1803 5.05432 15.3347 3.3335 19.6666 3.3335V3.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.9999 20V33.3333C19.9999 34.2174 19.6487 35.0652 19.0236 35.6904C18.3985 36.3155 17.5506 36.6667 16.6666 36.6667C15.7825 36.6667 14.9347 36.3155 14.3096 35.6904C13.6844 35.0652 13.3333 34.2174 13.3333 33.3333V31.6667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Umbrella