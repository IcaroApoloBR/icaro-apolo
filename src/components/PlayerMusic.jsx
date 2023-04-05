import { Icon } from '@iconify/react';
import { useState, useRef } from 'react';

function PlayerMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function togglePlayingMusic() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div>
            <audio ref={audioRef} src="/worthNothing.mp3" />
            <button onClick={togglePlayingMusic}>
                {isPlaying ?
                    <Icon icon="svg-spinners:bars-scale-middle" width="32" />
                    :
                    <Icon icon="tabler:antenna-bars-off" width="32" />
                }
            </button>
        </div>
    );
}

export default PlayerMusic;