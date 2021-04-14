import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove('fast-feedback-auth');

      setLoading(false);
      return false;
    }
  };

  const signinWithGitHub = async (redirect) => {
    setLoading(true);
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider());
    handleUser(response.user);
    if (redirect) {
      Router.push(redirect);
    }
  };
  
  const signout = async () => {
    await firebase
      .auth()
      .signOut();
    setUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGitHub,
    signout,
  };
}

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token
  };
};
