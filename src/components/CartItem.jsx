import { Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
   // root: {
   //    width: 912,
   //    // margin: "16px 0"
   // },
   containerGroup: {
      display: "flex",
      justifyContent: "space-between",
      padding: "16px"
   },
   container: {
      display: "flex",
      justifyContent: "space-between",
   },
   containerImg: {
      width: 150
   },
   containerText: {
      paddingLeft: "16px"
   }
}));

export default function CartItem() {
   const classes = useStyles();

   return (
      <>
         <Paper className={classes.root}>
            <div className={classes.containerGroup}>
               <div className={classes.container}>
                  <img
                     className={classes.containerImg}
                     src="https://yayoirestaurants.com/productimages/thumbs/9491__AW-Yayoi-Hunter-Party_Website----()-+-----880-x-800-px.jpg"
                     alt="food image"
                  />
                  <Typography className={classes.containerText}>ฮันเตอร์ ปาร์ตี้ (ซอสฮัมเบิร์ก)</Typography>
               </div>
               <Typography variant="h6">฿ 718</Typography>
            </div>
            <Divider />
         </Paper>

         <Paper className={classes.root}>
            <div className={classes.containerGroup}>
               <div className={classes.container}>
                  <img
                     className={classes.containerImg}
                     src="https://yayoirestaurants.com/productimages/thumbs/9491__AW-Yayoi-Hunter-Party_Website----()-+-----880-x-800-px.jpg"
                     alt="food image"
                  />
                  <Typography className={classes.containerText}>ฮันเตอร์ ปาร์ตี้ (ซอสฮัมเบิร์ก)</Typography>
               </div>
               <Typography variant="h6">฿ 718</Typography>
            </div>
            <Divider />
         </Paper>
      </>
   )
}
