
import { HomeIcon, 
        SearchIcon,
        LibraryIcon,
        HeartIcon,
        PlusCircleIcon,
        RssIcon } from '@heroicons/react/outline';
import Logo from '../assets/logo.png';

export const Sidebar = ( { user } ) => {
    return (
        <div className="sidebar--container">
            <div className="sidebar-inner--container">
                <div className="logo--container">
                    <img id='logo' src={ Logo }/>
                </div>
                <div className='profile--container'>
                    <div className='profile-avatar--container'>
                        <img className='profile-avatar' src={ user.images[1].url } />
                    </div>
                    <div className='profile-name--container'>
                        <p className='profile-name'>{ user.display_name }</p>
                    </div>
                </div>
                <div className="nav-list--container">
                    <div className="nav-list-item">
                        <HomeIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Home</p>
                    </div>
                    <div className="nav-list-item">
                        <SearchIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Search</p>
                    </div>
                    <div className="nav-list-item">
                        <LibraryIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Your Library</p>
                    </div>
                    <div className="nav-list-item">
                        <HeartIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Liked Songs</p>
                    </div>
                    <div className="nav-list-item">
                        <PlusCircleIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Create Playlist</p>
                    </div>
                    <div className="nav-list-item">
                        <RssIcon className='nav-list-icon' />
                        <p className='nav-list-p'>Your Episodes</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
