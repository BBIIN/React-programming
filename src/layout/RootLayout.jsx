/* eslint-disable react/prop-types */

import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

function RootLayout(props) {
  return (
    /*  <React.Fragment>
      <HeaderBar key="header-bar" />
      <main key="main">{props.children}</main>
      <FooterBar key="footer-bar" />
    </React.Fragment> */
    <div>
      <HeaderBar key="header-bar" />
      <main key="main">{props.children}</main>
      <FooterBar key="footer-bar" />
    </div>
  );
}

export default RootLayout;
