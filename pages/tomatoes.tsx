import React from 'react'
import Footers from '../components/Footers'
import Product from '../components/Products/Product'
import ProductWithCategory from '../components/Products/ProductWithCategory'
import ProductWithTitle from '../components/Products/ProductWithTitle'

const tomatoes = () => {
  return (
    <div className='flex flex-col items-center'>
        <ProductWithTitle title='Tomatoes' buttonLabel='see all' imageUrl1='/images/americanTomato.jfif' imageAlt1='American Tomato' productPrice1='45.89 USD' productTitle1='American Tomatoes'
        productDescription1='American tomatoes with fresh products' imageUrl2='/images/freshTomatoes.jfif' imageAlt2='Fresh tomatoes' productPrice2='44.77 USD' productTitle2='Fresh Tomatoes' productDescription2='fuwdguofuo' 
         />
        {/* Footers */}
        <Footers variant="White" label='Copyright © 2022        Designed with ❤️ by ebridge.tech' type='Default' />
    </div>
  )
}

export default tomatoes