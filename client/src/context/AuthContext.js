import React, { createContext, useState} from 'react'
const AuthContext = createContext();
const{ Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const authenticate = (email, password) => {
        return fetch("/api/auth/login",{
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type" : "application/json"}
        })
            .then( res => {
                if(!res.ok){
                    throw new Error("Error Logging in");
                }
                return res.json();
            })
            .then(body => {
                setUser(body);
                return body;
            })
    }
    const signout = () => {
        return fetch("/api/auth/logout",{
            method: "POST",
            headers: { "Content-Type" : "application/json"}
        })
            .then( res => {
                if(!res.ok){
                    throw new Error("Error Logging out");
                }
                return res.json();
            })
            .then(body => {
                setUser(false);
                return body;
            })
    }
    return (
        <Provider
            value={{
                authenticate,
                user,
                signout,
                isAuthenticated : user ? true : false
            }}
            >
            {children}
        </Provider>
    )
}

export { AuthContext, AuthProvider };
