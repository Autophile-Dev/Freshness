import React from 'react'
interface IconProp{
    className:string
}
const ShoppingWallet = ({className}:IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3333 10H6.66659C4.82564 10 3.33325 11.4924 3.33325 13.3333V33.3333C3.33325 35.1743 4.82564 36.6667 6.66659 36.6667H33.3333C35.1742 36.6667 36.6666 35.1743 36.6666 33.3333V13.3333C36.6666 11.4924 35.1742 10 33.3333 10Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.9998 9.99991V7.76658C30.0016 7.24956 29.8832 6.7392 29.6538 6.27585C29.4244 5.8125 29.0904 5.40886 28.6781 5.09683C28.2659 4.78481 27.7867 4.57297 27.2785 4.47805C26.7702 4.38312 26.2469 4.40773 25.7498 4.54991L4.7998 10.5666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36.6665 19.3999H30.2998C29.3362 19.3999 28.4121 19.7827 27.7307 20.4641C27.0493 21.1455 26.6665 22.0696 26.6665 23.0332C26.6709 23.9955 27.0551 24.9171 27.7355 25.5975C28.416 26.278 29.3376 26.6622 30.2998 26.6666H36.6665" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ShoppingWallet