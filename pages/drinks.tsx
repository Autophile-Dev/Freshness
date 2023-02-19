import React from 'react'
import Cart from '../components/Cart/Cart'

const drinks = () => {
  return (
    <div className='flex mx-auto container flex-col items-center gap-3'>
      <Cart imageUrl='/images/americanTomato.jfif' imageAlt='Fresh tomatoes' productTitle='Fresh tomatoes'
     newPrice='36.78 USD' oldPrice='55.67 USD' farmName='Mian Farms' freshness='Yesterday' />
     <Cart imageUrl='/images/freshTomatoes.jfif' imageAlt='Fresh tomatoes' productTitle='Fresh tomatoes'
     newPrice='36.78 USD' oldPrice='55.67 USD' farmName='Mian Farms' freshness='Yesterday' />
    </div>
    
  )
}

export default drinks
