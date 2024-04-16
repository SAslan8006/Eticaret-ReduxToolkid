import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailCard = ({ data }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const increment = () => {
        if (quantity < data.rating?.count)
            setQuantity(quantity + 1)
    }
    const addBasket = () => {
        dispatch(addToCart({ id: data?.id, title: data?.title, price: data?.price, image: data?.image, quantity: quantity }));
    }
    return (
        <div className='flex gap-10 my-10'>
            <img className="w-[700px] h-[500px] object-cover" src={data?.image} alt="" />
            <div className='text-2xl font-bold'>
                <div className='text-3xl font-bold'>{data?.title}</div>
                <div className='my-2 text-2xl'>{data?.description}</div>
                <div className='my-2 text-xl text-red-500'>Rating: {data?.rating?.rate}</div>
                <div className='my-2 text-xl text-red-500'>Count: {data?.rating?.count}</div>
                <div className='text-3xl font-bold'>{data?.price} <span className='text-sm'>TL</span></div>
                <div className='flex items-center gap-5 my-4'>
                    <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
                    <input className='w-12 text-center' type='text' value={quantity} />
                    <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
                </div>
                <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailCard
