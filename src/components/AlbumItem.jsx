import { useEffect } from "react"

export const AlbumItem = ( { album, loading } ) => {
    return (
        <div className="album-item--container" style={{ opacity: loading ? 0.1 : ""}}>
            <div className="album-item-inner--container">
                <div className="album-item-top">
                    <img className="album-item-image" src={ album.images[0].url } />
                </div>
                <div className="album-item-center">
                    <p className="album-item-name">{ album.name }</p>
                    <p className="album-item-type">{ album.type }</p>
                </div>
                <div className="album-item-footer">
                    <p></p>
                </div>
            </div>
        </div>
    )
}
