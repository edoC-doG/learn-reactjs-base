import React from 'react'
import RegisterForm from '../RegisterForm'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { register } from '../userSlice'
import { useSnackbar } from 'notistack'
import { PropTypes } from 'prop-types';

 function Register(props) {
  
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = async (values) => {
      try {
        //auto set username = email
        values.username = values.email;
        
        const action = register(values);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction)
        //close dialog
        const {closeDialog} = props;
        if (closeDialog) {
          closeDialog();
        }

        // do some thing here on register successfully
        console.log('New User: ', user);
        enqueueSnackbar('Register succesfully', {variant: 'success'})
      } catch (error) {
        console.log('FAIL REGISTER', error)
      }
    };


  return (
    <div>
        <RegisterForm onSubmit={handleSubmit}/>
    </div>
  )
}

Register.propTypes = {
  closeDialog: PropTypes.func,
}

export default Register
