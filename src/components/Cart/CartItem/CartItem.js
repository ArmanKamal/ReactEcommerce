import React from 'react'
import {Typography, Button, Card,CardMedia, CardContent, Avatar} from '@material-ui/core'

import useStyles from './styles'

function CartItem({item,onUpdateCart,onRemoveCart}) {
    const classes = useStyles()
 
    return (
       
        <Card className={classes.root}>
            <CardMedia src={item.media.source} className={classes.media}/>
        
            <CardContent className={classes.cardContent}>
                <Typography variant="h4" className={classes.cardTitle}>{item.name}</Typography>
                <Typography variant="h5" className={classes.cardPrice}>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
              <div className={classes.CardAction}>
                <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => onUpdateCart(item.id,item.quantity-1)}>-</Button>
                        <Typography variant="h4">{item.quantity}</Typography>   
                        <Button type="button" size="small" onClick={() => onUpdateCart(item.id,item.quantity+1)}>+</Button>
                    </div>
                    <Button variant ="contained" type="button" size="small" color="secondary" onClick={() => onRemoveCart((item.id))}>Remove</Button>
              </div>
              
        
        </Card>
    )
}

export default CartItem
