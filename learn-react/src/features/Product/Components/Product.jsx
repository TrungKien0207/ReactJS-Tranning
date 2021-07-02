import { Box, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index'
import { formatPrice } from '../../../utils'

Product.propTypes = {
   product: PropTypes.object,
}

const useStyles = makeStyles((theme) => ({
   root: {
      transition: 'all .025s',

      '&:hover': {
         cursor: 'pointer',
         color: theme.palette.primary.main,
         '& $image': {
            transform: 'scale(1.02)',
         },
      },
   },

   image: {},
}))

function Product({ product }) {
   const classes = useStyles()
   const history = useHistory()

   const thumbnailUrl = product.thumbnail
      ? `${STATIC_HOST}${product.thumbnail?.url}`
      : THUMBNAIL_PLACEHOLDER

   const handleClick = () => {
      history.push(`/products/${product.id}`)
   }

   return (
      <Box padding={1} onClick={handleClick} className={classes.root}>
         <Box padding={1} minHeight='215px' className={classes.image}>
            <img src={thumbnailUrl} alt={product.name} width='100%' />
         </Box>
         <Typography variant='body2'>{product.name}</Typography>
         <Typography variant='body2'>
            <Box component='span' fontSize='1rem' fontWeight='bold' mr={1}>
               {formatPrice(product.salePrice)}
            </Box>

            {product.promotionPercent > 0
               ? ` -${product.promotionPercent}%`
               : ''}
         </Typography>
      </Box>
   )
}

export default Product
