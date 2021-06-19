import React from "react";
import { AppBar,Toolbar,IconButton,Badge,Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
  
    return (
        <AppBar position="fixed" className={classes.navBar}>
            <Toolbar className={classes.toolBar}>
                <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                >
            
                </IconButton>
                <Typography component={Link} to="/" className={classes.title} variant="h6" noWrap>
                ReactECom
                </Typography>
            
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
  );
};

export default Navbar;
