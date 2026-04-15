import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useAuth = (setLoggedIn) => {

    useEffect(() => {

        const handleLogout = () => {
            localStorage.removeItem("token");
            setLoggedIn(false);
            console.log("User logged out");
        };

        const checkToken = () => {
            const token = localStorage.getItem("token");

            if (!token) {
                handleLogout();
                return;
            }

            try {
                const decoded = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                // Expired token
                if (decoded.exp < currentTime) {
                    console.log("Token expired");
                    handleLogout();
                }

            } catch (error) {
                // Invalid token
                console.log("Invalid token");
                handleLogout();
            }
        };

        // run once
        checkToken();

        // run repeatedly
        const interval = setInterval(checkToken, 5000);

        return () => clearInterval(interval);

    }, [setLoggedIn]);
};

export default useAuth;