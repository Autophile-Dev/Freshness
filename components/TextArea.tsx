import React from 'react'
interface textAreaProp extends React.HTMLAttributes<HTMLTextAreaElement>{
    label?:string
} 
const TextArea = ({label, className, placeholder}:textAreaProp) => {
  return (
    <div className='flex flex-col w-full'>
        <label htmlFor="" className='w-default-search font-[Open sans] font-bold text-xs position:absolute'>{label}</label>
        <textarea rows={4} placeholder={placeholder} cols={50} className={`box-border font-[Open sans] position:absolute text-input-font py-11px pr-16px pl-21px leading-5 text-textColor-input-text outline-0 h-defaultSearch rounded-input-radius bg-backgrounds-C1/H-simple-input border-input border-Input`} ></textarea>
    </div>
  )
}

export default TextArea
