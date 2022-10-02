import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions=[
        
        {id:1 , name:'Free', price:0,features:[
            'Awsome Feature',
            'Extra Feature',
            'unnecessary feature',
            'will never use Feature'
        ]},
        {id:2 , name:'Medium', price:9.99,features:[
            
            'unnecessary feature',
            'will never use Feature'
        ]},
        {id:3 , name:'Premium', price:100.99,features:[
            'Awsome Feature',
            'Extra Feature',
            
            'will never use Feature'
        ]}
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white '>Best deal of the town</h2>
           <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 '>
           {
                pricingOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
            
        </div>
    );
};

export default Pricing;