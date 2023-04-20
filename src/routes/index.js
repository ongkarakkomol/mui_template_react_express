import { useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //
export default function ThemeRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isCompleteCheckLogin, setIsCompleteCheckLogin] = useState(false);

    useEffect(() => {
        const getToken = async () => {
            console.log('getToken:', 'test');
            try {
                let res = await fetch('/get_token', {
                    method: 'GET'
                });

                let result = await res.json();
                if (result.code === 1000) {
                    console.log(result);
                    setIsLoggedIn(result.access_token);
                    setIsCompleteCheckLogin(true);
                    return 'Bearer ' + result.access_token;
                }
            } catch (e) {
                console.log(e);
                return 'all_token_expired';
            }
        };

        getToken();
        console.log('isLoggedIn', isLoggedIn);
    }, []);

    const main = useRoutes(MainRoutes(isLoggedIn));
    const login = useRoutes(LoginRoutes(isLoggedIn));

    // return main || login;
    return isCompleteCheckLogin ? <>{main || login}</> : null;
}
