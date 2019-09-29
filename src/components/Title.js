import React from 'react'
import styled from "styled-components"

// this takes up the big header on the products page
// will be used in ProductList.js
export default function Title({name, title}) {
    return (
        <div>
            <Header>
                <div className="fancy-header">
                    <h1 className="text-capitalize font-weight-bold text-title">
                        <strong className="text-white">{name}</strong> <strong className="text-yellow">{title}</strong>
                    </h1>
                </div>
            </Header>
        </div>
    )
}

const Header = styled.div`
    .fancy-header {
        background-image: linear-gradient(to bottom, black, var(--mainBlue));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 90vh;
        position:  relative;
    }

    // this makes the header slanted on the bottom
    .fancy-header:after {
        background: var(--mainBlue);
        content: " ";
        display: block;
        height: 50%;
        left: 0;
        position: absolute;
        right: 0;
        backface-visibility: hidden;
        bottom: 0;
        transform: skewY(-1.5deg);
        transform-origin: 100%;     
        z-index: -1;   
    }
`