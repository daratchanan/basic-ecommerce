import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 250,
      margin: "0 auto"
   },
   containerGroup: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
   },
   containerBasket: {
      fontSize: 30
   }
}));

export default function ProductItem({ productDetail, cart, setCart }) {
   const classes = useStyles();
   
   const handleAddCart = () => {
      setCart([...cart, productDetail])
   };

   return (
      <Paper elevation={3} className={classes.root}>
         <Grid container direction="column" alignItems="center" >
            <Grid item >
               <img
                  style={{ objectFit: "cover" }}
                  width="100%"
                  height="145px"
                  src={productDetail.imgUrl}
                  alt="food image"
               />
            </Grid>
            <Grid item>
               <Typography
                  variant="h6"
                  noWrap={true}
               >
                  {productDetail.name}</Typography>
            </Grid>
            <Grid item>
               <div className={classes.containerGroup}>
                  <Typography variant="h5">{productDetail.price}</Typography>
                  <IconButton
                     color="primary"
                     onClick={handleAddCart}
                  >
                     <ShoppingBasketIcon className={classes.containerBasket} />
                  </IconButton>
               </div>
            </Grid>
         </Grid>
      </Paper>
   )
}
