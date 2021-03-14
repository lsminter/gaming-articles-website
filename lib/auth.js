import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from './firebase';

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

  const signinWithGithub = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider());
    setUser(response.user);
    return response.user;
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
    signinWithGithub,
    signout,
  };
}
