import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
   Box,
   Checkbox,
   Typography,
   FormControlLabel,
   makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.grey[300]}`,
   },

   list: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',

      '& > li': {
         margin: 0,
      },
   },
}))

FilterByService.propTypes = {
   onChange: PropTypes.func,
   filters: PropTypes.object,
}

function FilterByService({ filters = {}, onChange }) {
   const classes = useStyles()

   const handleChange = (e) => {
      if (!onChange) return

      const { name, checked } = e.target
      onChange({ [name]: checked })
   }

   return (
      <Box className={classes.root}>
         <Typography>DỊCH VỤ</Typography>

         <ul className={classes.list}>
            {[
               { value: 'isPromotion', label: 'Có khuyển mãi' },
               { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
            ]?.map((service) => (
               <li key={service.value}>
                  <FormControlLabel
                     control={
                        <Checkbox
                           checked={filters[service.value]}
                           onChange={handleChange}
                           name={service.value}
                           color='primary'
                           size='small'
                        />
                     }
                     label={service.label}
                  />
               </li>
            ))}
         </ul>
      </Box>
   )
}

export default FilterByService
