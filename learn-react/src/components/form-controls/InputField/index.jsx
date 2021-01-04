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

    return (
        <Controller
            name={name} //bat buoc
            control={form.control} //bat buoc
            as={TextField}

            fullWidth
            label={label}
            disabled={disabled}
        >
        
        </Controller>
    );
}

export default InputField;