import React from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { login } from '../userSlice'
import { useSnackbar } from 'notistack'
import { PropTypes } from 'prop-types';
import LoginForm from '../LoginForm'

 function Login(props) {
  
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = async (values) => {
      try {
        
        const action = login(values);
        const resultAction = await dispatch(action);
        unwrapResult(resultAction)
        //close dialog
        const {closeDialog} = props;
        if (closeDialog) {
          closeDialog();
        }

        // do some thing here on register successfully
          
        enqueueSnackbar('Login succesfully', {variant: 'success'})
      } catch (error) {
        enqueueSnackbar(error.message, {variant: 'error'})
      }
    };


  return (
    <div>
        <LoginForm onSubmit={handleSubmit}/>
    </div>
  )
}

Login.propTypes = {
  closeDialog: PropTypes.func,
}

export default Login
