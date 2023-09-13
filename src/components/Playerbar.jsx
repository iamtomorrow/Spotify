
import { PlayIcon } from '@heroicons/react/outline';

export const Playerbar = ( { track } ) => {
    return (
        <div className="playerbar--container">
            <div className="playerbar-inner--container">
                <div className="playerbar-left--container">

                </div>
                <div className="playerbar-central--container">
                    <div className="player-controls--container">
                        <div className="controls--container">
                            <div className="control-icon">
                                <PlayIcon width={24} height={24} color='#ffffff' />
                            </div>
                        </div>
                        <div className="timeline--container">
                            <div id='timeline'></div>
                        </div>
                    </div>
                </div>
                <div className="playerbar-right--container">

                </div>
            </div>
        </div>
    )
}
