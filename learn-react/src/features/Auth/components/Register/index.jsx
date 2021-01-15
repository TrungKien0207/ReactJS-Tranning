import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if ( closeDialog ) {
        closeDialog();
      }

      //Show reports 
      console.log('New user: ', user);
      enqueueSnackbar('Đã đăng kí thành công!!!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error);
      if (error.message) {
        enqueueSnackbar('Email được đã đăng kí!!!' , { variant: 'error' });
      }
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
