
Note:
 [containers] process/collect/tranform data (logic/fn)
 [components] render that data (presentational)


# Shop - Mushrooms
https://dribbble.com/mashnce/collections/6093102-babes-shop
https://images.wondershare.com/mockitt/tips/carousel-01.jpg

- src/App

# Layout

- ✅ src/components/Header/Header.js // would contain navigation menu  

- ✅  src/components/Footer/Footer.js // made by Shanice

# Pages

- ✅ src/container/Home/Home.js // Contains the ProductCarousel and the ProductGallery "/"

- ✅ src/container/Product/Product.js // (has an id) allows you to add to cart and select product variants example. "/product/{id}" Calls product.js service, to fetch the products.

- ✅ src/container/Checkout/Checkout.js // [bonus] uses cart.js to fetch `CartItem`s and displays them using the CartList

- src/container/ProductPage/ProductPage.js

# Products

- ✅ src/components/ProductCard/ProductCard.js // Renders the product details. [bonus] has button to add to cart. (must prevent use from adding too many, or more than supply)

- ✅ src/components/ProductCarousel/ProductCarousel.js // Renders the ProductCards in a carousel like: https://images.wondershare.com/mockitt/tips/carousel-01.jpg

- ✅ src/components/ProductGallery/ProductGallery.js // Renders the ProductCards in a grid, has pagination

- ✅ src/services/products.js // to fetch the products from firebase

# Cart
https://dribbble.com/shots/13871755-Sections-Ecommerce-Wireframe-Kit/attachments/5479369?mode=media

- ✅ src/components/CartItem/CartItem.js // an individual cart item inside a cart list. Has button to remove and change quantity. Has individual price, name, image. (variant / size) (is the "small text" in the link). Must prevent user from adding too many to cart, or more than supply.
- ✅ src/components/CartList/CartList.js // is a list of CartItems, and a total/subtotal of their quantities
- ✅ src/services/cart.js // to fetch `CartItem` items from firestore



# Firestore Objects

example product object:

`Product`
```json
{
    "id": "face-cream",
    "name": "Face Cream",
    "image": "https://someimage.com/image.jpg",
    "size": [30, 60, 90],
    "supply": 10,
    "price": 10.20,
    "saved": false
}
```

`CartItem`
```json
{
    "qty": 2,
    "id": "face-cream"
},
```

quantity
variants (could be colors, sizes, etc)
price per unit
name
image url
favourited or not (boolean) 

All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application
