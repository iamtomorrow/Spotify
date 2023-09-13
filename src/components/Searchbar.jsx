
import { ArrowRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from "react"
import { API } from "../api/spotify";
import { ArtistItem } from "./ArtistItem";
import { AlbumItem } from "./AlbumItem";
import { TrackItem } from "./TrackItem";

export const Searchbar = ( { token } ) => {
    const [ searchKey, setSearchKey ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ artists, setArtists ] = useState();
    const [ albums, setAlbums ] = useState();
    const [ playlists, setPlaylists ] = useState();
    const [ tracks, setTracks ] = useState();

    /* useEffect(() => {
        if (loading) {

        }
    }, [loading]) */

    const handleSearch = async ( e ) => {
        e.preventDefault();

        setLoading(true);
        let data = await API.getArtists( token, searchKey );
        let data2 = await API.getAlbums( token, searchKey );
        let data3 = await API.getSongs( token, searchKey );
        let data4 = await API.getPlaylists( token, searchKey );
        setArtists( data );
        setAlbums( data2 );
        setTracks( data3 );
        setPlaylists( data4 );
        setLoading(false);
    }

    return (
        <div className="searchbar--container">
            <div className="searchbar-inner--container">
                <div className="searchbar-top--container">
                    <form className="searchbar-form--container" onSubmit={ handleSearch }>
                        <input placeholder="Search..." 
                            className="searchbar-top-input"
                            value={ searchKey }
                            type="search"
                            onChange={ (e) => setSearchKey(e.target.value)} />
                        <button type="submit" className="searchbar-submit-button">
                            <ArrowRightIcon width={14} height={14} color='#1DD460' />
                        </button>
                    </form>
                </div>
                <div className="items--container">
                    <div className="items-header--container">Artists</div>
                    <div className="items-inner--container">
                        { artists &&
                            artists.map(( item ) => (
                                <ArtistItem artist={item} key={ item.id } loading={ loading } />
                            ))
                        }
                    </div>
                    
                    <div className="items-header--container">Songs</div>
                    <div className="items-inner--container-column">
                        { tracks !== undefined &&
                            tracks.map(( item ) => (
                                <TrackItem track={ item } key={ item.id } loading={ loading }/>
                            ))
                        }
                    </div>

                    <div className="items-header--container">Albums</div>
                    <div className="items-inner--container">
                        { albums &&
                            albums.map(( item ) => (
                                <AlbumItem album={ item } key={ item.id } loading={ loading }/>
                            ))
                        }
                    </div>

                    <div className="items-header--container">Playlists</div>
                    <div className="items-inner--container">
                        { playlists &&
                            playlists.map(( item ) => (
                                <AlbumItem album={ item } key={ item.id } loading={ loading }/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
