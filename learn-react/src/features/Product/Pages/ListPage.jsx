import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'
import productAPI from '../../../api/productAPI'
import FilterViewer from '../Components/Filters/FilterViewer'
import ProductFilters from '../Components/ProductFilters'
import ProductList from '../Components/ProductList'
import ProductSkeletonList from '../Components/ProductSkeletonList'
import ProductSort from '../Components/ProductSort'

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

function ListPage({ props }) {
   const classes = useStyles()

   const history = useHistory()
   const location = useLocation()
   const queryParams = useMemo(() => {
      const params = queryString.parse(location.search)

      return {
         ...params,
         _page: Number.parseInt(params._page) || 1,
         _limit: Number.parseInt(params._limit) || 12,
         _sort: params._sort || 'salePrice:ASC',
         isPromotion: params.isPromotion === 'true',
         isFreeShip: params.isFreeShip === 'true',
      }
   }, [location.search])

   const [productList, setProductList] = useState([])
   const [pagination, setPagination] = useState({
      limit: 12,
      count: 10,
      page: 1,
   })
   const [loading, setLoading] = useState(true)
   const [filters, setFilters] = useState(() => ({
      ...queryParams,
      _page: Number.parseInt(queryParams._page) || 1,
      _limit: Number.parseInt(queryParams._limit) || 12,
      _sort: queryParams._sort || 'salePrice:ASC',
   }))

   // useEffect(() => {
   //    history.push({
   //       pathname: history.location.pathname,
   //       search: queryString.stringify(filters),
   //    })
   // }, [history, filters])

   useEffect(() => {
      ;(async () => {
         try {
            const { data, pagination } = await productAPI.getAll(queryParams)
            setProductList(data)
            setPagination(pagination)
         } catch (error) {
            console.log('Fail to fetch product list: ', error)
         }
         setLoading(false)
      })()
   }, [queryParams])

   const handlePageChange = (e, page) => {
      // setFilters((prevFilters) => ({ ...prevFilters, _page: page }))

      const filters = { ...queryParams, _page: page }

      history.push({
         pathname: history.location.pathname,
         search: queryString.stringify(filters),
      })
   }

   const handleSortChange = (newValue) => {
      // setFilters((prevFilters) => ({ ...prevFilters, _sort: newValue }))

      const filters = { ...queryParams, _sort: newValue }

      history.push({
         pathname: history.location.pathname,
         search: queryString.stringify(filters),
      })
   }

   const handleFiltersChange = (newFilters) => {
      // setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))

      const filters = { ...queryParams, ...newFilters }

      history.push({
         pathname: history.location.pathname,
         search: queryString.stringify(filters),
      })
   }

   const setNewFilters = (newFilters) => {
      // setFilters(newFilters)

      history.push({
         pathname: history.location.pathname,
         search: queryString.stringify(newFilters),
      })
   }

   return (
      <Box>
         <Container>
            <Grid container spacing={1}>
               <Grid item className={classes.left}>
                  <Paper elevation={0}>
                     <ProductFilters
                        filters={queryParams}
                        onChange={handleFiltersChange}
                     />
                  </Paper>
               </Grid>

               <Grid item className={classes.right}>
                  <Paper elevation={0}>
                     <ProductSort
                        currentSort={queryParams._sort}
                        onChange={handleSortChange}
                     />

                     <FilterViewer
                        filters={queryParams}
                        onChange={setNewFilters}
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
