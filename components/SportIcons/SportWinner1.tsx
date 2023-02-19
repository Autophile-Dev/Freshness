import React from 'react'
interface IconProp{
    className:string
}
const SportWinner1 = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3333 10H24.6667C24.7551 10 24.8399 10.0351 24.9024 10.0976C24.9649 10.1601 25 10.2449 25 10.3333V30H15V10.3333C15 10.2449 15.0351 10.1601 15.0976 10.0976C15.1601 10.0351 15.2449 10 15.3333 10V10Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 30H5.33333C5.24493 30 5.16014 29.9649 5.09763 29.9024C5.03512 29.8399 5 29.7551 5 29.6667L5 18.6667C5 18.5783 5.03512 18.4935 5.09763 18.431C5.16014 18.3685 5.24493 18.3333 5.33333 18.3333H15L15 30Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34.6667 30H25V21.6667H34.6667C34.7551 21.6667 34.8399 21.7018 34.9024 21.7643C34.9649 21.8268 35 21.9116 35 22V29.6667C35 29.7551 34.9649 29.8399 34.9024 29.9024C34.8399 29.9649 34.7551 30 34.6667 30V30Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportWinner1