import { useEffect } from "react"

export const AlbumItem = ( { album } ) => {

    useEffect(() => {
        console.log(album);
    }, []);

    return (
        <div className="album-item--container">
            <div className="album-item-inner--container">
                <div className="album-item-top">
                    <img className="album-item-image" src={ album.images[0].url } />
                </div>
                <div className="album-item-center">
                    <p className="album-item-name">{ album.name }</p>
                    <p className="album-item-type">{ album.type }</p>
                </div>
                <div className="album-item-footer">
                    <p>kmsdc</p>
                </div>
            </div>
        </div>
    )
}
