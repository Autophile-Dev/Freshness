import Link from 'next/link'
import React, {useState} from 'react'
import ChevronDown from './ChevronIcons/ChevronDown'
type Variant = "White" | "Dark"
interface MenuProp{
    className?:string
    variant:Variant
}
const generateMenu = () =>{
    return "flex  flex-col items-start gap-[39px] py-[16px] px-[80px] "
}
const generateFrame67 = () =>{
    return "flex w-full xl:gap-0 gap-[5px] flex-col xl:flex-row items-center py-0 px-[4px] xl:px-[80px] xl:justify-between"
}
const generateFrame25 = () =>{
    return "flex flex-row items-center py-0 px-0 gap-0.5  grow-0 order-0"
}
const generateFrame26 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5  grow-0 order-1"
}
const generateFrame27 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5   grow-0 order-2"
}
const generateFrame28 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5  grow-0 order-3"
}
const generateFrame29 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5 grow-0 order-4"
}
const generateFrame30 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5  grow-0 order-5"
}
const generateFrame31 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5  grow-0 order-6"
}
const generateFrame32 = () =>{
    return "flex  flex-row items-center py-0 px-0 gap-0.5  grow-0 order-7"
}
const generateVariant = (variant:Variant) =>{
    switch(variant){
        case "White":
            return "bg-backgrounds-C1/H-menu-white font-[Poppins] font-semibold text-sm text-textColor-black-text"
        case "Dark":
            return "bg-backgrounds-C1/A-menu-dark font-[Poppins] font-semibold text-sm text-textColor-white-text"
        default:
            return "bg-red"
    }
}
const Menus = ({className = '', variant}:MenuProp) => {
  return (
    <div className='w-full'>
    <div className='container mx-auto'>
    <div className={`${generateMenu()} ${generateVariant(variant)} ${className}`}>
      <div className={`${generateFrame67()}`}>
        <div className={`${generateFrame25()}`}>
            <Link href={'/bakery'}>Bakery</Link>
        </div>
        <div className={`${generateFrame26()}`}>
            <Link href={'/'}>Fruit and Vegetables</Link>

        </div>
        <div className={`${generateFrame27()}`}>
            <Link href={'/meat'} >Meat and Fish</Link>
        </div>
        <div className={`${generateFrame28()}`}>
            <Link href={'/drinks'}>Drinks</Link>
        </div>
        <div className={`${generateFrame29()}`}>
            <Link href={'/kitchen'}>Kitchen</Link>
        </div>
        <div className={`${generateFrame30()}`}>
            <Link href={'/nutrition'}>Special nutrition</Link>
        </div>
        <div className={`${generateFrame31()}`}>
            <Link href={'/babyproduct'}>Baby</Link>
        </div>
        <div className={`${generateFrame32()}`}>
            <Link href={'/pharmacy'}>Pharmacy</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Menus
