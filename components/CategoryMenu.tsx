import Link from 'next/link'
import React from 'react'
import Buttons from './Buttons'
interface categoryProps{
    href1:string
    href2:string
    href3:string
    href4:string
    href5:string
    className?:string
    categoryTitle:string
    categoryItem1:string
    categoryItem2:string
    categoryItem3:string
    categoryItem4:string
    categoryItem5:string
    buttonLabel:string
}
const generateMenu = () =>{
    return "flex flex-col items-start gap-12 w-269px"
}
const generateFrame11 = ()=>{
    return "flex flex-row items-center gap-2.5 w-269px order-none grow-0 self-center"
}
const generateGroup55 = () =>{
  return "w-269px grow-0 flex-col flex gap-4 order-none"
}
const generateFrame54 = () =>{
  return "w-269px flex flex-col p-0 gap-3 items-start"
}
const headerStyle = () => {
  return "font-[Poppins] font-semibold text-lg text-textColor-black-text"
}
const itemsStyle = () =>{
  return "w-269px font-[Open sans] text-sm underline text-textColor-text-Green"
}
const CategoryMenu = ({className, categoryTitle, categoryItem1, categoryItem2, categoryItem3, 
  categoryItem4, categoryItem5, buttonLabel, href1, href2, href3, href4, href5}:categoryProps) => {
  return (
    // generate Menu
    <div className={`${generateMenu()} ${className}`}>
      {/* Frame 11 */}
      <div className={`${generateFrame11()}`}>
        {/* Group 55 */}
        <div className={`${generateGroup55()}`}>
          {/* Header */}
          <h1 className={`${headerStyle()}`}>{categoryTitle}</h1>
          {/* Frame 54/Items */}
          <div className={`${generateFrame54()}`}>
            <Link className={`${itemsStyle()}`} href={href1}>{categoryItem1}</Link>
            <Link className={`${itemsStyle()}`} href={href2}>{categoryItem2}</Link>
            <Link className={`${itemsStyle()}`} href={href3}>{categoryItem3}</Link>
            <Link className={`${itemsStyle()}`} href={href4}>{categoryItem4}</Link>
            <Link className={`${itemsStyle()}`} href={href5}>{categoryItem5}</Link>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <Buttons variant="Bright" size='Medium' type="Right" label={`${buttonLabel}`} />
    </div>
  )
}

export default CategoryMenu