import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"

const ProductContext = React.createContext();
//Provider
//Consumer

// does heavy lifting in terms of calculations, 
// cart functionality, specifying what provider and consumer do

// functions: 
//      1. getItem
//      2. addToCart
//      3. openModal
//      4. closeModal
//      5. increment
//      6. decrement
//      7. removeItem
//      8. clearCart
//      9. addTotals

// use provider and consumer setup so don't have to 
// keep passing down props from parent to child
// anyone can just pick up the values

class ProductProvider extends Component {
    state={
        products: [], 
        cart: [],
        modalOpen: false, 
        modalProduct: detailProduct, 
        cartSubtotal: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=> {
            return {products:tempProducts}
        })
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {
                products:tempProducts, 
                cart: [...this.state.cart, product],

            };
            }, 
            () => {
                this.addTotals();
            }
        );
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(()=>  {
            return {modalOpen: false}
        })
    }

    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{return {cart:[...tempCart]}},
         ()=>{this.addTotals()})
    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(()=>{return {cart:[...tempCart]}},
                ()=>{this.addTotals()})
        }
    }

    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(()=>{
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, ()=>{
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(()=>{
            return { cart:[] };
        }, ()=>{
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        let count = 0;
        let discount = 0;
        var dvd_count = 0;
        var blu_ray_count = 0;
        var dvd_subtotal = 0;
        var blu_ray_subtotal = 0;
        var extraDiscount = 0;

        this.state.cart.map(item => (
            subTotal += item.total        
        ));
        this.state.cart.map(item => (
            count += item.count
        ));        
        this.state.cart.map(item => {
            if(item.type === "DVD") {
                dvd_count += 1;
                dvd_subtotal += item.total;
            } else if (item.type === "Blu-Ray") {
                blu_ray_count += 1;
                blu_ray_subtotal += item.total;
            }
        });
        var total = subTotal;
        var dvd_discount = 0;
        var blu_ray_discount = 0;
        if (dvd_count === 3) {
            dvd_discount = 0.10 * dvd_subtotal;
            dvd_discount = parseFloat(dvd_discount.toFixed(2));
            discount += dvd_discount;
        }
        if (blu_ray_count === 3) {
            blu_ray_discount = 0.15 * blu_ray_subtotal;
            blu_ray_discount = parseFloat(blu_ray_discount.toFixed(2));
            discount += blu_ray_discount;
        }
        total -= discount;

        if (count>=100){
            extraDiscount += total * 0.05;
            extraDiscount = parseFloat(extraDiscount.toFixed(2));
        }
        discount+=extraDiscount;
        total -= extraDiscount;

        this.setState(()=> {
            return {
                cartSubtotal: subTotal, 
                cartTotal: total,
                cartCount: count,
                cartDiscount: discount,
                cartDVDs: dvd_count,
                cartBluRays: blu_ray_count,
                DVDdiscount: dvd_discount,
                BluRaydiscount: blu_ray_discount,
                lastDiscount: extraDiscount
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement, 
                removeItem: this.removeItem, 
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};