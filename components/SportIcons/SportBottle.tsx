import React from 'react'
interface IconProp{
    className:string
}
const SportBottle = ({className} : IconProp) => {
  return (
    <svg className={`${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2835 13.3335C13.0552 13.4356 11.9168 14.0178 11.1149 14.9538C10.3131 15.8898 9.91255 17.1041 10.0001 18.3335V36.3335C9.9954 36.4148 10.0222 36.4949 10.075 36.557C10.1278 36.619 10.2024 36.6584 10.2835 36.6668H29.7168C29.7978 36.6584 29.8725 36.619 29.9253 36.557C29.978 36.4949 30.0049 36.4148 30.0001 36.3335V18.3335C30.0877 17.1041 29.6872 15.8898 28.8853 14.9538C28.0835 14.0178 26.945 13.4356 25.7168 13.3335V13.3335V6.66683C25.7721 5.84616 25.5025 5.03664 24.9662 4.413C24.4299 3.78937 23.6698 3.40164 22.8501 3.3335H17.1501C16.3304 3.40164 15.5704 3.78937 15.0341 4.413C14.4977 5.03664 14.2281 5.84616 14.2835 6.66683V13.3335Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.2834 10H25.7168" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SportBottle