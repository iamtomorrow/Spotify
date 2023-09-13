
import { useEffect, useState } from 'react'
import './App.css'
import { Playerbar } from './components/Playerbar'
import { Sidebar } from './components/Sidebar'
import { Login } from './Login';
import { API } from './api/spotify';
import { Searchbar } from './components/Searchbar';

function App() {
  const [ token, setToken ] = useState(window.localStorage.getItem("token"));
  const [ userInfo, setUserInfo ] = useState();

  useEffect(() => {
    let hash = window.location.hash;
    let accessToken = hash.split("&")[0].split("=")[1];

    if (!token) {
      setToken(accessToken);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    const getUser = async () => {
      if (token) {
        let data = await API.getUser(token);
        setUserInfo(data);
      }
    }
    getUser();
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
              <Sidebar user={ userInfo ? userInfo : '' } />
            }
          </div>
          <div className='right--container'>
            <Searchbar token={ token } />
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
