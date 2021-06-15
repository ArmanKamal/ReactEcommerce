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
            image={product.media.source}
            title={product.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {product.name}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" component="p" />
            <Typography  variant="h5" component="h2">
               {product.price.formatted_with_symbol}
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
