import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import CartItem from '../components/CartItem';

const useStyles = makeStyles((theme) => ({
   
   cartHeader: {
      display: "flex",
      justifyContent: "space-between"
   },
   cartBody: {
      display: "flex",
      justifyContent: "space-between"
   }

}));

export default function CartPage() {
   const classes = useStyles();

   return (
      <div>
         <Container maxWidth="md">
           
               <div className={classes.cartHeader}>
                  <h3>รายการอาหาร</h3>
                  <h3>ราคา</h3>
               </div>
               <CartItem />
           
         </Container>
      </div>
   )
}
