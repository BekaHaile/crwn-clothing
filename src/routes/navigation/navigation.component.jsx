import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  function handleClick() {
    const deepLink = "tikethoss://events";
    const downloadLink = "https://google.com";

    try {
      window.location.href = deepLink;
    } catch (error) {
      console.log(error);
      // Handle the error here
      setTimeout(() => {
        // Check if the deep link was successfully opened
        if (document.visibilityState === "visible") {
          // The deep link was successfully opened
          return;
        } else {
          // The deep link was not opened
          // Open the download link instead
          window.location.href = downloadLink;
        }
      }, 500);
    }
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink onClick={handleClick}>"Open App"</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
