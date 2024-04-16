import React, { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';


export const NavbarRight = () => {
    const dispatch = useDispatch();
    const { carts } = useSelector(state => state.carts);
    console.log(carts);
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center rounded-full border p-3 bg-gray-200'>
                <input className='bg-gray-200 outline-none' type="text" placeholder="Arama Yapınız..." />
                <BiSearch size={28} />
            </div>
            <AiOutlineHeart size={28} />
            <div className='relative'>
                <div className='absolute -top-3 -right-3 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex justify-center items-center'>{carts?.length}</div>
                <SlBasket size={28} />
            </div>
        </div>
    )
}
