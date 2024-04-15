import React from 'react'

const DetailCard = ({ data }) => {
    return (
        <div className='flex gap-10 my-10'>
            <img className="w-[700px] h-[500px] object-cover" src={data?.image} alt="" />
            <div className='text-2xl font-bold'>
                <div className='text-3xl font-bold'>{data?.title}</div>
                <div className='my-2 text-2xl'>{data?.description}</div>
                <div className='my-2 text-xl text-red-500'>Rating: {data?.rating?.rate}</div>
                <div className='my-2 text-xl text-red-500'>Count: {data?.count?.rate}</div>
                <div className='text-3xl font-bold'>{data?.price} <span className='text-sm'>TL</span></div>
                <div className='flex items-center gap-5 my-4'>
                    <div className='text-3xl '>-</div>
                    <input className='w-[50px] text-center' type='text' value="0" />
                    <div>+</div>
                </div>
                <div className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailCard
