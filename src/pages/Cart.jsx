import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts);
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, itemCount])
    return (
        <div>
            {
                carts?.length > 0 ? <div>
                    {
                        carts.map((cart, i) => (
                            <CartComp key={i} cart={cart} />
                        ))
                    }
                    <div className='flex items-center justify-end text-2xl'>Toplam Tutar :  <span className='font-bold text-3xl ml-2'>{totalAmount}TL</span></div>
                </div> :
                    <div>Kartınız Boş...</div>
            }
        </div>
    )
}

export default Cart
