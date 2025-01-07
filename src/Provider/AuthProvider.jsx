import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.init';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    const provider = new GoogleAuthProvider()

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profileInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profileInfo)
    }

    const loginWithEmailPass = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginWithGoogle,
        loginWithEmailPass,
        createUser,   
        updateUserProfile,
        logOut
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;