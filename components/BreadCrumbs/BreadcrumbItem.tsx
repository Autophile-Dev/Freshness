import Link from 'next/link'
import React from 'react'

const BreadcrumbItem = ({children, isCurrent, href, ...props}:any) => {
  return (
    <div  {...props}>
      <Link className='flex items-center' href={href} passHref>
        <span className={isCurrent && "text-xs font-[Open Sans] text-textColor-black-text"}
        aria-current = {isCurrent ? "page" : "false"}
        >
            {children}
        </span>
      </Link>
    </div>
  );
};

export default BreadcrumbItem
