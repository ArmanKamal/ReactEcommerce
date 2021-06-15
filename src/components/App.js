import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import {commerce} from '../lib/commerce'

function App() {
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        commerce.products.list()
        .then((product) => {
            setProducts(product.data)
        })
    }

    
    useEffect(() => {
      
         fetchProducts();
        
    }, [])



    return (
        <React.Fragment>
            <Navbar />
            <Products products={products}/>
        </React.Fragment>
    )
}

export default App
