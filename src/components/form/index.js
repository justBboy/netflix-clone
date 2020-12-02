import React from "react";
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Base,
} from "./styles/form";

const Form = ({ children, ...restOfProps }) => {
  return <Container {...restOfProps}>{children}</Container>;
};

Form.Error = function FormError({children, ...restOfProps}){
return <Error {...restOfProps}>{children}</Error>
}

Form.Base = function FormBase({children, ...restOfProps}){
return <Base {...restOfProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restOfProps}){
return <Title {...restOfProps}>{children}</Title>
}

Form.Text = function FormText({children, ...restOfProps}){
return <Text {...restOfProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({children, ...restOfProps}){
return <TextSmall {...restOfProps}>{children}</TextSmall>
}

Form.Link = function FormLink({children, ...restOfProps}){
return <Link {...restOfProps}>{children}</Link>
}

Form.Input = function FormInput({children, ...restOfProps}){
return <Input {...restOfProps}>{children}</Input>
}

Form.Submit = function FormSubmit({children, ...restOfProps}){
return <Submit {...restOfProps}>{children}</Submit>
}

export default Form;
