import React from 'react'
import Checkboxes from './Checkboxes'
import ChevronTopBottom from './ChevronIcons/ChevronTopBottom'
type Style = "WithText" | "WithoutText"
type Variant = "Default" | "Check"
interface SelectProp{
  chevronWidth:string
  chevronHeight:string
  checkboxWidth?:string
  checkboxHeight?:string
  style:Style
  label?:string
  variant:Variant
  placeholder:string
  className?:string
}
const generateGroup68 = () =>{
  return "w-auto "
}
const generateLabelText = () =>{
  return "text-xs font-semibold text-textColor-black-text font-[Poppins]"
}
const generateInput = () => {
  return "text-sm relative py-3 font-normal w-80 pl-21px pr-11 outline-none font-[Open Sans] text-textColor-input-text box-border absolute bg-backgrounds-C1/H-simple-input border border-borderColor-Input rounded-xl"
}
const generateInputWithCheck = () => {
  return "text-sm relative py-3 font-normal w-80 pl-14 pr-11 outline-none font-[Open Sans] text-textColor-input-text box-border absolute bg-backgrounds-C1/H-simple-input border border-borderColor-Input rounded-xl"
}
const chevronIconWithText = () => {
  return "top-10 absolute left-72 "
}
const chevronIconWithoutText = () => {
  return "top-[15px] absolute left-72 "
}

const Selects = ({chevronWidth, chevronHeight, checkboxHeight, checkboxWidth,
  style, variant, className, label, placeholder}:SelectProp) => {
  if(style === "WithText" && variant === "Default"){
    return(
      <div className=' relative'>
        <label className={`${generateLabelText()}`}>{label}</label>
        <div className={`${generateGroup68()}`}>
          <input type="text" className={`${generateInput()}`} placeholder = {placeholder} />
          <ChevronTopBottom width={chevronWidth} height = {chevronHeight} className={`${chevronIconWithText()}`} />
        </div>
      </div>
    )
  }
  else if(style === "WithoutText" && variant === "Default"){
    return(
    <div className='relative'>
      <div className={`${generateGroup68()}`}>
        <input type="text" className={`${generateInput()}`} placeholder = {placeholder} />
        <ChevronTopBottom width={chevronWidth} height = {chevronHeight} className={`${chevronIconWithoutText()}`} />
      </div>
    </div>
    )
  }
  else if(style === "WithText" && variant === "Check"){
    return(
    <div className='relative'>
      <label className={`${generateLabelText()}`}>{label}</label>
      <div className={`${generateGroup68()}`}>
        <input type="text" className={`${generateInputWithCheck()}`} placeholder = {placeholder} />
        <Checkboxes width={`${checkboxWidth}`} height = {`${checkboxHeight}`} className = "absolute top-[35px] left-5" variant = "WithoutText" status='Default' />
        <ChevronTopBottom width={chevronWidth} height = {chevronHeight} className={`${chevronIconWithText()}`} />
      </div>
    </div>
    )
  }
  else if(style === "WithoutText" && variant === "Check"){
    return(
      <div className='relative'>
        <div className={`${generateGroup68()}`}>
          <input type="text" className={`${generateInputWithCheck()}`} placeholder = {placeholder} />
          <Checkboxes width={`${checkboxWidth}`} height = {`${checkboxHeight}`} className = "absolute top-[12px] left-5" variant = "WithoutText" status='Default' />
          <ChevronTopBottom width={chevronWidth} height = {chevronHeight} className="top-[17px] absolute left-72 " />
        </div>
      </div>
    )
  }
  else{
    return(
      <div>Error</div>
    )
  }
}

export default Selects
