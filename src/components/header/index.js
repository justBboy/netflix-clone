import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton
} from "./styles/header";

const Header = ({ bg = true, children, ...restOfProps }) => {
  return bg ? <Background {...restOfProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restOfProps }) {
  return <Container {...restOfProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restOfProps }) {
  return <Group {...restOfProps}>{children}</Group>;
};

Header.Feature = function HeaaderFeature({ children, ...restOfProps }) {
  return <Feature {...restOfProps}>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restOfProps }) {
  return <Picture {...restOfProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restOfProps }) {
  return <Profile {...restOfProps}>{children}</Profile>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restOfProps
}) {
  return <FeatureCallOut {...restOfProps}>{children}</FeatureCallOut>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restOfProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restOfProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restOfProps }) {
  return <Dropdown {...restOfProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...restOfProps }) {
  return <Text {...restOfProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restOfProps }) {
  return <Link {...restOfProps}>{children}</Link>;
};

Header.HeaderPlayButton = function HeaderPlayButton({ children, ...restOfProps }) {
  return <PlayButton {...restOfProps}>{children}</PlayButton>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProps }) {
  return <ButtonLink {...restOfProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restOfProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restOfProps} />
    </ReactRouterLink>
  );
};

export default Header;
