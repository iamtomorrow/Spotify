import { useState } from "react"
import { API } from "../api/spotify";
import { ArtistItem } from "./ArtistItem";
import { AlbumItem } from "./AlbumItem";
import { TrackItem } from "./TrackItem";

export const Searchbar = ( { token } ) => {
    const [ searchKey, setSearchKey ] = useState("");
    
    const [ artists, setArtists ] = useState();
    const [ albums, setAlbums ] = useState();
    const [ tracks, setTracks ] = useState();

    const handleSearch = async ( ) => {
        let data = await API.getArtists( token, searchKey );
        let data2 = await API.getAlbums( token, searchKey );
        let data3 = await API.getSongs( token, searchKey );
        setArtists( data );
        setAlbums( data2 );
        setTracks( data3 );
    }

    return (
        <div className="searchbar--container">
            <div className="searchbar-inner--container">
                <div className="searchbar-top--container">
                    <input placeholder="Search..." 
                           value={ searchKey }
                           onChange={ (e) => setSearchKey(e.target.value)} />
                    <button onClick={ handleSearch }>Search</button>
                </div>
                <div className="items--container">
                    <div className="items-header--container">Artists</div>
                    <div className="items-inner--container">
                        { artists &&
                            artists.map(( item ) => (
                                <ArtistItem artist={item} key={ item.id } />
                            ))
                        }
                    </div>
                    
                    <div className="items-header--container">Playlists</div>
                    <div className="items-inner--container">
                        { tracks &&
                            tracks.map(( item ) => {
                                <TrackItem />
                            })
                        }
                    </div>

                    <div className="items-header--container">Playlists</div>
                    <div className="items-inner--container">
                        { albums &&
                            albums.map(( item ) => {
                                <AlbumItem album={ item } key={ item.id } />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
