import { useEffect, useState } from "react"

export const ArtistItem = ( { artist } ) => {
    const [ artistImage, setArtistImage ] = useState("");

    useEffect(() => {
        artist.images.forEach((el) => {
            setArtistImage(el.url);
        })
    }, [artist]);

    return (
        <div className="artist-item--container" key={ artist.id }>
            <div className="artist-item-inner--container">
                <div className="artist-item-top">
                    <img className="artist-item-image" src={ artistImage } />
                </div>
                <div className="artist-item-center">
                    <p className="artist-item-name">{ artist.name }</p>
                    <p className="artist-item-type">{ artist.type }</p>
                </div>
                <div className="artist-item-footer">

                </div>
            </div>
        </div>
    )
}
