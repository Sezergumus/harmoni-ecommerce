import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import products from '@/json/data.json'

export default function Featured() {
    const featuredProducts = products;
    const featuredProductsArray = Object.values(featuredProducts);

    return (
        <section className="featured-container mt-24">
            <div className="container">
                <h2 className='font-bold text-2xl'>Featured Products ⭐</h2>
                <div className="featured-grid mt-4">
                    {
                        featuredProductsArray.map((product, index) => {
                            if(product.featured === true){
                                return (
                                    <div className="featured-product" key={index}>
                                    <Link href={`/products/${product.id}`}>
                                        <div className="featured-product-img">
                                            <Image src={product.image} alt="featured product" width={500} height={500}/>
                                        </div>
                                        <div className="featured-product-details">
                                            <div className="featured-product-name">
                                                <p>{product.name}</p>
                                            </div>
                                            <div className="featured-product-price">
                                                <p><b>{product.price}</b></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                )
                            }
                    })}
                </div>
            </div>
        </section>
    )
}
