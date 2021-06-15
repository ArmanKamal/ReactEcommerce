import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles'

const Product = ({product}) => {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
    
            <CardMedia
            className={classes.media}
            image={product.image}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography  variant="h5" component="h2">
               ${product.price}
            </Typography>
            </CardContent>
        <CardActions className={classes.cartIcon}>
            <IconButton  aria-label="Add to Cart">
              <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  );
};

export default Product;
