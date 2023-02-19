import React from 'react'
import CategoryMenu from '../CategoryMenu'
import Product from './Product'
type Style = "Border" | "Default"
interface componentProp{
    style:Style
    className?:string
    tagLabel1?:string
    tagLabel2?:string
    categoryTitle:string
    categoryItem1:string
    categoryItem2:string
    categoryItem3:string
    categoryItem4:string
    categoryItem5:string
    buttonLabel:string
    productTitle1:string
    productTitle2:string
    productTitle3:string
    productDescription1:string
    productDescription2:string
    productDescription3:string
    productPrice1:string
    productPrice2:string
    productPrice3:string
    href1:string
    href2:string
    href3:string
    href4:string
    href5:string
    productOldPrice1?:string
    productOldPrice2?:string
    imageUrl1:string
    imageUrl2:string; imageUrl3:string; imageAlt1:string; imageAlt2:string; imageAlt3:string
}
const generateComponent = () =>{
    return "flex flex-col  items-center box-border md:py-16 py-12  bg-white"
}
const generateFrame53 = () => {
    return "flex flex-col items-end  gap-[32px]"
}
const generateFrame52 = () => {
    return "flex flex-row flex-wrap justify-center items-start gap-[16px] xl:gap-[40px]"
}
const ProductWithCategory = ({style, className, tagLabel1, tagLabel2, categoryItem1, categoryItem2,
categoryItem3, categoryItem4, categoryItem5, categoryTitle, buttonLabel, productTitle1, productTitle2,
 productTitle3, productDescription1, productDescription2, productDescription3, productPrice1, productPrice2,
 productPrice3, productOldPrice1, productOldPrice2 , href1, href2, href3, href4, href5, imageUrl1, imageUrl2, imageUrl3, imageAlt1,
  imageAlt2, imageAlt3}:componentProp) => {
  if(style === "Border"){
    return (
      <section className='w-full'>
      <div className='container mx-auto'>
      {/* // Generate Component */}
      <div className={`${generateComponent()}`}>
        {/* Frame 53 */}
        <div className={`${generateFrame53()}`}>
          {/* Frame 52 */}
          <div className={`${generateFrame52()}`}>
            {/* Category Menu Component */}
            <CategoryMenu categoryTitle={`${categoryTitle}`} categoryItem1 = {`${categoryItem1}`} 
            categoryItem2 = {`${categoryItem2}`} categoryItem3 = {`${categoryItem3}`} categoryItem4 = {`${categoryItem4}`} 
            categoryItem5 = {`${categoryItem5}`}  href1 = {`${href1}`} href2 = {`${href2}`} href3 = {`${href3}`} 
            href4 = {`${href4}`} href5 = {`${href5}`} buttonLabel = {`${buttonLabel}`}/>
            {/* Grid View, Border Style, Default Type Product Component */}
            <Product view='Grid-View' style='Border' product='Default' productDescription={`${productDescription1}`} 
            productName = {`${productTitle1}`} imageUrl = {`${imageUrl1}`} imageAlt={`${imageAlt1}`} productAmount = {`${productPrice1}`} />
            {/* Grid View, Border Style, Default-Discount Type */}
            <Product view='Grid-View' style='Border' product='Default-Discount' productDescription={`${productDescription2}`} 
            productName = {`${productTitle2}`} productAmount = {`${productPrice2}`} imageUrl={`${imageUrl2}`} imageAlt={`${imageAlt2}`} productOldAmount = {`${productOldPrice1}`} 
            discountPercent = {`${tagLabel1}`}/>
            {/* Grid View, Border Style, Default-Discount Type */}
            <Product view='Grid-View' style='Border' product='Default-Discount' productDescription={`${productDescription3}`} 
            productName = {`${productTitle3}`} imageUrl={`${imageUrl3}`} imageAlt={`${imageAlt3}`} productAmount = {`${productPrice3}`} productOldAmount = {`${productOldPrice2}`} 
            discountPercent = {`${tagLabel2}`}/>
          </div>
        </div>
      </div>
      </div>
      </section>
    )
  }
  else if(style === "Default"){
    return(
      // Generate component
      <div className={`${generateComponent()}`}>
        {/* Frame 53 */}
        <div className={`${generateFrame53()}`}>
          {/* Frame 52 */}
          <div className={`${generateFrame52()}`}>
            {/* Category with menu component */}
            <CategoryMenu categoryTitle={`${categoryTitle}`} categoryItem1 = {`${categoryItem1}`} 
            categoryItem2 = {`${categoryItem2}`} categoryItem3 = {`${categoryItem3}`} categoryItem4 = {`${categoryItem4}`} 
            categoryItem5 = {`${categoryItem5}`}  href1 = {`${href1}`} href2 = {`${href2}`} href3 = {`${href3}`} 
            href4 = {`${href4}`} href5 = {`${href5}`} buttonLabel = {`${buttonLabel}`}/>
            {/* Grid view, Default Style, Default Type Product */}
            <Product view='Grid-View' style='Default' imageUrl={`${imageUrl1}`} imageAlt={`${imageAlt1}`} product='Default' productDescription={`${productDescription1}`} 
            productName = {`${productTitle1}`} productAmount = {`${productPrice1}`} />
            {/* Grid view, Default Style, Default Type Product */}
            <Product view='Grid-View' style='Default' imageUrl={`${imageUrl2}`} imageAlt={`${imageAlt2}`} product='Default' productDescription={`${productDescription2}`} 
            productName = {`${productTitle2}`} productAmount = {`${productPrice2}`} />
            {/* Grid view, Default Style, Default Type Product */}
            <Product view='Grid-View' style='Default' imageUrl={`${imageUrl3}`} imageAlt={`${imageAlt3}`} product='Default' productDescription={`${productDescription3}`} 
            productName = {`${productTitle3}`} productAmount = {`${productPrice3}`} />
          </div>
        </div>
      </div>
    )
  }
  else{
    return(<div>Error</div>)
  }
}

export default ProductWithCategory