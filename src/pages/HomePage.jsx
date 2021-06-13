import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { useState } from 'react';
import ProductItem from '../components/ProductItem'
import { products } from "../data/products";


export default function HomePage() {
   const [cart, setCart] = useState([]);

   return (
      <Container maxWidth="md">
         <Grid container spacing={2} style={{ marginTop: "10px" }}>
            {products.map(product =>
               <Grid key={product.id} item xs={12} sm={4} md={3}>
                  <ProductItem
                     productDetail={product}
                     cart={cart}
                     setCart={setCart}
                  />
               </Grid>
            )}

         </Grid>

      </Container>
   )
}
