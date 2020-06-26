import React from "react";
import { Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/react-demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages
import Discovery from "views/examples/Discovery.js";
import ContactUs from "views/examples/ContactUs.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
// others

class App extends React.Component {



  render() {

    return (
      <Switch>
        <Route exact path="/" render={(props) => <Discovery {...props} />} />
        <Route exact path="/login-page" render={(props) => <LoginPage {...props} />} />
        <Route path="/sign-up" render={(props) => <SignupPage {...props} />} />
        <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route path="/landing-page" render={(props) => <LandingPage {...props} />} />
        <Route path="/nucleo-icons" render={(props) => <NucleoIcons {...props} />} />
        <Route path="/presentation"render={(props) => <Presentation {...props} />} />
        <Route path="/profile-page" render={(props) => <ProfilePage {...props} />}
        />
        <Route path="/sections" render={(props) => <Sections {...props} />} />
      </Switch>
    )
  }

};

export default App;