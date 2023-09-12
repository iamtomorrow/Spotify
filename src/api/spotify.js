
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '6b921a08d6014c1a898e3bac088faa27'
const REDIRECT_URI = 'http://localhost:5173/'
const RESPONSE_TYPE = 'token';

export const Signin = ( ) => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    const URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
    window.location.href = URL;
}

export const API = {
    getUser: async ( token ) => {
        try {
            let response = await fetch("https://api.spotify.com/v1/me", 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            let data = await response.json();
            console.log("d");
            return data;
        } catch (err) {
            return err;
        }
    }
}
