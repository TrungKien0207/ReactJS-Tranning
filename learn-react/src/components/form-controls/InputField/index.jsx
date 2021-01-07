import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired, //quan trong
    name: PropTypes.string.isRequired, //quan trong

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    const {errors, formState} = form;
    const hasError = formState.touched[name] && errors[name];
    console.log(errors[name], formState.touched[name]);

    return (
        <Controller
            name={name} //bat buoc
            control={form.control} //bat buoc
            as={TextField}

            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError} //vi de cho errors tra ve boolean
            helperText={errors[name]?.message} //"?" khong chac message co san(valid) 
        />
    );
}

export default InputField;