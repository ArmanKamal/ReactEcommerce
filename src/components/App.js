import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import {commerce} from '../lib/commerce'
import ProductDeatil from './Products/Product/ProductDeatil'
import Cart from './Cart/Cart'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = () => {
        commerce.products.list()
        .then((product) => {
            setProducts(product.data)
        })
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart)

        
    }

    const handleAddToCart = async (productId, quantity) => {
            const item = await commerce.cart.add(productId, quantity)
            setCart(item.cart);

    }

    console.log(cart)
    
    useEffect(() => {
      
         fetchProducts();
         fetchCart();
        
    }, [])



    return (
        <Router>
            <Navbar totalItems ={cart.total_items} />
            <Switch>
                <Route exact path="/">
                    <Products products={products} addToCart={handleAddToCart}/> 
                </Route>
                <Route exact path="/cart">
                    <Cart cart={cart} />
                </Route>
             
             
            </Switch>
          
        </Router>
      
    )
}

export default App
