import React, { createContext, useContext, useState } from "react";
import {
  Title,
  Frame,
  Item,
  Container,
  Inner,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...restOfProps }) => {
  return (
    <Container {...restOfProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restOfProps }) {
  return <Title {...restOfProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restOfProps }) {
  return <Frame {...restOfProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restOfProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restOfProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restOfProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restOfProps}
    >
      {children}
      {toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close"/>
      ): (
        <img src="/images/icons/add.png" alt="Add"/>
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restOfProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restOfProps}>{children}</Body> : null;
};

export default Accordion;
