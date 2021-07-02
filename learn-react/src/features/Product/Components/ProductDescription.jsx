import { Paper } from '@material-ui/core'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'
import React from 'react'

ProductDescription.propTypes = {
   product: PropTypes.object,
}

function ProductDescription({ product = {} }) {
   var clean = DOMPurify.sanitize(product.description)
   return (
      <Paper elevation={0} style={{ padding: '1rem' }}>
         <div dangerouslySetInnerHTML={{ __html: clean }} />
      </Paper>
   )
}

export default ProductDescription
