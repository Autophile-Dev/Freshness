import React from 'react'
import Buttons from '../Buttons'
import Product from './Product'
interface ProductWithTitleProp{
    title:string
    buttonLabel:string
    imageUrl1:string 
    imageUrl2:string 
    imageUrl3:string
    imageUrl4:string
    imageAlt1:string
    imageAlt2:string 
    imageAlt3:string 
    imageAlt4:string 
    productTitle1:string 
    productTitle2:string 
    productTitle3:string 
    productTitle4:string 
    productDescription1:string 
    productDescription2:string 
    productDescription3:string 
    productDescription4:string 
    tagLabel?:string 
    productPrice1:string 
    productPrice2:string 
    productPrice3:string 
    productPrice4:string 
    productOldPrice?:string 
}
const generateComponent = () =>{
  return "flex flex-col gap-[32px] w-full items-start py-[64px] bg-white"
}
const generateFrame56 = () => {
  return "flex flex-row w-full items-center gap-[32px]"
}
const generateFrame53 = () =>{
  return "flex flex-row items-center w-full gap-[32px]"
}
const generateFrame52 = () =>{
  return "flex flex-row flex-wrap justify-center w-full items-start xl:gap-[40px] gap-[16px]"
}
const labelStyle = () => {
  return "font-[Poppins] font-semibold text-lg text-textColor-black-text"
}
const ProductWithTitle = ({title, buttonLabel, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageAlt1,
  imageAlt2, imageAlt3, imageAlt4, productTitle1, productTitle2, productTitle3, productTitle4, productDescription1,
  productDescription2, productDescription3, productDescription4, tagLabel = '', productPrice1, productPrice2, productPrice3, productPrice4,
  productOldPrice = ''}:ProductWithTitleProp) => {
  return (
    <section className='w-full'>
      <div className='container mx-auto'>
        <div className={`${generateComponent()}`}>
          {/* Frame 56 */}
          <div className='flex flex-col w-full xl:px-[80px] sm:px-12 px-0 items-start'>
          <div className={`${generateFrame56()}`}>
            <div className='flex sm:flex-row flex-col justify-between w-full px-0 sm:px-12 xl:px-[80px] items-center'>
              <label className={`${labelStyle()}`} htmlFor="">{title}</label>
              <Buttons variant="Simple" label={`${buttonLabel}`} size="Small" type="Right"/>
            </div>
            
          </div>
          </div>
          
          {/* Frame 53 */}
          <div className={`${generateFrame53()}`}>
            {/* Frame 52 */}
            <div className={`${generateFrame52()}`}>
              {/* Product Default With Border */}
              <Product view="Grid-View" style="Border" product="Default" productName={`${productTitle1}`}
              productDescription = {`${productDescription1}`} productAmount = {`${productPrice1}`} imageUrl={`${imageUrl1}`} 
              imageAlt={`${imageAlt1}`}/>
              {/* Product 2 */}
              <Product view='Grid-View' style='Border' product='Default' productName={`${productTitle2}`} 
              productDescription ={`${productDescription2}`} productAmount={`${productPrice2}`} imageUrl={`${imageUrl2}`} 
              imageAlt={`${imageAlt2}`}/>
              {/* Product 3 */}
              <Product view='Grid-View' style='Border' product="Default-Discount" productName={`${productTitle3}`}
              productDescription={`${productDescription3}`} productAmount={`${productPrice3}`} imageUrl={`${imageUrl3}`} 
              imageAlt={`${imageAlt3}`} productOldAmount={`${productOldPrice}`} discountPercent={`${tagLabel}`} />
              {/* Product 4 */}
              <Product view='Grid-View' style='Border' product='Default' productName={`${productTitle4}`}
              productDescription={`${productDescription4}`} productAmount={`${productPrice4}`} imageUrl={`${imageUrl4}`} 
              imageAlt={`${imageAlt4}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductWithTitle