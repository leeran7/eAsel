import React from 'react';
// import LoginButton from '../components/LoginButton';
// import LogoutButton from '../components/LogoutButton';
import AuthForm from '../components/AuthForm';
import LoginForm from '../components/LoginForm';
// function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

export default function Login() {
  return (
    <div>
      <LoginForm/>
    </div>
    
  )
}