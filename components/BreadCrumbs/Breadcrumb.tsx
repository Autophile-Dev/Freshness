import React from 'react';
import {Children} from "react";
import { Fragment } from 'react';
const generateBreadCrumb = () =>{
    return "flex flex-row items-center py-4 sm:px-[80px] xl:justify-start justify-center w-full  "
}
const generateFrame83 = () =>{
    return "flex flex-row items-center gap-1 justify-center"
}
const breadCrumbText = () =>{
  return "text-xs font-[Open Sans] text-textColor-input-text"
}
const Breadcrumb = ({children, className}:any) => {
    const childrenArray = Children.toArray(children);
    const childrenWithSeperator = childrenArray.map((child, index)=>{
        if(index !== childrenArray.length - 1){
            return (
                <Fragment key={index}>
                   <span className={`${breadCrumbText()} ${generateFrame83()}`}>{child} {"/"}</span> 
                </Fragment>
            );
        }
        return child
    });
  return (
    <nav aria-label='breadcrumb' className={`${generateBreadCrumb()}`}>
        <div className={`${generateFrame83()}`}>
            {childrenWithSeperator}
        </div>
    </nav>
  )
}

export default Breadcrumb
