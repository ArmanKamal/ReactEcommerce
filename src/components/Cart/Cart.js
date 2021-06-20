import React from 'react'
import {Container,Typography,Button,Grid,CartMedia} from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import useStyles from './styles'


const  Cart = ({cart,handleEmptyCart,handleUpdateCart,handleRemoveCart})  =>{
    const classes = useStyles();

    const ProductCart = () => {
        return(
            <React.Fragment>
                <Grid container spacing={3}>
                        {cart.line_items.map((item) => (
                            <Grid item xs={12} sm={12} key={item.id}>
                                <CartItem item={item} onUpdateCart={handleUpdateCart} onRemoveCart={handleRemoveCart} />
                            </Grid>
                        ))}
                </Grid>
                <div className={classes.cartDetail}>
                    <Typography variant="h4">SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div className={classes.subButton}>
                         <Button className={classes.emptyButton} size="large" type="button" onClick={handleEmptyCart} variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                        
                </div>
            </React.Fragment>
        )
    }
    
    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            {  !cart.line_items.length? <Typography variant="subtitle1">Your shopping cart is empty, <Link to="/">please start adding!</Link></Typography> : <ProductCart />}
        </Container>
    )
}

export default Cart
