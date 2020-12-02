import React from 'react'
import {Container, Title, Subtitle} from './styles/feature';

const Feature = ({children, ...restOfProps}) => {
    return (
        <Container {...restOfProps}>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restOfProps}){
    return <Title {...restOfProps}>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({children, ...restOfProps}){
    return <Subtitle {...restOfProps}>{children}</Subtitle>
}

export default Feature
