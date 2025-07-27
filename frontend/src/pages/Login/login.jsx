import React, { useState } from 'react';
import styles from './login.module.scss';
import InputCustome from '../../components/common/input/inputCustome';
import ButtonCustome from '../../components/common/button/ButtonCustome';
import handleLogin from '../../services/loginService.js'; // Assuming handleLogin is a function that handles the login logic

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const accessToken = await handleLogin({ username, password });
    localStorage.setItem('accessToken', accessToken);
    window.location.href = '/'; 
  };

  return (
    <div className={styles.loginContainer}>
      <div onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.title}>Đăng nhập</h2>
        
        <InputCustome name="username" value={username} onChangeHandle={(value) => setUsername(value)} label="Tên đăng nhập"  />
        <InputCustome name="password" value={password} onChangeHandle={(value) => setPassword(value)} label="Mật khẩu"  />
        <p>Quên mật khẩu ?</p>
        <ButtonCustome onClickHandle={handleSubmit} name="Đăng nhập" />
      
      </div>
    </div>
  );
}

export default Login;