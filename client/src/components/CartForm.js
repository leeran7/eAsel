import { Typography, Button, Grid, 
    Box, Container, createTheme, IconButton, Snackbar  } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from '../context/AuthContext';
import LoginForm from './LoginForm';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    alert: {
      color: "black",
      backgroundColor: "#4bb543",
      fontSize: "16px",
      borderRadius: "5px",
      padding: "10px",
      fontFamily: "Roboto Condensed",
    }
  }));
export default function CartForm(props) {
    const auth = useContext(AuthContext);
    const [artworks, setArtworks] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [snackOpen , setSnackOpen] = useState(false);
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const handleSnackClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSnackOpen(false);
      };
    const getCarts = async () => {
        fetch('/api/carts')
          .then(res => {
              if(res.ok){
                  return res.json()
              }
              console.log("FAILED");
          })
          .then(async data => {
             await getArtworks(data);
             
          })
          .catch(err => {
              console.log(err);
          })
    }
    const getArtworks = async (data) => {
        let i=0;
        let urllist=[];
        for(i; i< data.length ;i++){
          const response = await fetch(`/api/artworks/${data[i].artworkId}`);
          const json = await response.json();
          urllist.push(json);
          //should we setTotalPrice(totalPrice + {json.price}) here?
        }
        setArtworks(urllist);
          
   }
    useEffect( () => {
        getCarts();
          
    }, [loading])

    function deleteItem(id){
        setLoading(true);
        fetch(`/api/carts/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setSnackOpen(true);
            setLoading(false)
        })
    }
    function handleCheckout(){
        alert('Enjoy your new buys!');
        setLoading(true);
        fetch("/api/checkout", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(() => {
                setLoading(false);
                console.log("HERE")
            })
    }
    console.log(auth)
    if(!auth.isAuthenticated && !loading) return <LoginForm from="/cart"/>;
    if(artworks.length === 0){
        return <Container style={{marginTop: "20px"}}>Cart is Empty</Container>
    }
    if(artworks.length > 0 && !loading){
        // const itemsPrice = artworks.reduce((prev, next) => prev.price + next.price);
        // const taxPrice = itemsPrice * 1.08875;
        // setTotalPrice(taxPrice)
    }
  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" spacing={3}>
            <Box
                sx={{
                    // m: 1,
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}> 
                <Grid>
                    <Typography>Qty:{artworks.length}</Typography>
                </Grid>
                <Grid>
                    <Typography>Total:${totalPrice}</Typography>
                </Grid>
                <Grid 
                    justifyContent="center"
                    alignItems="center"
                    container spacing={4}>
                        <Grid item>
                            <Button variant="contained" onClick={handleCheckout}>Checkout</Button>
                        </Grid>
                    {
                        artworks.map( artwork => {
                            // console.log(artwork)
                            return (
                              <Grid item xs={12} key={artwork.id}>
                                <Grid
                                  justifyContent="center"
                                  alignItems="center"
                                  variant="outlined"
                                  container
                                  direction="column"
                                >
                                  <img
                                    width="100%"
                                    src={artwork.uri}
                                    alt="cart item"
                                  />
                                  <Typography>${artwork.price}</Typography>
                                  <Typography>{artwork.title}</Typography>
                                  <IconButton
                                    onClick={() => deleteItem(artwork.id)}
                                  >
                                    <DeleteOutlineOutlinedIcon />
                                  </IconButton>
                                  <Snackbar
                                    open={snackOpen}
                                    autoHideDuration={2500}
                                    onClose={handleSnackClose}
                                  >
                                    <div
                                      className={classes.alert}
                                      onClose={handleSnackClose}
                                    >
                                      <Typography>
                                        deleted artwork from cart
                                      </Typography>
                                    </div>
                                  </Snackbar>
                                </Grid>
                              </Grid>
                            );
                        })
                    }
                    
                </Grid>
           
            </Box>
        </Container>
      </ThemeProvider>
    // <aside className="block col-1">
    //   <h2>Cart Items</h2>
    //   <div>
    //     
    //     {cartItems.map((item) => (
    //       <div key={item.id} className="row">
    //         <div className="col-2">{item.name}</div>
    //         <div className="col-2">
    //           <button onClick={() => onRemove(item)} className="remove">
    //             -
    //           </button>{' '}
    //           <button onClick={() => onAdd(item)} className="add">
    //             +
    //           </button>
    //         </div>

    //         <div className="col-2 text-right">
    //           {item.qty} x ${item.price}
    //         </div>
    //       </div>
    //     ))}

    //     {cartItems.length !== 0 && (
    //       <>
    //         <hr></hr>
    //         <div className="row">
    //           <div className="col-2">Items Price</div>
    //           <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
    //         </div>
    //         <div className="row">
    //           <div className="col-2">Tax Price</div>
    //           <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
    //         </div>

    //         <div className="row">
    //           <div className="col-2">
    //             <strong>Total Price</strong>
    //           </div>
    //           <div className="col-1 text-right">
    //             <strong>${totalPrice.toFixed(2)}</strong>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="row">
    //           <button onClick={() => alert('Implement Checkout!')}>
    //             Checkout
    //           </button>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </aside>
  );
}