import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    user: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") || null
};

const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                token: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                user: null,
                token: null
            };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("token", state.token);
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }, [state]);

    return (
        <authContext.Provider value={{ user: state.user, token: state.token, dispatch }}>
            {children}
        </authContext.Provider>
    );
};

export { authContext, AuthContextProvider };
