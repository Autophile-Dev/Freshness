import React from 'react'
type Variant = "Dark" | "White"
interface headingProp {
    variant:Variant
    className?:string
}
const generateVariant = (variant:Variant) => {
    switch (variant){
        case "Dark":
            return "bg-backgrounds-C1/A-menu-dark font-[Poppins] font-semibold text-head-font text-textColor-white-text"
        case "White":
            return "bg-backgrounds-C1/J-header-default font-[Poppins] font-semibold text-head-font text-textColor-black-text"
        default:
            return "bg-red-500"
    }
}
const generateNavigation = () =>{
    return "flex flex-row items-center py-2 px-[45px] w-menu"
}
const generateFrame83 = () =>{
    return "order-none flex-none"
}
const Heading = ({variant, className}:headingProp) => {
  return (
    <div className={`${generateVariant(variant)} ${generateNavigation()} `}>
      <div className={`${generateFrame83()}`}>
        <h1>Fruit and vegetables</h1>
      </div>
    </div>
  )
}

export default Heading
