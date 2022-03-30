import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center items-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-grey-600'>Crypto Cafe</Link>
            </div>
            <div className='flex text-xl gap-4'>
                <CustomLink className='m-3' to='/'>Home</CustomLink>
                <CustomLink className='m-3' to='/coins'>Coins</CustomLink>
                <CustomLink className='m-3' to='/contact'>Contact</CustomLink>
                <CustomLink className='m-3' to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;