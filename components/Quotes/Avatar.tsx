import Image from 'next/image'
import React from 'react'
type Size = "Large" | "Medium" | "Small"
interface avatarProp{
    className?:string
    size:Size
    src:string
    alt:string
}
const generateAvatarSize = (size:Size) => {
    switch(size){
        case "Large":
            return "w-16 h-16 bg-backgrounds-C1/F-ellipse rounded-full";
        case "Medium":
            return "w-10 h-10 bg-backgrounds-C1/F-ellipse rounded-full";
        case "Small":
            return "w-8 h-8 bg-backgrounds-C1/F-ellipse rounded-full";
        default:
            return "bg-red-400 w-6 h-3 rounded-full";
    }
}
const Avatar = ({className, size, alt ,src}:avatarProp) => {
  return (
    <div className={`${generateAvatarSize(size)} ${className}`}>
       {/* <Image src = {src} alt = {alt} /> */}
    </div>
  )
}

export default Avatar