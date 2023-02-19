import Image from 'next/image'
import React from 'react'
import ActionHeart from '../ActionsIcons/ActionHeart'
import ActionStar from '../ActionsIcons/ActionStar'
import Buttons from '../Buttons'
import HeartButton from '../HeartButton'
import Tags from '../Tags'
type Style = "Border" | "Default"
type View = "List-View" | "Grid-View"
type productType = "Default" | "Default-Discount-Rating" | "Default-Discount" | "Default-Rating"
interface ProductProps{
    style:Style
    view:View
    product?:productType
    productName:string
    productDescription:string
    freshness?:string
    stock?:string
    delivery?:string
    farm?:string
    discountPercent?:string
    productAmount?:string
    productOldAmount?:string
    shippingInfo?:string
    shippingDay?:string
    className?:string
    imageUrl:string
    imageAlt:string
}
const generateStyle = (style:Style): string =>{
    switch(style){
        case "Border":
            return "border-box border rounded-xl border-Input bg-white"
        case "Default":
            return "border-0 p-0 bg-white"
        default:
            return "border-0 bg-white"
    }
}
const generateView = (view:View): string =>{
    switch(view){
        case "List-View":
            return " w-list-view gap-8 grow-0 flex flex-row h-list-view"
        case "Grid-View":
            return "w-grid-view flex flex-col items-start gap-4"
        default:
            return "border-box"
    }
}
const generateRectangle_26 = () =>{
    return "bg-backgrounds-C1/H-menu-white rounded-xl"
}

