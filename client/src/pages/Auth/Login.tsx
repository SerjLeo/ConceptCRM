import React from 'react';
import useFormInput from '../../hooks/useFormInput';
import {Button, TextField} from '@mui/material';
import useTypedSelector from '../../hooks/useTypedSelector';
import {UserSignInForm} from '../../redux/user/types';
import useActions from '../../hooks/useActions';
import styles from '../../assets/styles/Pages/Form.module.scss';

const Login: React.FC = () => {
  const {loading} = useTypedSelector(state => state.user)
  const {signIn} = useActions()

  const {getFormFieldProps, onFormSubmit} = useFormInput({
    email: '',
    password: ''
  })

  const handleSubmit = async (form: UserSignInForm) => {
    signIn(form)
  }

  return <div className={`${styles.form_wrapper} ${styles.auth_form}`}>
    <div className={styles.form_container}>
      <h2 className={styles.form__title}>Вход</h2>
      <form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
        <TextField label='Имя пользователя' {...getFormFieldProps('email')} required/>
        <TextField label='Пароль' type='password' {...getFormFieldProps('password')} required/>
        <Button disabled={loading} type="submit">Войти</Button>
      </form>
    </div>
  </div>
}

export default Login
