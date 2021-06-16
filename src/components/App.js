import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import {commerce} from '../lib/commerce'


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
        <React.Fragment>
            <Navbar totalItems ={cart.total_items} />
            <Products products={products} addToCart={handleAddToCart}/>
        </React.Fragment>
    )
}

export default App
