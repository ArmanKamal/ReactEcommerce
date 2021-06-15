import React from "react";
import { AppBar,Toolbar,IconButton,Badge,Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from './styles'


const Navbar = () => {
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
                <Typography className={classes.title} variant="h6" noWrap>
                ReactECom
                </Typography>
            
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
  );
};

export default Navbar;
