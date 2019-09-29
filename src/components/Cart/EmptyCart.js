import React from 'react'
import styled from "styled-components"

// shown when cart is empty

export default function EmptyCart() {
    return (
        <div>
            <WholeScreen>
                <div className="text-center text-title main">
                    <h1 className="text-white font-weight-bold">your cart is currently empty</h1>
                </div>
            </WholeScreen>
        </div>
    )
}

const WholeScreen = styled.div`
    .main {
        background-image: linear-gradient(to bottom, black, #2a2a72);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
`