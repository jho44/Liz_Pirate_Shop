import React from 'react'
import CartItem from "./CartItem"

// list of cart items, as defined in CartItem.js

export default function CartList({value}) {
    const {cart} = value

    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    )
}
