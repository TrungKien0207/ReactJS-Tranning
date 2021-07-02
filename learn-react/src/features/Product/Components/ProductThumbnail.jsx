import { Box, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index'

ProductThumbnail.propTypes = {
   product: PropTypes.object,
}

const useStyles = makeStyles((theme) => ({
   root: {},

   image: {
      borderRadius: '0.2rem',
   },
}))

function ProductThumbnail({ product }) {
   const classes = useStyles()

   const thumbnailUrl = product?.thumbnail
      ? `${STATIC_HOST}${product.thumbnail?.url}`
      : THUMBNAIL_PLACEHOLDER

   return (
      <Box>
         <img
            className={classes.image}
            src={thumbnailUrl}
            alt={product?.name}
            width='100%'
         />
      </Box>
   )
}

export default ProductThumbnail
