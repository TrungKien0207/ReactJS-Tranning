import { FormHelperText, TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

PasswordField.propTypes = {
   form: PropTypes.object.isRequired, //quan trong
   name: PropTypes.string.isRequired, //quan trong

   label: PropTypes.string,
   disabled: PropTypes.bool,
}

function PasswordField(props) {
   const { form, name, label, disabled } = props
   const { errors } = form
   const hasError = !!errors[name]
   // console.log(errors[name], formState.touched[name]);
   const [showPassword, setShowPassword] = useState(false)

   const toggleShowPassword = () => {
      setShowPassword((x) => !x)
   }

   return (
      <FormControl
         fullWidth
         variant='outlined'
         margin='normal'
         id='outlined-size-small'
         defaultValue='normal'
         size='normal'
         error={hasError}
      >
         <InputLabel htmlFor={name}>{label}</InputLabel>
         <Controller
            name={name} //bat buoc
            control={form.control} //bat buoc
            render={({ name, onChange, onBlur, value }) => (
               <OutlinedInput
                  id={name}
                  type={showPassword ? 'text' : 'password'}
                  label={label}
                  endAdornment={
                     <InputAdornment position='end'>
                        <IconButton
                           aria-label='toggle password visibility'
                           onClick={toggleShowPassword}
                           edge='end'
                        >
                           {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                     </InputAdornment>
                  }
                  disabled={disabled}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
               />
            )}
         />

         <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
   )
}

export default PasswordField
