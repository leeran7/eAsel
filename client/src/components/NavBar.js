import React, { useState, useContext } from 'react';

import { AppBar, Toolbar, Grid

} from '@material-ui/core/';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../img/logo.png';

import { IconButton, Link, Container, Hidden, SwipeableDrawer,
    Divider, List, ListItem, Badge
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRightSharp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AuthButton from './AuthButton';
import { AuthContext } from '../context/AuthContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const navigationLinks = [
    { name: "Artists", href: "/artistlist" },
    { name: "Sell", href: "/sellwithus" },
    { name: <Badge color="secondary" variant="dot" ><ShoppingCartOutlinedIcon /></Badge>, href: "/cart" }
];

const useStyles = makeStyles((theme) => ({
    appbar: {
        flexGrow: 1,
        // backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
    },
    link: {
        marginRight: '20px',
    },
    menuButton: {
        marginLeft: theme.spacing(1),
    },
    logo: {
        flexGrow: 1,
        maxWidth: 80,
        marginRight: "auto",
    },
}));

const Navbar = () => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    const auth = useContext(AuthContext);
    return (
        <AppBar elevation={0} className={styles.appbar} >
            <Container maxWidth="md">
                
                <Toolbar>
                    <Grid item>
                            <Link href="/" >
                                <img src={logo} alt="logo" className={styles.logo} />
                            </Link>
                        </Grid>
                    <Grid
                        alignItems="center"
                        justifyContent="flex-end"
                        container
                        // spacing={12}
                    >
                        
                        
                        <Hidden xsDown>
                            
                            {navigationLinks.map((item) => (
                                <Link
                                    className={styles.link}
                                    color="textPrimary"
                                    variant="button"
                                    underline="none"
                                    href={item.href}
                                    key={item.name}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <AuthButton />
                        </Hidden>
                        
                        <Grid item>
                            {auth.isAuthenticated && 
                                <>
                                        <IconButton
                                        color="secondary"
                                        href={"/profile"} //get ModalDialog to open when pressing the customer icon
                                    >
                                        <AccountCircleOutlinedIcon fontSize="large" />
                                    </IconButton>
                                </>
                            }
                        </Grid>

                        <Grid item>
                            <Hidden smUp>
                                <IconButton onClick={() => setOpen(true)}>
                                    <MenuIcon fontSize="large" color="secondary" />
                                </IconButton>
                            </Hidden>
                        </Grid>
                    </Grid>
                    
                </Toolbar>
                
            </Container>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <div
                    onClick={() => setOpen(false)}
                    onKeyPress={() => setOpen(false)}
                    role="button"
                    tabIndex={0}>
                    <IconButton>
                        <ChevronRightIcon color="secondary" />
                    </IconButton>
                </div>

                <Divider />

                <List>
                    <AuthButton />
                    {
                    // auth.isAuthenticated ?
                        (navigationLinks.map((item) => (
                        <ListItem key={item.name}>
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                underline="none"
                                href={item.href}
                            >
                                {item.name}
                            </Link>

                        </ListItem>
                    )))
                        //     :
                        // <ListItem >
                        //     <Link
                        //         className={styles.link}
                        //         color="textPrimary"
                        //         variant="button"
                        //         underline="none"
                        //         href={navigationLinks[0].href}
                        //     >
                        //         {navigationLinks[0].name}
                        //     </Link>

                        // </ListItem>
                }
                    
                    
                </List>
            </SwipeableDrawer>
        </AppBar>

    );
};
export default Navbar;