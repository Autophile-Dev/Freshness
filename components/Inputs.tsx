import { type } from 'os'
import React from 'react'
type Style = "Simple" | "Default"


interface InputProps extends  React.HTMLAttributes<HTMLInputElement> {
 
  label?:string


}

const generateStyle = (style:Style): string =>{
  switch(style){
    case "Simple":
      return ""
    case "Default":
      return ""
    default:
      return ""
  }
}
const Inputs = ({placeholder, label = '', className = ''}:InputProps) => {
  return (
      <div className='flex flex-col w-full'>

        <label htmlFor="" className='w-default-search font-[Open sans] font-bold text-xs position:absolute'>{label}</label>
        <input type="text" placeholder={placeholder} className={` 
        'box-border font-[Open sans] position:absolute text-input-font py-11px pr-16px pl-21px leading-5 text-textColor-input-text outline-0 h-defaultSearch rounded-input-radius bg-backgrounds-C1/H-simple-input border-input border-Input' ${className}`}/>
      </div>
  )
}

export default Inputs
