import { css } from '@emotion/react'
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import DotLoader from 'react-spinners/DotLoader'
import AddToCartForm from '../Components/AddToCartForm'
import ProductInfo from '../Components/ProductInfo'
import ProductMenu from '../Components/ProductMenu'
import ProductThumbnail from '../Components/ProductThumbnail'
import ProductDescription from '../Components/ProductDescription'
import ProductAdditional from '../Components/ProductAdditional'
import ProductReviews from '../Components/ProductReviews'
import useProductDetails from '../hooks/useProductDetails'

const useStyles = makeStyles((theme) => ({
   root: {},

   left: {
      width: '400px',
      padding: theme.spacing(1.5),
      borderRight: `1px solid ${theme.palette.grey[300]}`,
   },

   right: {
      padding: theme.spacing(1.5),
      flex: '1 1 0',
   },
}))

function DetailPage() {
   const classes = useStyles()

   const {
      params: { productId },
      url,
   } = useRouteMatch()

   const { product, loading } = useProductDetails(productId)

   const override = css`
      display: block;
      margin: 5rem auto;
      border-color: red;
   `

   if (loading) {
      return (
         <Box className={classes.loading}>
            <DotLoader
               color='red'
               loading={loading}
               css={override}
               size={150}
            />
         </Box>
      )
   }

   const handleAddToCartSubmit = (formValue) => {
      console.log('Form submit', formValue)
   }

   return (
      <div>
         <Box>
            <Container>
               <Paper elevation={0}>
                  <Grid container>
                     <Grid item className={classes.left}>
                        <ProductThumbnail product={product} />
                     </Grid>
                     <Grid item className={classes.right}>
                        <ProductInfo product={product} />
                        <AddToCartForm onSubmit={handleAddToCartSubmit} />
                     </Grid>
                  </Grid>
               </Paper>

               <ProductMenu />

               <Switch>
                  <Route exact path={url}>
                     <ProductDescription product={product} />
                  </Route>

                  <Route
                     path={`${url}/additional`}
                     component={ProductAdditional}
                  />

                  <Route path={`${url}/reviews`} component={ProductReviews} />
               </Switch>
            </Container>
         </Box>
      </div>
   )
}

export default DetailPage
