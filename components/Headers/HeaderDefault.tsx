import Link from 'next/link'
import React from 'react'
import ActionUser from '../ActionsIcons/ActionUser'
import Brand from '../Brand'
import Search from '../Search'
const defaultHeadGenerate = () =>{
    return "flex w-full flex-col items-center px-[80px]  bg-backgrounds-C1/J-header-default"
}
const generateFrame71 = ()=>{
    return "py-4 px-[30px] sm:px-[80px]"
}
const group1 = () => {
    return "flex flex-col md:flex-row justify-center md:text-left text-center items-center gap-[33px]"
}
const group2 = () => {
    return "flex flex-col md:mt-0 mt-2 md:flex-row md:text-right justify-center md:pt-0 pt-2 text-center items-center gap-[38px]"
}
const labelDesign = () => {
    return "text-xs font-[Open Sans] text-textColor-text-Green"
}
const generateFrame70 = () =>{
    return "flex w-full flex-col px-[80px] py-12 xl:py-20 gap-2.5"
}
const generateFrame49 = () =>{
    return "flex flex-col w-full items-center xl:flex-row justify-between"
}
const group47 = () =>{
    return "flex flex-row items-center xl:mt-0 mt-3 gap-9"
}
const HeaderDefault = () => {
  return (
    <div className='w-full'>
        <div className='container mx-auto'>
        <header className={`${defaultHeadGenerate()}`}>
        {/* Frame 71 */}
        <div className='container  mx-auto'>
            <div className={`${generateFrame71()}`}>
                {/* Group 1 */}
                <div className='border-b flex xl:flex-row xl:gap-0 gap-[5px]   flex-col   py-4 justify-between w-full '>
                <div className={`${group1()}`}>
                    <label className={`${labelDesign()}`} htmlFor="">Chat with us</label>
                    <Link className="text-xs text-textColor-black-text" href={'tel:+420  666 666 666'}>+420  666 666 666</Link>
                    <Link className="text-xs text-textColor-black-text" href={'mailto:info@freshnesecom.com'}>info@freshnesecom.com</Link>
                </div>
                {/* Group 2 */}
                <div className={`${group2()}`}>
                    <label className={`${labelDesign()}`} htmlFor="">Blog</label>
                    <label className={`${labelDesign()}`} htmlFor="">About us</label>
                    <label className={`${labelDesign()}`} htmlFor="">Careers</label>
                </div>
                </div>
            </div>
            {/* Frame 70 */}
            <div className={`${generateFrame70()}`}>
                {/* Frame 49 */}
                <div className={`${generateFrame49()}`}>
                    <Brand />
                    <Search type='Advanced' placeholder='Search Product with title...........'/>
                    {/* Group 47 */}
                    <div className={`${group47()}`}>
                        <ActionUser className="w-6  h-6"/>
                        <div className='relative'>
                            <svg className='relative' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.89 20.8499H6.11004C5.79236 20.8502 5.48375 20.7439 5.23358 20.5481C4.9834 20.3523 4.8061 20.0783 4.73004 19.7699L2.08004 9.15986C2.05418 9.05657 2.05222 8.94875 2.07432 8.84459C2.09642 8.74043 2.14199 8.64268 2.20756 8.55879C2.27313 8.4749 2.35698 8.40707 2.45272 8.36047C2.54845 8.31387 2.65356 8.28972 2.76004 8.28986H21.24C21.3465 8.28972 21.4516 8.31387 21.5474 8.36047C21.6431 8.40707 21.7269 8.4749 21.7925 8.55879C21.8581 8.64268 21.9037 8.74043 21.9258 8.84459C21.9479 8.94875 21.9459 9.05657 21.92 9.15986L19.27 19.7699C19.194 20.0783 19.0167 20.3523 18.7665 20.5481C18.5163 20.7439 18.2077 20.8502 17.89 20.8499V20.8499Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.7999 3.14993L6.8999 8.28993" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.8804 3.14993L16.7904 8.28993" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                                <div className='absolute top-[13px] shadow-sm shadow-slate-400 right-[14px] w-4 h-4 rounded-full bg-backgrounds-counter-color'>
                                    <label className=' absolute left-[4px] font-[Poppins] text-xs font-semibold text-textColor-white-text' htmlFor="">4</label>
                                </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
        </div>
    </div>
    
  )
}

export default HeaderDefault