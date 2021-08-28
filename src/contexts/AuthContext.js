import React, { useContext, useState, useEffect } from 'react'

//FIREBASE: to call the auth from the firebase file
import { auth } from '../firebase'

//CONST: create a new context
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    //CONST: usage of useState
    const [currentUser, setCurrentUser] = useState()
    const [currentUserID, setCurrentUserID] = useState()
    const [loading, setLoading] = useState(true)
 
    //FUNCTION: signup
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //FUNCTION: signin
    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    //FUNCTION: logout
    function logout(){
        return auth.signOut()
    }
    
    //FUNCTION: resetpassword
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            //SET: if user logged in set the user
            setCurrentUser(user)

            //Without the if, there will be an error
            if(user !== null ){
                //SET: get the user.uuid
                setCurrentUserID(user.uid)
            }
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        currentUserID,
        signup,
        signin, 
        logout,
        resetPassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}