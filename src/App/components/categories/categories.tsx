import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';


type Props = {}

const Categories = (props: Props) => {
    const [dropdownStates, setDropdownStates] = useState<boolean[]>([false, false, false]);

    const toggleDropdown = (index: number) => {
        const updatedDropdownStates = [...dropdownStates];
        updatedDropdownStates[index] = !updatedDropdownStates[index];
        setDropdownStates(updatedDropdownStates);
    };

    const sidebarData = [
        { label: 'Button 1', icon: <PlusOutlined /> },
        { label: 'Button 2', icon: <PlusOutlined /> },
        { label: 'Button 3', icon: <PlusOutlined /> },
    ];
    return <>
        <div className=" h-full w-60 flex flex-col  justify-start ml-4">
            <div className="mt-4 ">
                {sidebarData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='relative '>
                            <button
                                className="py-2 px-1 mb-2 mt-3 w-full   relative border-black text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex items-center justify-between "
                                onClick={() => toggleDropdown(index)}
                            >
                                <span className=''>{item.label}</span>
                                <span
                                    className={`transform transition-transform ${dropdownStates[index] ? 'rotate-45' : ''
                                        }`}
                                >
                                    {item.icon}
                                </span>

                            </button>
                            {dropdownStates[index] && (
                                <ul className="w-full text-gray-700 shadow-lg  py-2 mb-5 ">
                                    <li className="px-4 py-2  hover:bg-gray-300 ">
                                        <input type="checkbox" className="mr-7" />
                                        Action 1
                                    </li>
                                    <li className="px-4 py-2  hover:bg-gray-300 hover:text-gray-900">
                                        <input type="checkbox" className="mr-7" />
                                        Action 2
                                    </li>
                                    <li className="px-4 py-2  hover:bg-gray-300 hover:text-gray-900">
                                        <input type="checkbox" className="mr-7" />
                                        Action 3
                                    </li>
                                </ul>
                            )}
                            <div className="h-0.5 bg-black absolute bottom-0 left-1/4 right-1/4"></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>

        </div>
    </>
}

export default Categories