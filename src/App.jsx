
import { useEffect, useState } from 'react'
import './App.css'
import { Playerbar } from './components/Playerbar'
import { Sidebar } from './components/Sidebar'
import { Login } from './Login';
import { API } from './api/spotify';

function App() {
  const [ token, setToken ] = useState(window.localStorage.getItem("token"));
  const [ data, setData ] = useState();

  useEffect(() => {
    let hash = window.location.hash;
    let accessToken = hash.split("&")[0].split("=")[1];

    if (!token) {
      setToken(accessToken);
    }
  }, [token]);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        setData(API.getUser(token));
        console.log("data", data);
      }
    }
    getUser();
  }, [])

  if ( !token ) {
    return <Login />
  } else {
    console.log(token);
  }

  return (
    <div className='App'>
      <main className='main--container'>
        <div className='top'>
          <div className='left--container'>
            <Sidebar />
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
