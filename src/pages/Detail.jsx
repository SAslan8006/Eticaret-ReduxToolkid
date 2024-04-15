import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../redux/productsSlice';
import DetailCard from '../components/detail/DetailCard';
import Loading from '../components/Loading';
import { STATUS } from '../utils/status';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id])
    console.log(productDetail)
    return (
        <div>{
            productDetailStatus === STATUS.LOADING ? <Loading /> : <DetailCard data={productDetail} />
        }

        </div>
    )
}

export default Detail
