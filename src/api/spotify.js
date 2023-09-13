
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '6b921a08d6014c1a898e3bac088faa27'
const REDIRECT_URI = 'http://localhost:5173/'
const RESPONSE_TYPE = 'token';

export const Signin = ( ) => {
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
            return data;
        } catch (err) {
            return err;
        }
    },

    getFeatured: async ( token ) => {
        try {
            let response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    },

    getMyPlaylists: async ( token ) => {
        try {
            let response = await fetch("https://api.spotify.com/v1/me/playlists", 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            let data = await response.json();
            return data.items;
        } catch (err) {
            return err;
        }
    },

    getArtists: async ( token, key ) => {
        try {
            let response = await fetch(`https://api.spotify.com/v1/search?q=${key}&type=artist&limit=5`, 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            let data = await response.json();
            return data.artists.items;
        } catch (err) {
            return err;
        }
    },

    getAlbums: async ( token, key ) => {
        try {
            let response = await fetch(`https://api.spotify.com/v1/search?q=${key}&type=album&limit=5`, 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            let data = await response.json();
            return data.albums.items;
        } catch (err) {
            return err;
        }
    },

    getPlaylists: async ( token, key ) => {
        try {
            let response = await fetch(`https://api.spotify.com/v1/search?q=${key}&type=playlist&limit=5`, 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            let data = await response.json();
            return data.playlists.items;
        } catch (err) {
            return err;
        }
    },

    getSongs: async ( token, key ) => {
        try {
            let response = await fetch(`https://api.spotify.com/v1/search?q=${key}&type=track&limit=5`, 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            let data = await response.json();
            return data.tracks.items;
        } catch (err) {
            return err;
        }
    },
}
