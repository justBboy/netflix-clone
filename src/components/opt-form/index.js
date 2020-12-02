import React from 'react'
import {Container, Input, Button, Text, Break} from './styles/opt-form'

const OptForm = ({children, ...restOfProps}) => {
    return (
        <Container {...restOfProps}>
            {children}
        </Container>
    )
}

OptForm.Input = function OptFormInput({...restOfProps}){
    return <Input {...restOfProps} />;
}


OptForm.Button = function OptFormButton({children, ...restOfProps}){
    return <Button {...restOfProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now"/>
    </Button>;
}

OptForm.Text = function OptFormText({children, ...restOfProps}){
    return <Text {...restOfProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({...restOfProps}){
    return <Break {...restOfProps} />
}



export default OptForm
