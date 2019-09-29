This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Liz's Pirate Shop

## To build on Desktop (on Mac): 
1. Open terminal
2. ```cd Desktop```
3. Clone the repo with ```git clone https://github.com/jho44/Liz_Pirate_Shop.git```
4. ```cd Liz_Pirate_Shop```
5. Install dependencies with ```npm install```
6. Start the website in browser with ```npm start```

## How  it works: 
    To add an item to your cart from the Products page, hover over your desired product image. An add-to-cart button will appear in the bottom right. Once you click it, a modal will open up saying you've added this item to your cart. To continue shopping, click on "Store". To go to your cart, click on "Go to Cart". 
    Back on the Products page, if you hover over that same added product, you'll see that you can no longer add it to the cart; further editing of that item must happen on the Cart page. 
    Once you're done shopping, you can go to the Cart page via either the modal's button or the top right corner of the navigation bar. If your cart is empty, the whole screen will just inform you of that fact. If there's items, it'll show you a list of product items. Each product item has a corresponding image, name, price, quantity, remove option, and total for that item type. There's a "Clear Cart" functionality along with a "Totals" section. 
    The "Totals" section takes into account discounts and displays them as the requirements to achieve them are fulfilled. If someone buys all available DVD types, he'll get 10% off of all DVD items. If someone buys all available Blu-Ray types, he'll get 15% off of all Blu-Ray items. Moreover, if someone purchases 100+ items, he'll get a 5% discount on the total after the first two discounts are applied.
     If one refreshes the page, a fresh slate of data will appear; previous changes will be lost. Additionally, if someone tries to manually change the URL to an unsupported page, a 404 error will be displayed.

**Notes:**
- based off of a tutorial, features of which I: 
    - deprecated (e.g., a detail page when click on product), 
    - altered (e.g., the algorithm to calculate the totals), 
    - and added to (e.g., animations and styling)
- styled primarily with styled-components and Bootstrap classNames
- linking with react-router
