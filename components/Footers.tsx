import React from 'react'
import Link from 'next/link'
type Variant = "White" | "Dark"
type Type = "Simple" | "Default"
interface FooterProp{
    variant:Variant
    type:Type
    label?:string
    className?:string
}
const generateType = (type:Type): string =>{
    switch(type){
        case "Simple":
            return "flex flex-col items-center lg:items-start  justify-center py-footer-column px-[80px] sm:px-footer-row gap-[2px] sm:gap-[48px]  w-full  h-simple-footer "
        case "Default":
            return "flex flex-col items-center lg:items-start  justify-center py-footer-column px-[2px] sm:px-footer-row gap-[2px] sm:gap-[48px]  w-full   "
        default:
            return "flex flex-row"
    }
}
const generateGroup62 = () =>{
    return "flex sm:flex-row flex-col  text-center sm:text-left w-full  lg:justify-between"
}
const generateGroup40 = () => {
    return "flex flex-col   xl:w-group-40"
}
const generateGroup41 = () => {
    return "flex flex-col  xl:w-group-41"
}
const generateGroup42 = () => {
    return "flex flex-col  xl:w-group-42"
}
const generateGroup43 = () => {
    return "flex flex-col  xl:w-group-43"
}
const generateHeader = (variant:Variant) : string => {
    switch(variant){
        case "White":
            return "font-bold text-textColor-black-text font-[Poppins]  text-footer-header-font"
        case "Dark":
            return "font-bold text-textColor-white-text font-[Poppins]  text-footer-header-font"
        default:
            return "text-red"
    }
}
const generateVariant = (variant:Variant) : string => {
    switch(variant){
        case "White":
            return "bg-backgrounds-C1/J-footer-white"
        case "Dark":
            return "bg-backgrounds-C1/A-footer-dark"
        default:
            return "bg-red"
    }
}
const generateLabel = (variant:Variant) : string => {
    switch(variant){
        case "White":
            return "text-textColor-black-text font-[Open Sans]  text-copyright text-start sm:text-footer-content-1"
        case "Dark":
            return "text-textColor-white-text font-[Open Sans]  text-copyright text-start sm:text-footer-content-1"
    }
}
const generateFooterNavigation = () => {
    return "text-textColor-footer-nav-text mt-12px text-xs sm:text-footer-content-1  font-[Open Sans] "
}
const Footers = ({variant, type, label = '', className = ''}:FooterProp) => {
if(type === "Default"){
  return (
    <footer className='w-full'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center pt-3 md:pt-footer-column w-full box-border'>
                <div className={`${generateType(type)} ${generateVariant(variant)}`}>
                    <div className='flex-row flex w-full  flex-wrap px-[80px]'>
                        {/* Group 62 */}
                        <div className={`${generateGroup62()} px-[32px]`}>
                            <div className='flex flex-col lg:flex-row  items-center lg:items-start lg:gap-[220px] w-full'>
                            {/* Group 40 */}
                                <div className={`${generateGroup40()}`}>
                                {/* Header of Footer */}
                                    <h1 className={`${generateHeader(variant)}`}>Get in touch</h1>
                                    {/* Navigation footer */}
                                    <Link href="/" className={`${generateFooterNavigation()}`}>About Us</Link>
                                    <Link href="/" className={`${generateFooterNavigation()}`}>Careers</Link>
                                    <Link href="/" className={`${generateFooterNavigation()}`}>Press Releases</Link>
                                    <Link href="/" className={`${generateFooterNavigation()}`}>Blog</Link>
                                </div>
                                {/* Group 41 */}
                                <div className={`${generateGroup41()} mt-5 lg:mt-0`}>
                                {/* Header of Footer */}
                                    <h1 className={`${generateHeader(variant)}`}>Connections</h1>
                                    {/* Navigation footer */}
                                    <a href="" className={`${generateFooterNavigation()}`}>Facebook</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Twitter</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Instagram</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Youtube</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>LinkedIn</a>
                                </div>
                            </div>
                    
                            {/* Group 42 */}
                            <div className='flex flex-col sm:mt-0 mt-12  lg:flex-row w-full items-center lg:items-start lg:gap-[220px]'>
                                <div className={`${generateGroup42()}`}>
                                {/* Header of Footer */}
                                    <h1 className={`${generateHeader(variant)}`}>Earnings</h1>
                                    {/* Navigation footer */}
                                    <a href="" className={`${generateFooterNavigation()}`}>Become an Affiliate</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Advertise your product</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Sell on Market</a>
                                </div>
                                {/* Group 43 */}
                                <div className={`${generateGroup43()} lg:mt-0 mt-12`}>
                                {/* Header of Footer */}
                                    <h1 className={`${generateHeader(variant)}`}>Account</h1>
                                    {/* Navigation footer */}
                                    <a href="" className={`${generateFooterNavigation()}`}>Your Account</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Returns Centre</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>100% purchase protection</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Chat with us</a>
                                    <a href="" className={`${generateFooterNavigation()}`}>Help</a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className='lg:flex-row flex flex-col items-center lg:items-start mt-2 md:mt-0  justify-center  md:justify-start w-full px-3 sm:px-[80px]'>
                        <label htmlFor="" className={`${generateLabel(variant)} px-[32px] `}>{label}</label>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
  )}
  else{
    return(
    <div className='w-full'>
        <div className='mx-auto container'>
            <div className={`${generateType(type)} ${generateVariant(variant)} py-footer-column`}>
                <div className='px-[38px]'>
                    <label htmlFor="" className={`${generateLabel(variant)} px-[80px]`}>{label}</label>
                </div>
            </div> 
        </div>
    </div>
    
    )
  }
}
export default Footers