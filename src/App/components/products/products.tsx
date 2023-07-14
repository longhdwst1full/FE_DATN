import React, { useEffect, useState } from 'react'
import image from '../../../Image/image1.jpg'
import { IProduct } from '~/App/types/products'
import { getAllProducts } from '~/App/apis/products'
import ProductCard from './productCard'
import { DownOutlined } from '@ant-design/icons';


type Props = {}

type CategoriesProps = {
    setSelectedCategory: (category: string | number | undefined) => void;
    selectedCategory: string | number |undefined;
};

const Products = ({ selectedCategory }: CategoriesProps) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [limit, setLimit] = useState<number>(9)

    // console.log(selectedCategory)
    useEffect(()=>{
        if(String(selectedCategory)!="" || selectedOption != ""){
            setLimit(10000)
        }
    },[selectedCategory,selectedOption,limit])
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getAllProducts(limit);
                
                
                if ( String(selectedCategory) !== '') {
                    let productFill:IProduct[] = data.docs;
                    productFill = productFill.filter(
                        (product) => String(product.category._id) == String(selectedCategory)
                            
                        
                    );
                    setProducts(productFill);
                }
                else {
                    setProducts(data.docs);
                }
                
            } catch (error) {
                console.log(error);
            }
        })();
    }, [selectedCategory,selectedOption,limit]);
    return <>
        <div className="flex-grow h-full flex flex-col justify-end ml-4">
            <div className="mb-4 flex justify-end border-transparent focus:outline-none focus:shadow-none">
                <select className="px-4 py-2  rounded ml-auto mr-4"
                    value={selectedOption}
                    onChange={(e) => {setSelectedOption(e.target.value)}}
                >
                    <option value="">All</option>
                    <option value="5000">Trên 5000</option>
                    <option value="20000">Trên 20000</option>
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
                {products
                    .filter((product) => {
                        if (selectedOption == '') {
                            return true; // Hiển thị tất cả sản phẩm nếu không có lựa chọn
                        } else if (selectedOption == '5000') {
                            return product.price > 5000; // Lọc các sản phẩm có giá trên 10,000
                        } else if (selectedOption == '20000') {
                            return product.price > 20000; // Lọc các sản phẩm có giá trên 20,000
                        }
                        return false;
                    })
                    .map((product, i) => <ProductCard key={i} product={product} />
                )}
            </div>
            <button className=' flex justify-end mt-10' onClick={()=>setLimit(limit+9)}>Xem thêm <DownOutlined/></button>
        </div>
        
    </>
}

export default Products