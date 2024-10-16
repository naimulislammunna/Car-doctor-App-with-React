import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userInfo, setuserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const handleSignIn = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setuserInfo(user);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const info = {
        handleRegister, 
        handleSignIn, 
        googleLogIn, 
        logOut,
        userInfo,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;