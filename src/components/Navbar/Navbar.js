import React from "react";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import logo from "../../img/logo.svg";
import { Nav, Link, LogoLink, Logo, LanguageSwitch, LanguageLink, Menu, styles } from "./styles";
import { routes } from "../../routes";

export const Navbar = () => (
  <ScrollConsumer>
    {({ scrollTop, coloredNav }) => {
      const transform = `translateY(${scrollTop}px)`;

      return (
        <Nav style={{ transform }} coloredNav={coloredNav}>
          <LogoLink to="/">
            <Logo as="img" src={logo} alt="logo" />
          </LogoLink>
          <LanguageSwitch>
            <LanguageLink isActive>ru</LanguageLink>
            <LanguageLink>en</LanguageLink>
          </LanguageSwitch>
          <Menu>
            {routes.map(({ text, route }) => (
              <Link key={route} to={route} activeClassName={styles.activeLink}>
                {text}
              </Link>
            ))}
          </Menu>
        </Nav>
      );
    }}
  </ScrollConsumer>
);