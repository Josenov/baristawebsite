import React, { useContext } from 'react'
import { ProductsData } from './ProductsData'
import CartContext from '../context/CartContext'


const Products = () => {
    const {addToCart} = useContext(CartContext)
  return (
    <div className='flex flex-col'>
    <div className='text-center flex justify-center'>
        <p>Otros Productos</p>
        </div>

        <div className='md:flex gap-10'>
        
        {ProductsData.map((product, i) =>(
            <div className='flex items-center flex-col justify-center mt-5' key={i}>
                <img className='h-36 w-auto ' src={product.image} alt="" />
                <div>
                    <p className='text-sm'>
                        {product.name} - $ {product.price}
                    </p>
                </div>

                <button onClick={()=>addToCart({id: product.id, name: product.name, image:product.image, price: product.price})} className='p-3 rounded-full md:w-36 h-8 mt-3  flex items-center justify-center text-sm bg-[#C8A178] hover:bg-[#B0662E] text-white' > Agregar al carrito</button>
            </div>
        ))}
    </div>
    
    </div>
    
  )
}

export default Products