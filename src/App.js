import React, { Component, Suspense } from  'react' 
import './App.css';
import Nav from './components/Nav/Nav';
import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import store from './redux/redux-store';
import { withSuspenseRedirect } from './components/hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert(promiseRejectionEvent);
  // }
  componentDidMount() {
    this.props.initializeApp();
    //window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  // componentWillUnmount() {
  //   window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  // }
  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className =  "app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className = "app-wrapper-content">
          <Switch>
            <Route exact path ="/" render= {() => <Redirect to={"/profile"} />} />
            <Route path ="/dialogs" render={withSuspenseRedirect(DialogsContainer)} />
            <Route path ="/profile/:userId?" render= {withSuspenseRedirect(ProfileContainer)} />
            <Route path ="/users" render= { () =>  <UsersContainer />} />
            <Route path ="/login" render= { () =>  <LoginPage />} />
            <Route path ="*" render= { () =>  <div><b>404 NOT FOUND</b></div>} />
            {/* <Route path ="/news" element = {<News />} />
            <Route path ="/music" element = {<Music />} />
            <Route path ="/settings" element = {<Settings />} />
            <Route path ="/friends" element = {<Friends />} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp = () => {
  return (<HashRouter>
        <Provider store = {store}>
            <AppContainer />
        </Provider>
    </HashRouter>)
} 

export default SamuraiJSApp 