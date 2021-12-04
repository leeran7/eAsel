import React, {useContext }from 'react'
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Button, Container, Typography } from '@material-ui/core';

const AuthButton = withRouter(({ history }) => {
    const auth = useContext(AuthContext);
    if(!auth.isAuthenticated){
        return <Button  href="/login">Log In</Button>
    }
    const logout = () => {
        auth.signout().then(() => history.push("/"));
    }
    return (
        <div >
            <span style={{color: "black"}}>Welcome { auth.user.firstName }</span>
            <Button  onClick={logout}>Log Out</Button>
        </div>
    );
});

export default AuthButton;