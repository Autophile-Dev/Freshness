import React from 'react'
interface IconProp{
    className:string
}
const SportFootball = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9999 36.6668C29.2047 36.6668 36.6666 29.2049 36.6666 20.0002C36.6666 10.7954 29.2047 3.3335 19.9999 3.3335C10.7952 3.3335 3.33325 10.7954 3.33325 20.0002C3.33325 29.2049 10.7952 36.6668 19.9999 36.6668Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.21631 8.2168C11.3408 11.3423 13.0961 15.5807 13.0961 20.0001C13.0961 24.4195 11.3408 28.658 8.21631 31.7835" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.7836 31.7835C28.6591 28.658 26.9038 24.4195 26.9038 20.0001C26.9038 15.5807 28.6591 11.3423 31.7836 8.2168" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportFootball
