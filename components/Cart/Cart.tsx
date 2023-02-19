import Image from 'next/image'
import React from 'react'
import ActionClose from '../ActionsIcons/ActionClose'
import ActionHeart from '../ActionsIcons/ActionHeart'
interface CartProp {
    imageUrl:string
    imageAlt:string
    productTitle:string
    farmName:string
    freshness:string
    newPrice:string
    oldPrice:string
}
const generateCart = () => {
    return "flex flex-col items-start gap-[16px] pb-4 w-367px border-b"
}
const frame101 = () =>{
    return "w-full flex justify-between self-stretch"
}
const frame96 = () =>{
    return "flex flex-col items-start gap-[12px] w-100px"
}
const subFrame96 = () =>{
    return "flex flex-col items-start gap-[8px] order-1 w-70px"
}
const frame97 = () =>{
    return "flex flex-row items-center gap-[6px] w-full"
}
const iconText = () =>{
    return "text-xs font-[Open sans] text-textColor-input-text order-1"
}
const iconRed = () =>{
    return "text-textColor-icons-red w-3 h-3 order-none"
}
const contentAndButton = () =>{
    return "flex flex-col items-start gap-16px w-251px"
}
const frame70 = () =>{
    return "flex flex-col items-start gap-12px w-full order-none"
}
const subFrame70 = () =>{
    return "flex flex-col items-center w-full gap-[8px] self-stretch order-none"
}
const innerSubFrame70 = ()  =>{
    return "flex flex-col items-start gap-[8px] w-full order-none "
}
const part1 = () =>{
    return "flex flex-col items-start gap-[4px] w-full order-none"
}
const productTitleStyle = () =>{
    return "font-[Poppins] text-textColor-black-text text-menu-font font-medium order-none"
}
const group100 = () =>{
    return "flex flex-col gap-[6px] items-start w-full"
}
const frame86 = () =>{
    return "flex flex-row items-center w-full gap-[41px]"
}
const frame87 = () =>{
    return "flex flex-row items-center w-full gap-[14px]"
}
const rowBlackText = () =>{
    return "text-textColor-black-text font-[Open sans] text-xs order-1"
}
const part2 = () =>{
    return "flex flex-row items-center gap-[2px]"
}
const priceButton = () =>{
    return "flex flex-row w-full justify-between items-center"
}
const price = () =>{
    return "flex flex-col items-start w-full"
}
const Cart = ({imageUrl, imageAlt, productTitle, farmName, freshness, oldPrice, newPrice}:CartProp) => {
  return (
    <div className={`${generateCart()} border-Input`}>
        {/* frame 101 */}
        <div className={`${frame101()}`}>
            {/* frame 96 */}
            <div className={`${frame96()}`}>
                {/* Image */}
                <div className='w-100px h-67px'>
                    <Image className="order-none rounded-xl object-cover h-67px" src={imageUrl} alt={imageAlt} width={100} height={67}  />
                </div>
                {/* Sub frame 96 */}
                <div className={`${subFrame96()}`}>
                    {/* Frame 97 */}
                    <div className={`${frame97()}`}>
                        <ActionHeart className={`${iconRed()}`} />
                        <span className={`${iconText()}`}>Wishlist</span>
                    </div>
                    {/* Frame 97 */}
                    <div className={`${frame97()}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 1H2.75C2.19772 1 1.75 1.44772 1.75 2V4C1.75 4.55228 2.19772 5 2.75 5H4.75C5.30228 5 5.75 4.55228 5.75 4V2C5.75 1.44772 5.30228 1 4.75 1Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                            <path d="M4.75 7H2.75C2.19772 7 1.75 7.44772 1.75 8V10C1.75 10.5523 2.19772 11 2.75 11H4.75C5.30228 11 5.75 10.5523 5.75 10V8C5.75 7.44772 5.30228 7 4.75 7Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                            <path d="M10.25 8H7.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                            <path d="M9.25 10H7.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                            <path d="M9.25 4H7.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                            <path d="M10.25 2H7.25" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
                        </svg>
                        <span className={`${iconText()}`}>Compare</span>
                    </div>
                    {/* Frame 97 */}
                    <div className={`${frame97()}`}>
                        <ActionClose className='w-3 h-3 text-textColor-black-text' />
                        <span className={`${iconText()}`}>Remove</span>
                    </div>
                </div>
            </div>
            {/* Content and Button */}
            <div className={`${contentAndButton()}`}>
                {/* Frame 70 */}
                <div className={`${frame70()}`}>
                    {/* sub frame 70 */}
                    <div className={`${subFrame70()}`}>
                        {/* inner sub frame 70 */}
                        <div className={`${innerSubFrame70()}`}>
                            {/* part 1 */}
                            <div className={`${part1()}`}>
                                <span className={`${productTitleStyle()} `}>{productTitle}</span>
                                {/* Group 100 */} 
                                <div className={`${group100()}`}>
                                    {/* row 1 frame 86 */}
                                    <div className={`${frame86()}`}>
                                        <span className={`${iconText()}`}>Farm:</span>
                                        <span className={`${rowBlackText()}`}>{farmName}</span>
                                    </div>
                                    {/* row 2 frame 87 */}
                                    <div className={`${frame87()}`}>
                                        <span className={`${iconText()}`}>Freshness:</span>
                                        <span className={`${rowBlackText()}`}>{freshness}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Part 2 */}
                            <div className={`${part2()}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01978 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18599 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91385 2.05979 5.91984H6.05979L7.33312 2.12651Z" fill="#FDBC15"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01978 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18599 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91385 2.05979 5.91984H6.05979L7.33312 2.12651Z" fill="#FDBC15"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01978 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18599 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91385 2.05979 5.91984H6.05979L7.33312 2.12651Z" fill="#FDBC15"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01978 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18599 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91385 2.05979 5.91984H6.05979L7.33312 2.12651Z" fill="#FDBC15"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_46_11801)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33312 2.12651C7.37917 1.98048 7.47057 1.85293 7.59406 1.7624C7.71754 1.67186 7.86667 1.62305 8.01979 1.62305C8.1729 1.62305 8.32203 1.67186 8.44552 1.7624C8.569 1.85293 8.6604 1.98048 8.70645 2.12651L9.94645 5.93984H13.9465C14.105 5.93384 14.2612 5.97993 14.3912 6.07107C14.5211 6.1622 14.6176 6.29336 14.666 6.44452C14.7144 6.59567 14.7119 6.75851 14.659 6.90814C14.6062 7.05778 14.5057 7.18598 14.3731 7.27317L11.1265 9.62651L12.3665 13.4465C12.4155 13.592 12.4167 13.7494 12.37 13.8957C12.3232 14.0419 12.2309 14.1694 12.1066 14.2595C11.9823 14.3496 11.8324 14.3976 11.6788 14.3964C11.5253 14.3953 11.3761 14.3451 11.2531 14.2532L7.99979 11.8732L4.75312 14.2332C4.63012 14.3251 4.48096 14.3753 4.32741 14.3764C4.17387 14.3776 4.02398 14.3296 3.89963 14.2395C3.77529 14.1494 3.68301 14.0219 3.63626 13.8757C3.58951 13.7294 3.59075 13.572 3.63979 13.4265L4.87979 9.60651L1.63312 7.25317C1.50051 7.16599 1.40009 7.03778 1.3472 6.88814C1.29431 6.73851 1.29187 6.57567 1.34024 6.42452C1.38861 6.27336 1.48513 6.1422 1.61506 6.05107C1.745 5.95993 1.90119 5.91384 2.05979 5.91984H6.05979L7.33312 2.12651Z" stroke="#EBEBEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_46_11801">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Price and button */}
                <div className={`${priceButton()}`}>
                    {/* Price */}
                    <div className={`${price()}`}>
                        <span className='text-textColor-text-Green font-[Poppins] font-semibold text-footer-header-font'>{newPrice}</span>
                        <s className='font-[Poppins] text-xs font-semibold text-textColor-input-text'>{oldPrice}</s>
                    </div>
                    {/* Button */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
