import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

InputField.propTypes = {
   form: PropTypes.object.isRequired, //quan trong
   name: PropTypes.string.isRequired, //quan trong

   label: PropTypes.string,
   disabled: PropTypes.bool,
}

function InputField(props) {
   const { form, name, label, disabled } = props
   const { errors } = form
   const hasError = errors[name]

   return (
      <Controller
         name={name} //bat buoc
         control={form.control} //bat buoc
         render={({ name, onChange, onBlur, value }) => (
            <TextField
               id='outlined-size-small'
               defaultValue='normal'
               size='normal'
               margin='normal'
               variant='outlined'
               fullWidth
               label={label}
               disabled={disabled}
               error={!!hasError} //vi de cho errors tra ve boolean
               helperText={errors[name]?.message} //"?" khong chac message co san(valid)
               value={value}
               onChange={onChange}
               onBlur={onBlur}
            />
         )}
      />
   )
}

export default InputField
