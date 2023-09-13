
import { useEffect, useState } from "react"
import { HomeCard } from "./HomeCard"
import { PlaylistItem } from "./PlaylistItem";
import { API } from "../api/spotify";

export const Homebar = ( { token } ) => {
    const [ content, setContent ] = useState();
    const [ topTracks, setTopTracks ] = useState();

    useEffect( ( ) => {
        const getData = async ( ) => {
            let data = await API.getFeatured(token);
            setContent(data);
        }
        getData();
    }, []);

    return (
        <div className="homebar--container">
            <div className="homebar-inner--container">
                <div className="homebar-top--container">
                    <div className="homebar-hader--container">
                        <p>Good evening</p>
                    </div>
                    <div className="homebar-cards-section">
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                    </div>
                </div>
                <div className="homebar-central--container">
                    <div className="items--container">
                        <div className="items-header--container">{ content ? content.message : "" }</div>
                            <div className="items-inner--container">
                            { content &&
                                content.playlists.items.map(( item ) => (
                                    <PlaylistItem playlist={ item }/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
