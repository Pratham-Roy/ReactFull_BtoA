import React from 'react'

function Basket({ value, baskettype }) {
    return (
        <>
            <section>
                <span>{value}</span>
                <p>{baskettype}</p>
           </section>
        </>
    )
}
export default Basket;