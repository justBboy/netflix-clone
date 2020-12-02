import React, {useState, createContext, useContext} from 'react';
import ReactDom from 'react-dom';
import {Container, Button, Overlay, Inner, Close} from './styles/player';

export const PlayerContext = createContext();

const Player = ({children, ...restOfProps}) => {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...restOfProps}>{children}</Container>
        </PlayerContext.Provider>    
    )
}

Player.Video = function PlayerVideo({src, restOfProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return showPlayer ? ReactDom.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restOfProps}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null
}

Player.Button = function PlayerButton({...restOfProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)}>Play</Button>
}

export default Player
