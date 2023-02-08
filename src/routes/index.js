import { useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //
export default function ThemeRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    useEffect(() => {
        getToken();
        console.log('isLoggedIn', isLoggedIn);
    }, []);

    const getToken = async () => {
        try {
            let res = await fetch('/get_token', {
                method: 'GET'
            });

            let result = await res.json();
            console.log('result', result);
            if (result.code === 1000) {
                console.log(result);
                setIsLoggedIn(result.access_token);
                return 'Bearer ' + result.access_token;
            }
        } catch (e) {
            console.log(e);
            return 'all_token_expired';
        }
    };

    const main = useRoutes(MainRoutes(isLoggedIn));
    const login = useRoutes(LoginRoutes(isLoggedIn));

    return main || login;
}
