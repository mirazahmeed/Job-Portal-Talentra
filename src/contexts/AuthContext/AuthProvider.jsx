import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, GoogleProvider);
	};

	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			if (currentUser?.email) {
				const userData = {
					email: currentUser.email,
				};
				axios
					.post("http://localhost:3000/jwt", userData)
					.then((res) => {
						console.log("token after jwt", res.data);
					})
					.catch((err) => {
						console.log(err);
					});
			}
			console.log(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const authInfo = {
		createUser,
		signIn,
		loading,
		user,
		signOutUser,
		signInWithGoogle,
	};
	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
