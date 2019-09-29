import React from 'react'
import {Link} from "react-router-dom"

// displays totals section at bottom of cart page
// includes discounts

export default function CartTotals({value}) {
    const {cartSubtotal, cartTotal, clearCart, cartCount, cartDiscount, cartDVDs, cartBluRays, DVDdiscount, BluRaydiscount, lastDiscount} = value;
    let discountOnDVD;
    let discountOnBluRay;
    let oneHundredDiscount;

    if (cartDVDs===3) {
        discountOnDVD = <p style={{color:"blue"}}>
            10% discount on DVDs for buying all the different ones! Save: ${DVDdiscount}
        </p>
    } 
    if (cartBluRays===3) {
        discountOnBluRay = <p style={{color: "blue"}}>
            15% discount on Blu-Rays for buying all the different ones! Save: ${BluRaydiscount}
        </p>
    }
    if (cartCount>=100) {
        oneHundredDiscount = <p style={{color: "blue"}}>
            5% discount on everything for buying at least 100 items! Save: ${lastDiscount}
        </p>
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                type="button" 
                                onClick={()=>clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                count :
                            </span>
                            <strong>
                                {cartCount}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>
                                $ {cartSubtotal}
                            </strong>
                        </h5>
                        <h5 style={{color: "red"}}>
                            <span className="text-title">
                                discount :
                            </span>
                            <strong>
                                $ {cartDiscount}
                            </strong>
                        </h5>
                        {discountOnDVD}
                        {discountOnBluRay}
                        {oneHundredDiscount}
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>
                                $ {cartTotal}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
