import React from 'react'
import ActionSearch from './ActionsIcons/ActionSearch'
type Type = "Default" | "Advanced"
interface searchProp{
  className?:string
  type:Type
  placeholder:string
}
const generateGroup68 = () =>{
  return "w-auto "
}
const generateInput = () => {
  return "text-sm relative py-3 font-normal w-80 pl-4 pr-11 outline-none font-[Open Sans] text-textColor-input-text box-border absolute bg-backgrounds-C1/H-simple-input border border-borderColor-Input rounded-xl"
}
const generateAdvanceInput = () => {
  return "w-small-advance-search sm:w-advance-search relative py-3 pl-[130px] sm:pl-[194px] pr-11 font-normal outline-none font-[Open Sans] text-xs sm:text-sm text-textColor-input-text box-border bg-backgrounds-C1/H-simple-input border border-borderColor-Input rounded-xl"
}
const SearchWithoutText = () => {
  return "top-[16px] w-4 h-4 absolute left-72 "
}
const AdvanceSearchWithoutText = () => {
  return "sm:top-[15px] top-[13px] w-4 h-4 absolute  left-[230px] sm:left-[468px] "
}
const selectType = () =>{
  return "outline-none bg-transparent absolute top-[12px] sm:top-[13px]"
}
const labelText = () => {
  return "font-[Poppins] text-xs sm:text-sm left-4 pr-[2px] sm:pr-[10px] absolute  text-textColor-black-text font-bold"
}
const optionText = () =>{
  return "font-[Poppins] font-normal outline-none text-textColor-black-text"
}
const Search = ({className, type, placeholder}:searchProp) => {
  if(type === "Default"){
    return (
      <div className='relative'>
        <div className={`${generateGroup68()} ${className}`}>
          <input type="text" className={`${generateInput()}`} placeholder={placeholder} />
          <ActionSearch className= {`${SearchWithoutText()}`}/>
        </div>
      </div>
    )
  }
  else if(type === "Advanced"){
    return (
      <div className='relative'>
        <div className={`${generateGroup68()} ${className}`}>
          <div></div>
          <input type="text" placeholder={placeholder} className={`${generateAdvanceInput()}`} />
          <ActionSearch className= {`${AdvanceSearchWithoutText()}`}/>
            <select className={`${selectType()} ${labelText()}`}  name="" id="">
              <option value="">All categories</option>
              <option className={`${optionText()}`} value="">Bakery</option>
              <option className={`${optionText()}`} value="">Fish</option>
            </select>
            <svg width="2" height="20" className='absolute sm:top-[13px] top-[11px] left-[125px] sm:left-[177px]' viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="20" stroke="#D1D1D1"/>
            </svg>
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

export default Search