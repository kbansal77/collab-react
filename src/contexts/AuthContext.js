import React, { useContext, useState, useEffect } from "react";
import {
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    getAdditionalUserInfo 
} from "firebase/auth";
import { app, auth } from "../firebase.js";

import { useNavigate } from "react-router-dom";


const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [isNewUser, setIsNewUser] = useState()
    // const history = useHistory();
    // const [currentUser, setCurrentUser] = useState();
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [displayName, setDisplayName] = useState("")

    // async function getusername(email){
    //   var response = await fetch(`https://mailman-backend.herokuapp.com/${email}`)
    //   var data = await response.json()
    //   setDisplayName(data.user.displayName)
    // }

    const Gsignup = async () =>{
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider)
            .then( (result) => {
                const { isNewUser } = getAdditionalUserInfo(result) 
                setIsNewUser(isNewUser)
                // if(isNewUser)navigate("/profile")
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(result)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
                // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential =
                //     GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        //   var provider = new firebase.auth.GoogleAuthProvider();
        //   // console.log(provider)
        //   return firebase
        //     .auth()
        //     .signInWithPopup(provider)
        //     .then((result) => {
        //       var user = result.user;
        //       setDisplayName(user.displayName)
        //       if (result.additionalUserInfo.isNewUser) {
        //         addUserDetails(user.displayName, user.email);
        //       }
        //     }).then(() => {
        //       setError("");
        //     });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // console.log(user);
            setLoading(false);
            // if (user != null)
            //   console.log(user.additionalUserInfo)
        });

        return unsubscribe;
    }, []);

    function logout() {
        return signOut(auth)
    }

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged((user) => {
    //     setCurrentUser(user);
    //     console.log(user);
    //     setLoading(false);
    //     // if (user != null)
    //     //   console.log(user.additionalUserInfo)
    //   });

    //   return unsubscribe;
    // }, []);
    // console.log(displayName)
    const value = {
        currentUser,
        Gsignup,
        logout,
        isNewUser
        // emailLogin,
        // emailSignup,
        // error,
        // displayName
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
