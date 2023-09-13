
import { useEffect, useState } from 'react'
import './App.css'
import { Playerbar } from './components/Playerbar'
import { Sidebar } from './components/Sidebar'
import { Login } from './Login';
import { API } from './api/spotify';
import { Searchbar } from './components/Searchbar';
import { Homebar } from './components/HomeBar';

function App() {
  const [ token, setToken ] = useState(window.localStorage.getItem("token"));
  const [ userInfo, setUserInfo ] = useState();
  const [ myPlaylists, setMyPlaylists ] = useState();

  const [ bar, setBar ] = useState(1);

  const handleChangeBar = ( key ) => {
    setBar( key );
  }

  useEffect(() => {
    const hash = window.location.hash;
    let accessToken = hash.split("&")[0].split("=")[1];
    let token = window.localStorage.setItem("token", accessToken);

    // console.log(token);
    // console.log(accessToken);

    const getUser = async () => {
      if (!token) {
        window.localStorage.setItem('token', accessToken);
        setToken(accessToken);
        let data = await API.getUser(accessToken);
        setUserInfo(data)
      } else {
        setToken(accessToken);
        let data = await API.getUser(accessToken);
        setUserInfo(data);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    const getMyPlaylists = async ( ) => {
      if (token) {
        let data = await API.getMyPlaylists(token);
        setMyPlaylists(data);
        console.log(myPlaylists);
      }
    }
    getMyPlaylists();
  }, []);

  if ( !token ) {
    return <Login />
  }

  return (
    <div className='App'>
      <main className='main--container'>
        <div className='top'>
          <div className='left--container'>
            { userInfo &&
              <Sidebar user={ userInfo ? userInfo : '' } playlists={ myPlaylists } onClick={ handleChangeBar } />
            }
          </div>
          <div className='right--container'>
            { bar === 0 &&
              <Homebar token={ token } />
            }
            { bar === 1 &&
              <Searchbar token={ token } />
            }
          </div>
        </div>
        <div className='bottom'>
          <Playerbar />
        </div>
      </main>
    </div>
  )
}

export default App
