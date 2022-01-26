import * as React from "react";

// const authContext = React.createContext();

export function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    }
  };
}

// export function AuthProvider({ children }) {
//   const auth = useAuth();
//   console.log('hello', auth)
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// export default function AuthConsumer() {
//   return React.useContext(authContext);
// }