import { linkAPI } from "../utils/data.jsx";

const handleLogin = async ({username , password}) => {
    const response = await fetch(
        linkAPI + "auth/login",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    const accessToken = data.data.access_token 
    return accessToken;
    
}

export default handleLogin;