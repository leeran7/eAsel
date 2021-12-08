import CartForm from '../components/CartForm';
import { useState, useEffect } from 'react';
import {
    Container
} from '@material-ui/core'
export default function Cart() {
  function getArtworks(data){
      const artworksData = [];
      for(let item of data){
          fetch(`/api/artworks/${item.artworkId}`)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
                console.log("FAILED GETTING ARTWORKS");
            })
            .then(data => {
                artworksData.push(data);
                setArtworks(artworksData);
            })
            .catch(err => {
                console.log(err);
            })
      }
  }
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
  }, [])
//   const [cartItems, setCartItems] = useState([]);
  const [artworks, setArtworks] = useState([]);
//   const onAdd = (product) => {
//     const exist = cartItems.find(item => item.id === product.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((item) =>
//         item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };
//   const onRemove = (product) => {
//     const exist = cartItems.find(item => item.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter(item => item.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map(item =>
//             item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
//         )
//       );
//     }
//   };
// console.log(artworks)
  return (
    <Container>
        <CartForm
          cartItems={artworks}
        //   onAdd={onAdd}
        //   onRemove={onRemove}
        ></CartForm>
    </Container>
  );
}