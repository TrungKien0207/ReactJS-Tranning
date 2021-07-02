import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Box, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import QuantityField from '../../../components/form-controls/QuantityField'

AddToCartForm.propTypes = {
   onSubmit: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
   root: {},

   box: {},
}))

function AddToCartForm({ onSubmit = null }) {
   const classes = useStyles()

   const schema = yup.object().shape({
      quantity: yup
         .number()
         .required('Please enter quantity')
         .min(1, 'Minimum value is 1')
         .typeError('Please enter a number'),
   })

   const form = useForm({
      defaultValues: {
         quantity: 1,
      },

      resolver: yupResolver(schema),
   })

   const handleSubmit = async (values) => {
      if (onSubmit) {
         await onSubmit(values)
      }
   }

   return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
         <QuantityField name='quantity' label='Quantity' form={form} />
         <Box className={classes.box}>
            <Button
               type='submit'
               variant='contained'
               color='primary'
               fullWidth
               size='large'
               style={{ width: '16rem' }}
            >
               add to cart
            </Button>
         </Box>
      </form>
   )
}

export default AddToCartForm
