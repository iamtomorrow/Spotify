
import { useEffect } from "react"

export const PlaylistItem = ( { playlist, loading } ) => {
    return (
        <div className="playlist-item--container" style={{ opacity: loading ? 0.1 : ""}}>
            <div className="playlist-item-inner--container">
                <div className="playlist-item-top">
                    <img className="playlist-item-image" src={ playlist.images[0].url } />
                </div>
                <div className="playlist-item-center">
                    <p className="playlist-item-name">{ playlist.name }</p>
                    <p className="playlist-item-type">{ playlist.type }</p>
                </div>
                <div className="playlist-item-footer">
                    <p></p>
                </div>
            </div>
        </div>
    )
}
