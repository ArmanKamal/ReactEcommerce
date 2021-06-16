import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'


const  Products = ({products,addToCart}) =>{
    const classes = useStyles();
    return (
       <main className={classes.root}>
           <div className={classes.toolbar}></div>
           <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => {
                        return (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} addToCart={addToCart}/>
                            </Grid>
                        )
                    })
                }
           </Grid>
       </main>
    )
}

export default Products
