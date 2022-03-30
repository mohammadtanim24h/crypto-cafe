import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    return (
        <div className='shadow-lg rounded-md w-[250px] bg-white p-4'>
            <Link to='/coins'>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex-shrink-0'>
                        <img className='h-16 w-16 mx-auto object-cover rounded-full' src={coin.image} alt="coin" />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{coin.name}</span>
                        <span className='text-gray-400 text-sm'>{coin.symbol}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;