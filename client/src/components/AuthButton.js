import React, {useContext }from 'react'
import { withRouter } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Button, Container } from '@material-ui/core';

const AuthButton = withRouter(({ history }) => {
    const auth = useContext(AuthContext)
    if(!auth.isAuthenticated){
        return <Button variant="contained" href="/login">Log In</Button>
    }
    const logout = () => {
        auth.signout().then(() => history.push("/"));
    }
    return (
        <Container>
            Welcome { auth.user.firstName }
            <Button onClick={logout}></Button>
            <Button variant="contained"  href="#contained-buttons">
                    Log Out
                    </Button>
        </Container>
    );
});

export default AuthButton;