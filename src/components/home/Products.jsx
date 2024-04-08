import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts } from '../../redux/productsSlice';
import { STATUS } from '../../utils/status';
import Loading from './../Loading';
import Product from './Product';

const Products = ({ category, sort }) => {
    const dispatch = useDispatch()
    const { products, productsStatus } = useSelector(state => state.products)
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    console.log(products)
    console.log(productsStatus)
    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category))
        } else {
            dispatch(getProducts())
        }
    }, [dispatch, category, sort])
    return (
        <div>
            {
                productsStatus === STATUS.LOADING ? <Loading /> :
                    <>
                        <div className='flex flex-wrap'>
                            {
                                currentItems?.sort((a, b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null).map((product, i) => (
                                    <Product product={product} key={i} />
                                ))}
                        </div>
                        <ReactPaginate
                            className='paginate'
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }
        </div>
    )
}

export default Products
