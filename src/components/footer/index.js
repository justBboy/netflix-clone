import React from 'react'
import {Container, Row, Column, Link, Title, Text, Break} from './styles/footer';

const Footer = ({children, ...restOfProps}) => {
    return (
        <Container {...restOfProps}>
            {children}
        </Container>
    )
}

Footer.Row = function FooterRow({children, ...restOfProps}){
    return <Row {...restOfProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restOfProps}){
    return <Column {...restOfProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restOfProps}){
    return <Link {...restOfProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restOfProps}){
    return <Title {...restOfProps}>{children}</Title>
}

Footer.Text = function FooterText({children, ...restOfProps}){
    return <Text {...restOfProps}>{children}</Text>
}

Footer.Break = function FooterBreak({children, ...restOfProps}){
    return <Break {...restOfProps}>{children}</Break>
}

export default Footer
