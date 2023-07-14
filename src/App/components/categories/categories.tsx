import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { ICategory } from '~/App/types/category';
import { getAllCategory } from '~/App/apis/categories';


type Props = {}

const Categories = (props: Props) => {
    const [category, setCategory] = useState<ICategory[]>([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getAllCategory();
                setCategory(data.docs);
                console.log(data.docs)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return <>
        <div className=" h-full w-60 flex flex-col  justify-start ml-4">
            <div className="mt-4 ">
                {category.map((item, index) => (
                    <div className='relative ' key={item._id}>
                        <button
                            className="py-2 px-1 mb-2 mt-3 w-full   relative border-black text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex items-center justify-between "
                        >
                            <span className=''>{item.name}</span>
                            <span>
                                <PlusOutlined />
                            </span>
                        </button>
                        <div className="h-0.5 bg-black absolute bottom-0 left-1/4 right-1/4"></div>
                    </div>
                ))}
            </div>

        </div>
    </>
}

export default Categories