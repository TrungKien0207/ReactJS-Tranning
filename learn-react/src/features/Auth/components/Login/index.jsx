import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if ( closeDialog ) {
        closeDialog();
      }

      //Show reports 
      console.log('New user: ', user);
    } catch (error) {
      console.log('Failed to login: ', error);
      if (error.message) {
        enqueueSnackbar('Email hoặc mật khẩu không đúng.' , { variant: 'error' });
      }
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
