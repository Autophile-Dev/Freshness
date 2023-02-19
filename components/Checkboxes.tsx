import React from 'react'
// Type of variant
type Variant = "WithText" | "WithoutText"
// Type of Status
type Status = "Checked" | "Default"
interface CheckBoxProp extends React.HTMLAttributes<HTMLInputElement>{
  label?:string
  variant:Variant
  status:Status
  className?:string
}
const Checkboxes = ({label, variant, status, className}:CheckBoxProp) => {
    if(variant === "WithoutText" && status === "Checked"){
      return(
        <input type="checkbox" checked className='accent-textColor-text-Green border border-b-Colored-button' />
      )
    }
    else if(variant === "WithoutText" && status === "Default"){
      return(
        <input type="checkbox" className='w-6 h-6 accent-textColor-text-Green rounded-xl border border-Input ' />
      )
    }
    else if(variant === "WithText" && status === "Default"){
      return(
        <div className='flex flex-row rounded-xl bg-backgrounds-C1/H-menu-white border py-[9px] px-[16px] items-start gap-2 p-0'>
          <input type="checkbox" className='w-6 h-6 accent-textColor-text-Green outline-none' />
          <span className='text-sm font-normal text-textColor-black-text font-[Open Sans] order-1 self-center'>{label}</span>
        </div>
      )
    }
    else if(variant === "WithText" && status === "Checked"){
      return(
        <div className='flex rounded-xl py-[9px] px-[16px] bg-backgrounds-C1/H-menu-white border flex-row items-start gap-2 p-0'>
          <input type="checkbox" checked className='w-6 h-6 accent-textColor-text-Green' />
          <span className='text-sm font-normal text-textColor-black-text font-[Open Sans] order-1 self-center'>{label}</span>
        </div>
      )
    }
    else{
      return(
        <div>Error</div>
      )
    }
}

export default Checkboxes
