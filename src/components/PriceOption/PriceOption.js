import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PriceOption = ({option}) => {
    console.log(option)
    const{name,price,features}=option;
    console.log(features)
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-2'>
            <div>
                <h3>
                <span className='text-6xl font-bold text-yellow-50'>{price}</span>
                <span className='text-2xl text-cyan-50'>/month</span>
                </h3>
                
                <p className='text-3xl my-4'>{name}</p>
            </div>
            
            <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500 "/>
            <p className='text-2xl font-bold text-cyan-50 ml-3 '>Awsome Feature </p>
            </div>
            {
                features.map(feature=><li className='text-left'>{feature}</li>)
            }
            
        </div>
    );
};

export default PriceOption;