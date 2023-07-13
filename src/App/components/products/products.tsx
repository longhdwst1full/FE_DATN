import React, { useEffect, useState } from 'react'
import image from '../../../Image/image1.jpg'
import { IProduct } from '~/App/interfaces/products'
import { getAllProducts } from '~/App/apis/products'
import ProductCard from './productCard'


type Props = {}

const Products = (props: Props) => {
    const [products,setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        (async () => {
          try {
            const { data } = await getAllProducts();
            setProducts(data.docs);
            // console.log(data.docs)
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);
    return <>
        <div className="flex-grow h-full flex flex-col justify-end ml-4">
            <div className="mb-4 flex justify-end border-transparent focus:outline-none focus:shadow-none">
                <select className="px-4 py-2  rounded ml-auto mr-4">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {/* <div>
                    <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                    <div className="flex flex-col items-center">
                        <div className="mb-2">
                            <span className="font-bold">Product 3</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="ml-2">- $20</span>
                        </div>
                    </div>
                </div> */}
                {products.map((product,i)=> <ProductCard key={i} product={product}/>)}
            </div>
            

        </div>
    </>
}

export default Products