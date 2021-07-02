import {
   Box,
   FormHelperText,
   IconButton,
   makeStyles,
   Typography,
} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

QuantityField.propTypes = {
   form: PropTypes.object.isRequired, //quan trong
   name: PropTypes.string.isRequired, //quan trong

   label: PropTypes.string,
   disabled: PropTypes.bool,
}

const useStyles = makeStyles((theme) => ({
   root: {},

   box: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',

      maxWidth: '12rem',
   },
}))

function QuantityField(props) {
   const classes = useStyles()
   const { form, name, label, disabled } = props
   const { errors, setValue } = form

   const hasError = !!errors[name]

   return (
      <FormControl
         fullWidth
         variant='outlined'
         margin='normal'
         id='outlined-size-small'
         defaultValue='normal'
         size='normal'
         error={hasError}
         size='small'
         className={classes.root}
      >
         <Typography>{label}</Typography>
         <Controller
            name={name} //bat buoc
            control={form.control} //bat buoc
            render={({ name, onChange, onBlur, value }) => (
               <Box className={classes.box}>
                  <IconButton
                     onClick={() =>
                        setValue(
                           name,
                           Number.parseInt(value)
                              ? Number.parseInt(value) - 1
                              : 1
                        )
                     }
                  >
                     <RemoveCircleOutlineIcon />
                  </IconButton>

                  <OutlinedInput
                     id={name}
                     type='number'
                     disabled={disabled}
                     value={value}
                     onChange={onChange}
                     onBlur={onBlur}
                  />

                  <IconButton
                     onClick={() =>
                        setValue(
                           name,
                           Number.parseInt(value)
                              ? Number.parseInt(value) + 1
                              : 1
                        )
                     }
                  >
                     <AddCircleOutlineIcon />
                  </IconButton>
               </Box>
            )}
         />

         <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
   )
}

export default QuantityField
