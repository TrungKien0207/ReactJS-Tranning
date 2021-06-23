import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import React, { useEffect, useState } from 'react'
import productAPI from '../../../api/productAPI'
import ProductList from '../Components/ProductList'
import ProductSkeletonList from '../Components/ProductSkeletonList'
import ProductSort from '../Components/ProductSort'
import ProductFilters from '../Components/ProductFilters'

ListPage.propTypes = {}

const useStyles = makeStyles((theme) => ({
   root: {},

   left: {
      width: '250px',
   },

   right: {
      flex: '1 1 0',
   },

   pagination: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      marginTop: '1.5rem',
      paddingBottom: '1rem',
   },
}))

function ListPage(props) {
   const classes = useStyles()
   const [productList, setProductList] = useState([])
   const [pagination, setPagination] = useState({
      limit: 12,
      count: 10,
      page: 1,
   })
   const [loading, setLoading] = useState(true)
   const [filters, setFilters] = useState({
      _page: 1,
      _limit: 12,
      _sort: 'salePrice:ASC',
   })

   useEffect(() => {
      ;(async () => {
         try {
            const { data, pagination } = await productAPI.getAll(filters)
            setProductList(data)
            setPagination(pagination)
         } catch (error) {
            console.log('Fail to fetch product list: ', error)
         }
         setLoading(false)
      })()
   }, [filters])

   const handlePageChange = (e, page) => {
      setFilters((prevFilters) => ({ ...prevFilters, _page: page }))
   }

   const handleSortChange = (newValue) => {
      setFilters((prevFilters) => ({ ...prevFilters, _sort: newValue }))
   }

   const handleFiltersChange = (newFilters) => {
      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
   }

   return (
      <Box>
         <Container>
            <Grid container spacing={1}>
               <Grid item className={classes.left}>
                  <Paper elevation={0}>
                     <ProductFilters filters={filters} onChange={handleFiltersChange}/>
                  </Paper>
               </Grid>

               <Grid item className={classes.right}>
                  <Paper elevation={0}>
                     <ProductSort
                        currentSort={filters._sort}
                        onChange={handleSortChange}
                     />

                     {loading ? (
                        <ProductSkeletonList length={12}></ProductSkeletonList>
                     ) : (
                        <ProductList data={productList} />
                     )}

                     <Box className={classes.pagination}>
                        <Pagination
                           color='primary'
                           count={Math.ceil(
                              pagination.count / pagination.limit
                           )}
                           page={pagination.page}
                           onChange={handlePageChange}
                        ></Pagination>
                     </Box>
                  </Paper>
               </Grid>
            </Grid>
         </Container>
      </Box>
   )
}

export default ListPage
