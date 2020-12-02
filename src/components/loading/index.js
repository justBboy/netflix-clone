import React from 'react';
import {Spinner, LockBody, Picture, ReleaseBody} from './styles/loading';

const Loading = ({src, ...restOfProps}) => {
    return (
        <Spinner {...restOfProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}

export default Loading;