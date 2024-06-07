import * as React from 'react';

const AuthContext = React.createContext('');

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const authContext = React.useMemo(() => ({
        signIn: (newUser) => setUser(newUser),
        signOut: () => setUser(null),
        user,
    }), [user]);

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
