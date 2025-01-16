import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.init';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const axiosPublic = useAxiosPublic()

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
            if(currentuser){
                // get token and store client
                const userInfo = {email: currentuser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    console.log(res.data)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                    // setLoading(false)
                })
            }
            else{
                // TODO:remove token
                localStorage.removeItem('access-token')
            }
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