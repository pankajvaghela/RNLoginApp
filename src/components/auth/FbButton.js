import React from "react";
import {createButton} from "react-social-login-buttons";
 
const config = {
  text: "Login with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998", fontSize: 15 },
  activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);
 
export default MyFacebookLoginButton;