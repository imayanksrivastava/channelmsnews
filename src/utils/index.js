const TOKEN_KEY = 'jwt';

export const login = (userToken) => {
    localStorage.setItem(TOKEN_KEY, userToken);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const getTokenfromLocalStorage = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return localStorage.getItem(TOKEN_KEY);
    }

    return false;
}