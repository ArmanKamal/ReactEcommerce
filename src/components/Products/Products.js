import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Product/Product'
const products = [
    {
        id:1,
        name:"Watch",
        description:"Rolex watch",
        price:39.99,
        image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80"
    },
    {
        id:2,
        name:"Iphone10",
        description:"Smartphone with siri",
        price:99.99,
        image:"https://images.unsplash.com/photo-1606341802409-aceb7ebbec1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
    }
]


const  Products = () =>{
    return (
       <main>
           <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => {
                        return (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} />
                            </Grid>
                        )
                    })
                }
           </Grid>
       </main>
    )
}

export default Products
