import React from 'react'
import ActionCloseSimple from './ActionsIcons/ActionCloseSimple'
// Size of Tag
type Size = "Large" | "Small"
// Style of Tag
type Style = "Bordered" | "Default" | "Colored"
// Close of Tag
type Close = "On" | "Off"
interface TagsProp{
  size:Size
  style:Style
  close:Close
  label:string
  className?:string
}
const generateStyle = (style:Style): string => {
  switch(style){
    case "Bordered":
      return "border border-Tag rounded-xl font-[Poppins] font-semibold bg-white flex flex-row items-center text-xs text-textColor-black-text"
    case "Default":
      return "border-none rounded-xl font-[Poppins] font-semibold flex flex-row items-center bg-backgrounds-C1/F-default-tag text-xs text-textColor-black-text"
    case "Colored":
      return "border-none rounded-xl font-[Poppins] font-semibold flex flex-row items-center bg-backgrounds-C2/E-colored-tag text-xs text-textColor-text-Green"
    default:
      return "text-red-400"
  }
}
const generateSize = (size:Size): string =>{
  switch(size){
    case "Large":
      return "h-6 py-1 px-2.5 "
    case "Small":
      return "h-18px py-0 px-2"
  }
}
const generateIconColor = (style:Style): string =>{
  switch(style){
    case "Bordered":
      return "order w-3 h-3 text-textColor-icon-gray"
    case "Colored":
      return "order w-3 h-3 text-textColor-icon-green"
    case "Default":
      return "order w-3 h-3 text-textColor-icon-gray"
    default:
      return "text-black"
  }
}
const Tags = ({size, style, close, label, className} : TagsProp) => {
  if(size==="Large" && close === "On"){
    return (
      <div className={`${generateStyle(style)} 
      ${generateSize(size)} ${className} w-65px gap-2`}>{label} 
      <ActionCloseSimple className={`${generateIconColor(style)}`} /></div>
    )
  }
  else if(size==="Large" && close==="Off"){
    return(
      <div className={`${generateStyle(style)} 
      ${generateSize(size)} ${className} w-11 gap-2`}>{label}</div>
    )
  }
  else if(size==="Small" && close==="On"){
    return(
      <div className={`${generateStyle(style)} 
      ${generateSize(size)} ${className} w-14 gap-1`}>{label} 
      <ActionCloseSimple className={`${generateIconColor(style)}`} /></div>
    )
  }
  else if(size==="Small" && close==="Off"){
    return(
      <div className={`${generateStyle(style)} 
      ${generateSize(size)} ${className} w-14 gap-2`}>{label}</div>
    )
  }
  else{
    return(
      <div>Error</div>
    )
  }
}

export default Tags
