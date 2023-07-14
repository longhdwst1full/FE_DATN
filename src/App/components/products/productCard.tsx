import React from 'react'
import { IProduct } from '~/App/types/products'

type ProductList = {
    product: IProduct
}

const ProductCard = ({ product }: ProductList) => {
    // console.log(product)
    return <>
        {product && (
            <div>
            {product.images && product.images.length > 0 ? (
                <img
                    src={product.images[0]}
                    className="w-full h-64 mr-2"
                    alt={product.name}
                />
            ) : (
                <img
                    src=""
                    alt={product.name}
                    className="w-full h-64 mr-2"
                />
            )}
            <div className="flex flex-col items-center">
                <div className="mb-2">
                    <span className="font-bold">{product.name}</span>
                </div>
                <div className="flex items-center justify-center">
                    <span className="ml-2">${product.salePrice} <del>{product.price}</del></span>
                </div>
            </div>
        </div>
        )
            
        }
    </>
}

export default ProductCard