import { Typography, Paper, Button, Grid, Box, Container, createTheme, IconButton  } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import React, { useState, useEffect } from 'react';

const theme = createTheme();

export default function CartForm(props) {
    const [artworks, setArtworks] = useState([]);
    
    useEffect(() => {
        
        fetch('/api/carts')
          .then(res => {
              if(res.ok){
                  return res.json()
              }
              console.log("FAILED");
          })
          .then(data => {
              getArtworks(data);
          })
          .catch(err => {
              console.log(err);
          })
          const getArtworks = async (data) => {
            let i=0;
            let urllist=[];
            for(i; i< data.length ;i++){
                const response = await fetch(`/api/artworks/${data[i].artworkId}`)
                const json = await response.json();
                urllist.push(json)
                // console.log({urllist})
              }
              setArtworks(urllist);
           }
    }, [])
    function deleteItem(e){
        console.log(e.target);
    }
//   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   const taxPrice = itemsPrice * 0.08;
//   const totalPrice = itemsPrice + taxPrice;
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
                }}
            > 
                <Grid container spacing={4}>
                    {
                        artworks.map( artwork => {
                            // console.log(artwork)
                            return (
                                <Grid item 
                                    xs={12}
                                    
                                    key={artwork.id}>
                                    <Paper
                                        variant="outlined"
                                        >
                                        <img width="100%" src={artwork.uri} alt="cart item"/>
                                        <Typography>{artwork.price}</Typography>
                                        <Typography>{artwork.title}</Typography>
                                        <Typography>{artwork.title}</Typography>
                                        <Typography>{artwork.title}</Typography>
                                        
                                    </Paper>
                                    <IconButton onClick={deleteItem} ><DeleteOutlineOutlinedIcon /></IconButton>
                                </Grid>)
                        })
                    }
                </Grid>
            </Box>
        </Container>
      </ThemeProvider>
    // <aside className="block col-1">
    //   <h2>Cart Items</h2>
    //   <div>
    //     {cartItems.length === 0 && <div>Cart is empty</div>}
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