const generateFrame_76 = () =>{
    return "flex flex-col items-start gap-3"
}
const generateFrame_74 = () =>{
    return "flex flex-col items-start gap-6 w-269px"
}
const generateGroup_77 = () =>{
    return "flex flex-col items-start gap-6 w-172px"
}
const generateSubFrame_74 = () =>{
    return "flex flex-col order-none items-start gap-2 w-269px"
}
const generateFrame_121 = () =>{
    return "flex flex-col items-start gap-1 w-269px"
}
const generateProductHead = () => {
    return "font-[Poppins] text-textColor-black-text font-semibold text-lg"
}
const generateProductDescription = () =>{
    return "font-[Open Sans] text-xs text-textColor-dark-Gray max-w-269px"
}
const generateFrame_70 = () =>{
    return "flex flex-row gap-0.5"
}
const generateFrame_73 = () =>{
    return "flex flex-col items-start w-237px order-1 gap-3"
}
const generateGroup_70 = () =>{
    return "w-237px order-none flex gap-11"
}
const generateGroup_71 = () =>{
    return "w-237px order-1 flex flex gap-74px"
}
const generateGroup_72 = () =>{
    return "w-237px order-2 flex gap-56px"
}
const generateGroup_73 = () =>{
    return "w-237px order-3 flex gap-72px"
}
// Group 77 => Group 74
const generateGroup_74 = () =>{
    return "w-172px flex flex-col gap-2 items-center"
}
const generateGroup_76 = () =>{
    return "w-172px flex flex-col "
}
const generateGroup_75 = () =>{
    return "w-172px flex flex-col gap-0.5"
}
const infoStyle = () =>{
    return "font-[Open Sans] text-sm text-textColor-input-text"
}
const spanGenerate= ()=>{
    return "font-[Open Sans] text-sm text-textColor-text-Green"
}
const strikeThroughGenerate= ()=>{
    return "font-[Open Sans] font-semibold text-xs text-textColor-input-text"
}
const boldGenerate= ()=>{
    return "font-[Open Sans] font-semibold text-xs text-textColor-input-text"
}
const shippingInfoDayGenerate= ()=>{
    return "font-[Open Sans] text-xs text-textColor-input-text"
}
const gridImage = () =>{
    return "w-237px grow-0 h-180px relative order-none self-stretch "
}
const defaultStyleGridImage = () =>{
    return "w-grid-view grow-0 h-180px order-none self-stretch "
}
const contentAndButton = () => {
    return "w-237px order-1 self-stretch gap-4 flex flex-col items-start"
}
const defaultContentAndButton = () => {
    return "w-269px order-1 self-stretch gap-4 flex flex-col items-start"
}
const gridFrame_70 = () =>{
    return "w-237px order-none gap-3 flex flex-col items-start"
}
const defaultGridFrame_70 = () =>{
    return "w-269px order-none gap-3 flex flex-col items-start"
}
const SubFrame_70_Content = () =>{
    return "w-237px order-none gap-1 flex flex-col items-center"
}
const defaultSubFrame_70_Content = () =>{
    return "w-269px order-none gap-1 flex flex-col items-center"
}
const gridProductHead = () =>{
    return "w-237px font-[Poppins] font-medium text-productTitle text-textColor-black-text"
}
const gridProductDescription = () =>{
    return "w-237px font-[Open Sans] font-normal text-xs text-textColor-dark-Gray"
}
const defaultGridProductHead = () =>{
    return "w-269px font-[Poppins] font-medium text-productTitle text-textColor-black-text"
}
const defaultGridProductDescription = () =>{
    return "w-269px font-[Open Sans] font-normal text-xs text-textColor-dark-Gray"
}
const rateGridFrame_70 = () =>{
    return "flex flex-row gap-0.5"
}
const priceAndButton = () =>{
    return "order-1 grow-0 w-237px self-stretch"
}
const defaultPriceAndButton = () =>{
    return "order-1 grow-0 w-269px self-stretch"
}
const priceAndButtonContent = () =>{
    return "flex flex-row justify-between items-center w-237px"
}
const defaultPriceAndButtonContent = () =>{
    return "flex flex-row justify-between items-center w-269px"
}
const priceContent = () =>{
    return "flex flex-col"
}
const gridStrikeThroughGenerate= ()=>{
    return "font-[Poppins] font-semibold text-xs text-textColor-input-text"
}
const buttonFlex = () =>{
    return "flex flex-col items-center justify-center mt-1"
}
const Product = ({style, view, imageUrl, imageAlt, product, productName, productDescription, freshness, 
    stock, delivery, farm, productAmount, discountPercent, productOldAmount, shippingInfo, shippingDay, className}:ProductProps) => {
        if(view === "List-View"){
            return (
                <div className={`${generateView(view)} ${generateStyle(style)} ${className}`}>
                    {/* <img className={`${generateRectangle_26()} w-grid-image`} src="" alt="" /> */}
                    
                    
                    <div className={`${generateRectangle_26()} w-grid-image`}>
                        <Image src={imageUrl} className='bg-no-repeat bg-auto h-180px rounded-xl' width="237" height='180' alt={imageAlt} />
                    </div>
                    <div className="flex flex-row items-center gap-24 ">
                        {/* Frame 74 flex-column */}
                        <div className={`${generateFrame_74()}`}>
                            {/* SubFrame 74 flex-column */}
                            <div className={`${generateSubFrame_74()}`}>
                                {/* Frame 121 flex-column */}
                                <div className={`${generateFrame_121()}`}>
                                    {/* Info */}
                                    <h1 className={`${generateProductHead()}`}>{productName}</h1>
                                    <p className={`${generateProductDescription()}`}>{productDescription}</p>
                                </div>
                                {/* Frame 70 flex-row */}
                                <div className={`${generateFrame_70()}`}>
                                    <ActionStar className='w-5 h-5 text-textColor-star-color-gray cursor-pointer' />
                                    <ActionStar className='w-5 h-5 text-textColor-star-color-gray cursor-pointer' />
                                    <ActionStar className='w-5 h-5 text-textColor-star-color-gray cursor-pointer' />
                                    <ActionStar className='w-5 h-5 text-textColor-star-color-gray cursor-pointer' />
                                    <ActionStar className='w-5 h-5 text-textColor-star-color-gray cursor-pointer' />
                                </div>
                            </div>
                            {/* Frame 73 flex-column */}
                            <div className={`${generateFrame_73()}`}>
                                {/* Group 70 flex-row */}
                                <div className={`${generateGroup_70()}`}>
                                    <span className={`${infoStyle()}`}>Freshness</span>
                                    <p className={`${infoStyle()}`}><span className={`${spanGenerate()}`}>New</span>{freshness}</p>
                                </div>
                                {/* Group 71 flex-row */}
                                <div className={`${generateGroup_71()}`}>
                                    <span className={`${infoStyle()}`}>Farm</span>
                                    <p className={`${infoStyle()}`}>{farm}</p>
                                </div>
                                {/* Group 72 flex-row */}
                                <div className={`${generateGroup_72()}`}>
                                    <span className={`${infoStyle()}`}>Delivery</span>
                                    <p className={`${infoStyle()}`}>{delivery}</p>
                                </div>
                                {/* Group 73 flex-row */}
                                <div className={`${generateGroup_73()}`}>
                                    <span className={`${infoStyle()}`}>Stock</span>
                                    <span className={`${spanGenerate()}`}>{stock}</span>
                                </div>
                            </div>
                        </div>
                        {/* Group 77 flex-column */}
                        <div className={`${generateGroup_77()}`}>
                            {/* Group 76 flex-column */}
                            <div className={`${generateGroup_76()}`}>
                                <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                <s className={`${strikeThroughGenerate()}`}>{productOldAmount}</s>
                            </div>
                            {/* Group 75 flex-column */}
                            <div className={`${generateGroup_75()}`}>
                                <span className={`${boldGenerate()}`}>{shippingInfo}</span>
                                <p className={`${shippingInfoDayGenerate()}`}>{shippingDay}</p>
                            </div>
                            {/* Group 74 flex-column */}
                            <div className={`${generateGroup_74()}`}>
                                <Buttons type="Right" label='Product Detail' variant="Colored" size="Medium" className='w-164px'/>
                                <HeartButton type="Left" label='Add to wish list' variant="Bright"  size='Small' className='w-164px'/> 
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(view === "Grid-View" && product === "Default-Discount-Rating" && style === "Border"){
            // generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className} p-4`}>
                    {/* Image and badge */}
                    <div className={`${gridImage()}`}>
                        {/* Images */}
                        <Image src={imageUrl} className='bg-no-repeat object-cover bg-auto h-180px rounded-xl' height='180' width='237' alt={imageAlt} />
                        <Tags style="Colored" size="Small" label={`${discountPercent}`} close="Off" className='mt-3 ml-3 absolute'  />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${contentAndButton()}`}>
                        {/* Frame 70 */}
                        <div className={`${gridFrame_70()}`}>
                            {/* Sub Frame 70 Content*/}
                            <div className={`${SubFrame_70_Content()}`}>
                                {/* Grid Product Name/Head */}
                                <h1 className={`${gridProductHead()}`}>{productName}</h1>
                                {/* Grid Product Description */}
                                <p className={`${gridProductDescription()}`}>{productDescription}</p>
                            </div>
                            {/* star grid frame 70 */}
                            <div className={`${rateGridFrame_70()}`}>
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            </div>
                        </div>
                        {/* Price and Button */}
                        <div className={`${priceAndButton()}`}>
                            {/* Price and Button Content */}
                            <div className={`${priceAndButtonContent()}`}>
                                {/* Price and Discounted Price flex-column*/}
                                <div className={`${priceContent()}`}>
                                    {/* Discounted Product Price */}
                                    <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                    {/* Product Old Price */}
                                    <s className={`${gridStrikeThroughGenerate()}`}>{productOldAmount}</s>
                                </div>
                                {/* Button */}
                                <div className={`${buttonFlex()}`}>
                                    <Buttons variant='Colored' type='Default' size='Small' label='Buy now' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Default Style, Default-Discount-Rating
        else if(view === "Grid-View" && product === "Default-Discount-Rating" && style === "Default"){
            // generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className}`}>
                    {/* Image and Badge */}
                    <div className={`${defaultStyleGridImage()}`}>
                        {/* Images */}
                        <Image src={imageUrl} className='bg-no-repeat object-cover bg-auto h-180px rounded-xl' width='268' height='180' alt={imageAlt} />
                        <Tags style="Colored" size='Small' label={`${discountPercent}`} close="Off" className='mt-3 ml-3 absolute' />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${defaultContentAndButton()}`}>
                        {/* Frame 70 */}
                        <div className={`${defaultGridFrame_70()}`}>
                            {/* Sub Frame 70 Content */}
                            <div className={`${defaultSubFrame_70_Content()}`}>
                                {/* Default Grid Product Head */}
                                <h1 className={`${defaultGridProductHead()}`}>{productName}</h1>
                                {/* Default Grid Product Description */}
                                <p className={`${defaultGridProductDescription()}`}>{productDescription}</p>
                            </div>
                            {/* Default star grid Frame */}
                            <div className={`${rateGridFrame_70()}`}>
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            </div>
                        </div>
                        {/* Default Price And Button */}
                        <div className={`${defaultPriceAndButton()}`}>
                            {/* Default Price and ButtonContent */}
                            <div className={`${defaultPriceAndButtonContent()}`}>
                                <div className={`${priceContent()}`}>
                                    {/* Default Discounted Product Price */}
                                    <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                    {/* Default Product old Price */}
                                    <s className={`${gridStrikeThroughGenerate()}`}>{productOldAmount}</s>
                                </div>
                                {/* Button */}
                                <div className={`${buttonFlex()}`}>
                                    <Buttons variant='Colored' type='Default' size='Small' label='Buy now' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Border Style, Default-Discount
        else if(view === "Grid-View" && product === "Default-Discount" && style === "Border"){
            // generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className} p-4`}>
                    {/* Image and Badge */}
                    <div className={`${gridImage()}`}>
                        {/* Images */}
                        <Image src={imageUrl} className='bg-cover object-cover absolute h-180px rounded-xl' width='237' height='180' alt={imageAlt} />
                        <Tags style="Colored" size="Small" label={`${discountPercent}`} close="Off" className='mt-3 ml-3 absolute'  />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${contentAndButton()}`}>
                        {/* Frame 70 */}
                        <div className={`${SubFrame_70_Content()}`}>
                            {/* Grid Product Name/Head */}
                            <h1 className={`${gridProductHead()}`}>{productName}</h1>
                            {/* Grid Product description */}
                            <p className={`${gridProductDescription()}`}>{productDescription}</p>
                        </div>
                        {/* Price and Button */}
                        <div className={`${priceAndButton()}`}>
                            {/* Price and Button Content */}
                            <div className={`${priceAndButtonContent()}`}>
                                {/* Price and Discounted Price flex-column */}
                                <div className={`${priceContent()}`}>
                                    {/* Discounted Product Price */}
                                    <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                    {/* Product Old Price */}
                                    <s className={`${gridStrikeThroughGenerate()}`}>{productOldAmount}</s>
                                </div>
                                {/* Button */}
                                <div className={`${buttonFlex()}`}>
                                    <Buttons variant='Colored' type='Default' size='Small' label='Buy Now'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Default Style, Default-Discount
        else if(view === "Grid-View" && product === "Default-Discount" && style === "Default"){
            // generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className}`}>
                    {/* Image and Badge */}
                    <div className={`${defaultStyleGridImage()}`}>
                        {/* Images */}
                        <Image src={imageUrl} className='bg-no-repeat object-cover bg-cover h-180px rounded-xl' width='268' height='180' alt={imageAlt} />
                        <Tags style='Colored' size='Small' label={`${discountPercent}`} close="Off" className='mt-3 ml-3' />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${defaultContentAndButton()}`}>
                        {/* Frame 70 */}
                        {/* Frame content */}
                        <div className={`${defaultSubFrame_70_Content()}`}>
                            {/* Default Grid Product Head */}
                            <h1 className={`${defaultGridProductHead()}`}>{productName}</h1>
                            {/* Default Grid Product description */}
                            <p className={`${defaultGridProductDescription()}`}>{productDescription}</p>
                        </div>
                        {/* Default Price and Button */}
                        <div className={`${defaultPriceAndButton()}`}>
                            {/* Default Price and Button Content */}
                            <div className={`${defaultPriceAndButtonContent()}`}>
                                <div className={`${priceContent()}`}>
                                    {/* Default Discounted Product Price */}
                                    <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                    {/* Default Product Old Price */}
                                    <s className={`${gridStrikeThroughGenerate()}`}>{productOldAmount}</s>
                                </div>
                                {/* Button  */}
                                <div className={`${buttonFlex()}`}>
                                    <Buttons variant='Colored' type='Default' size='Small' label='Buy now' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Border Style, Default-Rating
        else if(view === "Grid-View" && product === "Default-Rating" && style === "Border"){
            // Generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className} p-4`}>
                    {/* Image */}
                    <div className={`${gridImage()}`}>
                        {/* Image */}
                        <Image src={imageUrl} className='bg-no-repeat object-cover bg-cover h-180px rounded-xl' width='237' height='180' alt={imageAlt} />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${contentAndButton()}`}>
                        {/* Frame 70 */}
                        <div className={`${gridFrame_70()}`}>
                            {/* Sub Frame 70 Content */}
                            <div className={`${SubFrame_70_Content()}`}>
                                {/* Grid Product Name/Head */}
                                <h1 className={`${gridProductHead()}`}>{productName}</h1>
                                {/* Grid Product Description */}
                                <p className={`${gridProductDescription()}`}>{productDescription}</p>
                            </div>
                            {/* Star grid Frame 70 */}
                            <div className={`${rateGridFrame_70()}`}>
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                                <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            </div>
                        </div>
                        {/* Price and Button */}
                        <div className={`${priceAndButton()}`}>
                            {/* Price and Button Content */}
                            <div className={`${priceAndButtonContent()}`}>
                                {/* Product Price */}
                                <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                {/* Button */}
                                <Buttons variant='Colored' type='Default' size='Small' label='Buy now'/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Default Style, Default-Rating
        else if(view === "Grid-View" && product === "Default-Rating" && style === "Default"){
            // Generate View and style
            return (
            <div className={`${generateView(view)} ${generateStyle(style)} ${className}`}>
                {/* Image */}
                <div className={`${defaultStyleGridImage()}`}>
                    {/* Images */}
                    <Image src={imageUrl} className='bg-no-repeat object-cover bg-cover h-180px rounded-xl' width='268' height='180' alt={imageAlt} />
                </div>
                {/* Content and Buttons */}
                <div className={`${defaultContentAndButton()}`}>
                    {/* Frame 70 */}
                    <div className={`${defaultGridFrame_70()}`}>
                        {/* Sub Frame 70 Content */}
                        <div className={`${defaultSubFrame_70_Content()}`}>
                            {/* Default grid product head */}
                            <h1 className={`${defaultGridProductHead()}`}>{productName}</h1>
                            {/* Default grid product description */}
                            <p className={`${defaultGridProductDescription()}`}>{productDescription}</p>
                        </div>
                        {/* Default Star grid frame */}
                        <div className={`${rateGridFrame_70()}`}>
                            <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' />
                            <ActionStar className='w-4 h-4 text-textColor-star-color-gray cursor-pointer' /> 
                        </div>
                    </div>
                    {/* Default Price and Button */}
                    <div className={`${defaultPriceAndButton()}`}>
                        {/* Default price and Button Content */}
                        <div className={`${defaultPriceAndButtonContent()}`}>
                            {/* Default product price */}
                            <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                            {/* Button */}
                            <Buttons variant='Colored' type='Default' size='Small' label='Buy now' />
                        </div>
                    </div>
                </div>
            </div>
        )}
        // Grid View, Border Style, Default
        else if(view === "Grid-View" && product === "Default" && style === "Border"){
            // Generate view and style
            return(
                <div className={`${generateView(view)} ${generateStyle(style)} ${className} p-4`}>
                    {/* Image */}
                    <div className={`${gridImage()}`}>
                        {/* Image */}
                        <Image src={imageUrl} className='bg-contain object-cover h-180px rounded-xl' width='237' height='180' alt={imageAlt} />
                    </div>
                    {/* Content and Buttons */}
                    <div className={`${contentAndButton()}`}>
                        {/* Frame 70 */}
                        <div className={`${SubFrame_70_Content()}`}>
                            {/* Grid Product Name/Head */}
                            <h1 className={`${gridProductHead()}`}>{productName}</h1>
                            {/* Grid Product Description */}
                            <p className={`${gridProductDescription()}`}>{productDescription}</p>
                        </div>
                        {/* Price and Button */}
                        <div className={`${priceAndButton()}`}>
                            {/* Price and Button Content */}
                            <div className={`${priceAndButtonContent()}`}>
                                {/* Product Price */}
                                <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                                {/* Button */}
                                <Buttons variant='Colored' type='Default' size='Small' label='Buy now'/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // Grid View, Default Style, Default-Rating
        else if(view === "Grid-View" && product === "Default" && style === "Default"){
            // Generate View and style
            return (
            <div className={`${generateView(view)} ${generateStyle(style)} ${className}`}>
                {/* Image */}
                <div className={`${defaultStyleGridImage()}`}>
                    {/* Images */}
                    <Image src={imageUrl} className='bg-no-repeat object-cover bg-cover h-180px rounded-xl' width='268' height='180' alt={imageAlt} />
                </div>
                {/* Content and Buttons */}
                <div className={`${defaultContentAndButton()}`}>
                    {/* Frame 70 */}
                    <div className={`${defaultSubFrame_70_Content()}`}>
                        {/* Default grid product head */}
                        <h1 className={`${defaultGridProductHead()}`}>{productName}</h1>
                        {/* Default grid product description */}
                        <p className={`${defaultGridProductDescription()}`}>{productDescription}</p>
                    </div>
                    {/* Default Price and Button */}
                    <div className={`${defaultPriceAndButton()}`}>
                        {/* Default price and Button Content */}
                        <div className={`${defaultPriceAndButtonContent()}`}>
                            {/* Default product price */}
                            <h1 className={`${generateProductHead()}`}>{productAmount}</h1>
                            {/* Button */}
                            <Buttons variant='Colored' type='Default' size='Small' label='Buy now' />
                        </div>
                    </div>
                </div>
            </div>
        )}
    else {
        return(
            <div className={`${generateView(view)} ${generateStyle(style)}`}>Error</div>
        )
    }
}

export default Product
