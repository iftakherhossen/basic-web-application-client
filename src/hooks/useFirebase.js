import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/LoginPage/Firebase/Firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (fName, lName, email, phone, password, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { fName, lName, email, phone };
                setUser(newUser);

                //save user to the database
                saveUser(fName, lName, email, phone);

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: fName + ' ' + lName
                })
                    .then(() => {})
                    .catch((error) => {});
                navigate("/home");
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/home')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe
    }, [auth])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }

    const saveUser = (fName, lName, email, phone) => {
        const user = { fName, lName, email, phone };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return {
        registerUser,
        loginUser,
        logOut,
        user,
        loading,
        authError
    }
}

export default useFirebase;