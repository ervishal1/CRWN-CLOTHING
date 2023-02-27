import React,{useContext} from 'react'
import { ProductContext } from '../../../context/products.context'
import ProductCard from '../../product-card/ProductCard.component'
import './shop.style.scss'

const Shop = () => {
    const { products } = useContext(ProductContext)
  return (
    <div className='products-container'>{
        products.map((product) => (
           <ProductCard key={product.id} product={product} />
        ))
    }</div>
  )
}

export default Shop