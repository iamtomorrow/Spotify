import { useEffect, useState } from "react"

export const TrackItem = ( { track, loading } ) => {
    const [ trackImage, setTrackImage ] = useState();
    const [ trackDuration, setTrackDuration ] = useState();

    useEffect(() => {
        let min = Math.floor(track.duration_ms / 60000);
        let sec = Math.ceil((track.duration_ms % 60000) / 1000);
        setTrackDuration( `${min}:${sec.toString().length === 1 ? "0"+sec : sec}` );
    }, []);

    useEffect(() => {
        track.album.images.forEach(el => {
            setTrackImage(el.url);
        })
    }, []);

    return (
        <div className="track-item--container" style={{ opacity: loading ? 0.1 : ""}}>
            <div className="track-item-inner--container">
                <div className="track-item-left">
                    <img className="track-item-image" src={ trackImage } />
                </div>
                <div className="track-item-center">
                    <p className="track-item-name">{ track.name }</p>
                    <p className="track-item-artist-name">{ track.artists[0].name }</p>
                </div>
                <div className="track-item-right">
                    <p className="track-item-duration">{ trackDuration }</p>
                </div>
            </div>
        </div>
    )
}
