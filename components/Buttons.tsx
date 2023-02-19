
import React from 'react'
import ChevronLeft from './ChevronIcons/ChevronLeft'
import ChevronRight from './ChevronIcons/ChevronRight'

// Type of variant
type Variant = "Bright" | "Simple" | "Colored" | "Stroke"
// Type of size
type Size = "Small" | "Medium" | "Large"
// Type of button => Default, IconType
type TypeBtn = "Default" | "Left" | "Right"
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  label:string
  variant:Variant
  size:Size
  type:TypeBtn
  className?:string
}
const generateVariant = (variant:Variant): string => {
  switch(variant){
    case "Bright":
      return "bg-backgrounds-C1/F-bright-button font-[Poppins] font-bold  box-border flex items-center gap-1.5 text-button-font text-textColor-black-text rounded-button-radius";
    case "Simple":
      return "bg-backgrounds-C1/J-simple-button font-[Poppins] font-bold  box-border flex items-center gap-1.5 text-button-font text-textColor-black-text rounded-button-radius";
    case "Colored":
      return "bg-backgrounds-C2/A-colored-button font-[Poppins] font-bold  box-border flex items-center gap-1.5 text-button-font  text-textColor-white-text border-Colored-button rounded-button-radius border-colored-button";
    case "Stroke":
      return "bg-backgrounds-C2/C-stroke-button font-[Poppins] font-bold  box-border flex items-center gap-1.5 text-button-font text-textColor-black-text border-Stroke-button rounded-button-radius border-stroke-button";
    default:
      return "bg-red"
  }
}
const generateIconColor = (variant:Variant): string =>{
  switch(variant){
    case "Bright":
      return "text-textColor-black-text"
    case "Simple":
      return "text-textColor-text-Green"
    case "Colored":
      return "text-textColor-white-text"
    case "Stroke":
      return "text-textColor-text-Green"
    default:
      return "text-red-500"
  }
}
const generateSize = (size:Size): string => {
  switch(size){
    case "Large":
      return "h-button-large px-button-large-row py-button-large-column ";
    case "Medium":
      return "h-button-medium  px-4 py-medium-large-column ";
    case "Small":
      return "h-button-small px-button-small-row py-button-small-column ";
    default:
      return "h-3";
  }
}
const generateIconSize = () =>{
  return "w-4 h-4 font-bold"
}

const Buttons = ({label, variant, size, type, className = ' '}:ButtonProps) => {
  if(type === "Default"){
    return (
      <button className={`${generateVariant(variant)} ${generateSize(size)}
      ${className}`}>{label}</button>
    )
  }
  else if(type === "Left"){
    return(
      <button className={`${generateVariant(variant)} ${generateSize(size)} 
      ${className}`}><ChevronLeft className={`${generateIconColor(variant)}
      ${generateIconSize()} order-none`} width={''} height={''} />{label}</button>
    ) 
  }
  else if(type === "Right"){
    return(
      <button className={`${generateVariant(variant)} ${generateSize(size)} 
      ${className}`}>{label}<ChevronRight className={`${generateIconColor(variant)}
      ${generateIconSize()} order-1`} width={''} height={''} /></button>
    )
  }
  else{
    return(<button>Error</button>)
  }
}

export default Buttons